<script setup lang="ts"></script>

<template>
  <footer class="bg-brand-700 text-brand-100 pt-2">
    <NuxtMarquee :auto-fill="true">
      <span class="block mx-1 text-xl lg:text-2xl font-black"
        >CONTATO <span v-for="i in 3" :key="i">&#x2022;</span></span
      >
    </NuxtMarquee>

    <UiContainer
      class="mt-10 lg:mt-14 grid gap-8 md:grid-cols-2 md:items-center"
    >
      <div class="flex flex-col text-center gap-7 items-center">
        <h2 class="font-black text-3xl">Conecte-se comigo</h2>
        <SocialLinksList />
      </div>

      <div class="mx-auto">
        <NuxtImg
          src="/images/blog-footer-img.svg"
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width="278"
          height="168"
          alt="grafismo"
        />
      </div>
    </UiContainer>

    <UiContainer class="py-10 lg:py-16">
      <p class="text-center">&copy; Copyright 2024 - pedroruviaro.com.br</p>
    </UiContainer>
  </footer>
</template>
