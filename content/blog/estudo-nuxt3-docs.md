---
title: Resumo básico sobre Nuxt 3
description: Alguns pontos chave que achei importante ressaltar sobre o Nuxt 3. Métodos, API e Guideline. Um resumo sobre a documentação seguindo a mesma ordem lógica dos tópicos.
date: 2024-02-26:01:0:00
tag: "Nuxt3"
image: "/images/CARD_MOCK.png"
---

# Nuxt Docs

## Introdução

- Por padrão -> SSR
- Desenvolvimento front e backend
- _nuxt generate_ faz o build estático da aplicação **-> troca do comando de build na netlify, por exemplo**

### Conceitos chave

- Auto imports

  - folder que não estão mapeados no auto import podem ser adicionados no _nuxt.config_
  - tudo que é auto importado pode ser definido de forma explícita caso necessário acessando #imports

  ```js
  import { ref, computed } from "#imports"
  ```

  - se um componente não é utilizado em nenhum lugar, ele não entra no bundle de produção

## Configurações

### defineNuxtConfig

- Toda configuração é feita dentro da função _defineNuxtConfig_ no arquivo _nuxt.config.ts_

  - podemos definir configurações para o ambiente de desenvolvimento e produção
    ```js
    export default defineNuxtConfig({
      $production: {},
      $development: {},
    })
    ```
  - a API _runtimeConfig_ expõe valores como variáveis de ambiente para toda a aplicação. Por padrã0, as configurações ficam disponíveis apenas no lado do servidor. Para expor no lado do cliente, precisamos definir dentro de _runtimeConfig.public_. Os valores definidos são sobrescritos cajo havam variáveis de ambiente com mesmo nome.

  ```js
  export default defineNuxtConfig({
    runtimeConfig: {
      // The private keys which are only available server-side
      apiSecret: "123",
      // Keys within public are also exposed client-side
      public: {
        apiBase: "/api",
      },
    },
  })
  ```

  - Para acessar dentro do template, basta chamar o hook _useRuntimeConfig()_

  ```js
  <script setup lang="ts">
    const runtimeConfig = useRuntimeConfig()
  </script>
  ```

### defineAppConfig

- Expôe variáveis em build time. O que é definido aqui não é reescrito com variáveis de ambiente. As configurações são definidas no arquivo _app.config.ts_

```js
export default defineAppConfig({
  title: "Hello Nuxt",
  theme: {
    dark: true,
    colors: {
      primary: "#ff0000",
    },
  },
})
```

- As variáveis podem ser acessadas através do hook _useAppConfig()_

```js
<script setup lang="ts">
  const appConfig = useAppConfig()
</script>
```

### runtimeConfig vs app.config

- **runtimeConfig** -> dados privados ou públicos que devem estar disponíveis depois do build
- **app.config** -> dados que precisma estar disponíveis apenas no build, como por exemplo: tema, cores, title etc. Ou seja, dados não sensíveis.

---

## Views

- **app.vue** -> por padrão, é o arquivo de entrada da aplicação. **Renderiza o seu conteúdo em todas as rotas.**

## Assets

Por convenção:

- **public/** -> arquivos servidos sem tratamento
- **assets/** -> arquivos que serão tratados por alguma ferramenta (nuxt, vite...)
  - arquivos dentro de _assets/_ não são servidos como url estática. Para isso, utilizar a pasta _public_
  - para utilizar um caminho de _assets_, utilizar **~/assets/img/nuxt.png**

## Styling

- Estilos dinâmicos com _v-bind_
  - como a referência é feita a partir de uma _ref_, o estilo também é dinâmico

```js
<script setup lang="ts">
const color = ref("red")
</script>

<template>
  <div class="text">hello</div>
</template>

<style>
.text {
  color: v-bind(color);
}
</style>
```

## Routing

### Middlewares

Nuxt tem o próprio "framework" de middlewares. Existem 3 tipos de middlewares:

- Anônimos (ou inline) -> definido diretamente na página em que é utilizado
- "named route middleware" -> colocado na pasta **middleware**, é carregado de forma assíncrona quando a página é criada
- "global route middleware" -> também é colocado na pasta **middleware** mas com o sufixo _.global_ e roda automaticamente em **toda** troca/acesso de rota.

Exemplo de um middleware de autenticação:

```js
// middleware/auth.ts

export default defineNuxtRouteMiddleware((to, from) => {
  if (isAuthenticated() === false) {
    return navigateTo("/login")
  }
})
```

Dentro da página, usamos o método _definePageMeta_

```js
//pages/dashboard.vue

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>
```

### Route validation

Podemos validar propriedades de uma rota. A função recebe a rota como parâmetro e retorna true ou false. Se retornar false e nenhuma outra rota seja encontrada, um erro 404 é estourado. Também podemos retornar um objeto com com _statusCode_ e _statusMessage_ para responder o erro imediatamente. A validação é feita dentro de _definePageMeta_

```html
//pages/posts/[id].vue

<script setup lang="ts">
  definePageMeta({
    validate: async (route) => {
      // Check if the id is made up of digits
      return /^\d+$/.test(route.params.id)
    },
  })
</script>
```

## SEO and Meta

- Dentro do _nuxt.config.ts_ podemos customizar o objeto _app_ adicionando propriedades dentro de _app.head_
  - **dados reativos não podem ser passados aqui**

### useHead

- utilizado para adicionar e configurar tags dentro do Head do site. Ao contrário do _useSeoMeta_, podemos setar qualquer tag além das tags de SEO

```html
// app.vue

<script setup lang="ts">
  useHead({
    title: "My App",
    meta: [{ name: "description", content: "My amazing site." }],
    bodyAttrs: {
      class: "test",
    },
    script: [{ innerHTML: "console.log('Hello world')" }],
  })
</script>
```

### useSeoMeta

- utilizado para definir as tags de **SEO** do site, como _title_, _description_ e _og_

### titleTemplate

- serve para, por exemplo, adicionar um trecho padrão no título do site. É uma propriedade configurada dentro de _useHead_

- pode ser uma string onde o trecho **%s** é substituído pelo trecho ou uma função que recebe o trecho como parâmetro.

```html
// app.vue

<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Site Title` : "Site Title"
    },
  })
</script>
```

- para adicionar o _titleChunk_, basta adicionar o texto na propriedade _title_ no _useHead_ ou _useSeoMeta_ dentro das páginas

### Body position

- podemos definir a posição de scripts externos dentro do hook _useHead_

```html
<script setup lang="ts">
  useHead({
    script: [
      {
        src: "https://third-party-script.com",
        // valid options are: 'head' | 'bodyClose' | 'bodyOpen'
        tagPosition: "bodyClose",
      },
    ],
  })
</script>
```

### Tips

- _definePageMeta_ é extraído em build time, ou seja, não pode receber valores dinâmicos. Para isso, podemos utilizar o _useHead_

### External CSS

Puxando uma fonte externa ao nosso projeto com o _useHead_. Para ficar global, é inserido dentro do _app.vue_ mas também pode ser colocado no _layouts/default.vue_ ou qualquer outro layout.

```html
<script setup lang="ts">
  useHead({
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
        crossorigin: "",
      },
    ],
  })
</script>
```

## Transitions

### Page transitions

- Nuxt utiliza o componente _<Transition>_ do Vue por baixo dos panos
- Para habilitar as transições, basta definir a propriedade _pageTransition_ dentro de _app_ na função _defineNuxtConfig_

```js
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
})
```

- Depois, é só criar o CSS global com as classes de mesmo nome (nesse caso, **page**) em qualquer aquivo que exponha o estilo (não escopado). Por padrão é colocado dentro do arquivo _app.vue_

- Para utilizar transições especificas em determinadas páginas, podemos definir dentro da função _definePageMeta_

  - Nesse exemplo, definimos a transição **rotate** apenas para essa página (entrada e saída).

```html
<script setup lang="ts">
  definePageMeta({
    pageTransition: {
      name: "rotate",
    },
  })
</script>
```

### Layout transitions

- A mesma lógica se aplica para transição de layouts.

```js
export default defineNuxtConfig({
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
  },
})
```

### Desabilitar transições

Podemos desabilitar transições em determinada página dentro da função _definePageMeta_

```js
<script setup lang="ts">
definePageMeta({
  pageTransition: false,
  layoutTransition: false
})
</script>

```

### NuxtPage

- Quando utilizamos _NuxtPage_, podemos habilitar as transiçõs direto no componente

```js
<NuxtPage
  :transition="{
    name: 'bounce',
    mode: 'out-in'
  }"
/>
```

- **Importante** -> dessa forma não conseguimos trocar ou remover a transição em páginas específicas com o _definePageMeta_

## Data Fetching

- Podemos usar dois composables (_useFetch_ e _useAyncData_) e uma biblioteca já incluída (_$fetch_) para performar requisições assíncronas

- Utilizando os composables garantimos que o dado que chega no lado do servidor (Nitro) é passado para o clinete, evitando assim que a chamada seja feita duas vezes (servidor e cliente)

- O Nuxt utliza o _Suspense_ do Vue para evitar que a navegação ocorra caso haja uma operação assíncrona rodando na outra página

- **useFetch** é um _wrapper_ de _useAsyncData_ e _$fetch_ e é a maneira mais simples de perfomar uma requisição

- **$fetch** utiliza a bilbioteca _ofetch_ e é utilizado pelo useFetch por baixo dos panos.

  - utilizar o _$fetch_ diretamente não previne chamadas duplicadas. É recomendado utilizar o _$fetch_ somente no clientSide em interações (_event based_) ou combinado com o _useAsyncData_

```html
<script setup lang="ts">
  async function addTodo() {
    const todo = await $fetch("/api/todos", {
      method: "POST",
      body: {
        // My todo data
      },
    })
  }
</script>
```

- **useAsyncData** envolve uma requisição assíncrona e retorna o resultado quando resolvida

  - _useFetch(url)_ é basicamente equivalente à _useAsyncData(url, () => $fetch(url))_.
  - é especiamente útil quando trabalhamos com funções de CMS ou provedores de terceiros

  ```js
  const { data, error } = awa``it useAsyncData("users", () =>
    myGetFunction("users")
  )
  ```

  - o primeiro argumento é uma chave para guardar a reposta em cache

  - serve também para envolver múltiplas chamadas de api e retornar os valores

  ```html
  <script setup lang="ts">
    const { data: discounts, pending } = await useAsyncData(
      "cart-discount",
      async () => {
        const [coupons, offers] = await Promise.all([
          $fetch("/cart/coupons"),
          $fetch("/cart/offers"),
        ])

        return { coupons, offers }
      }
    )
    // discounts.value.coupons
    // discounts.value.offers
  </script>
  ```

- _useLazyAsyncData_ e _useLazyFetch_ são utilizados para performar requisiçõe quando não utilizamos o _Suspense_.

- Podemos configurar os composables para rodar apenas no client side com o parâmetro _server: false_ como segundo argumento no objeto de opções

### Minimizando o payload com Pick

- Utilizando o _pick_ podemos selecionar apenas os valores que vamos utilizar no HTML para diminuir a quantidade de código.

- Importante ressaltar que a requisição não é alterada porém a quantidade de código que o servidor devolve para o cliente é menor

```html
<script setup lang="ts">
  const { data } = await useFetch("/api/mountains/everest", {
    pick: ["title", "description"],
  })
</script>
```

### Refetch

- Podemos realizar o _refetch_ dos dados obtendo a função do retorno de _useFetch_

```html
<script setup lang="ts">
  const { refresh } = await useFetch("/api/users")
</script>

<template>
  <div>
    <p>{{ data }}</p>
    <button @click="refresh">Refresh data</button>
  </div>
</template>
```

## Error Handling
