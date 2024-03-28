---
title: "Explorando as Diretivas no Vue.js"
description: "Descubra o poder das diretivas no Vue.js. Aprenda como usar diretivas padrão como v-model, v-show e v-bind, e criar diretivas customizadas para melhorar a usabilidade e aparência de suas aplicações Vue."
date: 2024-01-23:01:0:00
tag: "VueJS"
image: "/images/CARD_MOCK.png"
---

# Diretivas no Vue: padrões e customizadas

As diretivas são recursos essenciais no Vue.js, facilitando a manipulação do DOM e tornando seu código mais legível e eficiente. Neste post, exploro desde as diretivas padrão até a criação de diretivas customizadas.

## Diretivas Padrão do Vue

As diretivas padrão do Vue, como v-model, v-show, e v-bind, são a base da interatividade e reatividade nas aplicaçoes Vue. Vamos explorá-las uma a uma:

### v-model

O `v-model` é uma diretiva no Vue.js utilizada para estabelecer uma ligação bidirecional (two way data biding) entre um input ou outro elemento de formulário e uma propriedade ou variável no modelo de dados Vue. Essa diretiva simplifica a manipulação de dados em formulários, permitindo que as alterações no input sejam refletidas automaticamente no modelo e vice-versa. Ela também pode ser utilizada em outros elementos, como em uma modal ou dialog, por exemplo, para controlar o fluxo de abertura/fechamento.

```js
<input v-model="message" placeholder="Digite algo">
<p>A mensagem é: {{ message }}</p>
```

### v-show

A diretiva `v-show` é utilizada para controlar a visibilidade de elementos no DOM com base em uma expressão booleana. Esta diretiva é especialmente útil quando você deseja alternar a exibição de um elemento sem removê-lo do DOM, ou seja, alterando apenas o CSS, diferentemente da diretiva `v-if`.

```js
<p v-show="isVisible">Este parágrafo é condicionalmente renderizado.</p>
```

### v-bind

A diretiva `v-bind` é utilizada para associar dinamicamente valores a atributos de elementos HTML. Ela permite a criação de ligações entre propriedades no modelo de dados e atributos HTML, possibilitando a atualização automática desses atributos conforme o estado da aplicação muda.

```js
<a v-bind:href="url">Visite nosso site</a>
```

## Criando Diretivas Customizadas

O Vue oferece a flexibilidade de criar suas próprias diretivas. Vamos aprender como isso pode ser feito criando uma diretiva global.

```js
app.directive("auto-focus", {
  mounted: (el: HTMLElement) => el.focus(),
})
```

Neste exemplo, a diretiva auto-focus é utilizada para focar automaticamente um elemento quando ele é inserido montado em tela.

### Uso Global vs Local

Diretivas podem ser registradas globalmente (geralmente no main.ts) para uso em toda a aplicação, ou localmente dentro de componentes específicos. A aplicação é a mesma, o que muda é o escopo em que ela pode ser aplicada. Para criar dentro de um componente, podemos seguir o padrão:

```js
const vAutoFocus = {
  mounted: (el: HTMLElement) => el.focus(),
}
```

### Diretivas Customizadas em Bibliotecas

Exemplos práticos de diretivas customizadas podem ser encontrados em bibliotecas como AutoAnimate.

Um caso de uso seria:

```js
<div v-auto-animate>
  <!-- conteúdo animado aqui -->
</div>
```

A diretiva v-auto-animate da biblioteca AutoAnimate pode ser usada para adicionar animações a componentes Vue, tendo múltiplas opçõs de customização.

Dominar as diretivas no Vue não só melhora a qualidade do seu código, mas também abre um leque de possibilidades para interações mais ricas e experiências de usuário mais envolventes. Espero que este guia tenha esclarecido o poder das diretivas no Vue e inspirado você a explorar mais!
