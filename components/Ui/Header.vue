<script setup lang="ts"></script>

<template>
  <header class="border-b-2 border-brand-700 py-4 lg:py-5">
    <UiContainer
      class="flex flex-wrap items-center justify-between gap-4 md:gap-6"
    >
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>

      <nav class="flex items-center gap-4">
        <NuxtLink class="font-semibold" to="/">Home</NuxtLink>
        <NuxtLink class="font-semibold mr-4" to="/blog">Blog</NuxtLink>
        <UiButton>Contato</UiButton>
      </nav>
    </UiContainer>
  </header>
</template>
