<script setup lang="ts"></script>

<template>
  <header class="border-b-[3px] border-brand-700 py-4 lg:py-5">
    <UiContainer
      class="flex flex-wrap items-center justify-between gap-4 md:gap-6"
    >
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>

      <nav class="flex items-center gap-4">
        <NuxtLink class="link" to="/">Home</NuxtLink>
        <NuxtLink class="link" to="/blog">Blog</NuxtLink>
      </nav>
    </UiContainer>
  </header>
</template>

<style scoped>
.link {
  @apply font-semibold border-b-2 border-transparent relative top-[2px];
}

.router-link-active {
  @apply border-brand-secondary;
}
</style>
