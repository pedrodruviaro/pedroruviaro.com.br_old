---
title: "Vue Router - Trabalhando com parâmetros e props function mode"
description: "Aprenda a gerenciar parâmetros e props dentro de aplicações Vue utilizando o Vue Router. Aqui, mostro como trabalhar com props e props funcion mode para facilitar a criação e manutenção de rotas."
date: "2024-01-26:01:0:00"
tag: "VueJS"
image: "/images/CARD_MOCK.png"
---

# Vue Router - Trabalhando com parâmetros e props function mode

## O que é?

O Vue-Router é uma biblioteca oficial do Vue.js que facilita a construção de Single Page Applications (SPAs). Ele se integra facilmente ao Vue.js, fornecendo uma solução simples e flexível para o gerenciamento de rotas em aplicações web. Dentre os principais benefícios e características do destaco:

- Fácil de configurar e usar: Vue-Router é conhecido por sua facilidade de configuração e uso.

- Roteamento Dinâmico: permite definir rotas para diferentes componentes.

- Navegação declarativa e Programática: Você pode navegar entre páginas usando links (navegação declarativa) ou via código (navegação programática), oferecendo flexibilidade na forma como você gerencia a navegação em sua aplicação.

- Roteamento aninhado: suporte rotas aninhadas, o que significa que você pode ter sub-rotas dentro de suas rotas. Isso é especialmente útil para aplicações grandes e complexas, onde você precisa organizar seus componentes em uma hierarquia de layouts.

- Modo de histórico: permite URLs limpas e amigáveis, sem o uso do hash (#). Isso melhora a experiência do usuário e é benéfico para SEO (Search Engine Optimization).

- Navigation Guards: oferece recursos avançados como guardas de rota, que permitem controlar o acesso às rotas, realizar autenticações e redirecionamentos antes que uma rota seja carregada ou quando ela está prestes a ser deixada.

- Carregamento Lazy de Componentes: é possível carregar componentes de forma preguiçosa (lazy loading), o que significa que os componentes são carregados somente quando são necessários. Isso ajuda a reduzir o tempo de carregamento inicial da sua aplicação.

- Transições Suaves entre Páginas: permite criar efeitos visuais suaves ao navegar entre as páginas, melhorando a experiência do usuário.

Vamos tratar de alguns desses tópicos aqui.

## Setup e criando rotas

A instalação do Vue Router é simples e pode ser encontrada na [documentação](https://router.vuejs.org/installation.html).

## Recebendo parâmetros na URL

Podemos passar e ler parâmetros de duas formas, acoplando roteamanto (via hook useRoute) e desacoplando (via props).

### _useRoute()_

Desse modo, instanciamos o useRouter dentro do componente e temos acesso à todos os dados da rota. Nesse caso, o objeto é obter o **ID** passado na url.

Um exemplo seria precisarmos acessar _/events/1_ e fazer algo com o **ID**.

```js
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    {{ route.params.id }}
  </div>
</template>
```

O problema é que tornamos nosso componente dependente de roteamento para funcionar. Podemos desacoplar esse comportamento passando a opção de **props** na rota.

- No nosso arquivo de rotas:

```js
{
    path: ':id',
    props: true,
    component: () => import('../views/AboutView.vue')
}
```

- Dentro do componente:

```
<script setup>
defineProps(['id'])
</script>

<template>
  <div>
    {{ id }}
  </div>
</template>
```

Note que agora recebemos o **ID** via prop, passada diretamente pelo _router_. Essa é a forma mais simples de passar informações ao componente.

A outra forma é utilizamos de algo mais completo (e complexo), chamado _props function mode_

### Utilizando _props function mode_

Podemos passar mais informaçõs para o componente. Por exemplo, podemos informar se alguma coisa deve ser exibida com base na página atual. Para isso, passamos uma função que recebe a rota como parâmetro e retorna um objeto. Dentro dele, podemos trabalha com as informações.

- No arquivo de rotas

Aqui, vamos passar a propriedade _showBanner_. No código comentado eu mostro a passagem fixa do valor _true_. No código de baixo, checamos se o valor é igual a **"10"** antes de retornar _true/false_. Note que também enviamos _...route.params_ para a rota, assim o parâmetro **ID** também é recebido.

```js
{
  path: ':id',
  props: (route) => ({
    // showBanner: true,
    showBanner: route.params.id === '10',
    ...route.params
  }),
  component: () => import('../views/AboutView.vue')
}
```

- Dentro do componente

```js
<script setup>
defineProps(['id', 'showBanner'])
</script>

<template>
  <div>
    <h1>{{ id }}</h1>
    <div v-if="showBanner">Meu banner</div>
  </div>
</template>
```

Props function mode pode ser usado em qualquer rota, não somente nas que contém parametros de URL (subrotas). Dessa forma, podemos colocar mais flexibilidade em nossos componentes. [Leia mais na documentação oficial](https://router.vuejs.org/guide/essentials/passing-props#Function-mode).

## Algumas dicas adicionais sobre o Vue Router

- É uma boa prática guardar as props que recebemos dentro de _computed properties_. Dessa forma, garantimos a reatividade do dado.

```js
const props = defineProps(["page"])

const page = computed(() => props.page)
```

- Funções que dependendem de props podem ser envolvidads em um watchEffect (combinado com o uso de _computed properties_ do exemplo acima).

  - Nesse exemplo abaixo, garantimos assim que a cada nova página acessada, a função _getData()_ seja chamada passando o novo valor de **page**.

```js
onMounted(() => {
  watchEffect(() => {
    getData(page)
      .then((response) => {
        data.value = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  })
})
```

- _RouterViews_ podem passar props para rotas internas
  - Pense no seguinte caso: buscamos um post na api e queremos renderizar uma série de ações (subrotas). Podemos passar a _prop_ _post_, assim nossas subrotas tem acesso ao _post_ e não é preciso fazer mais uma chamada de API.

```js
<RouterView v-bind:post="post" />
```

<!-- ### Redirect e alias

### Redirect

- Router Link chama router.push por baixo dos panos
- podemos fazer um router.replace para o link nao ficar no historico ( desabilita o botao de voltar )

### Error handling e 404

- Resource notfound e network error -->
