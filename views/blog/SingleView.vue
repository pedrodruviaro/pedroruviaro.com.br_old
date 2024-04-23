<script setup lang="ts"></script>

<template>
  <UiContainer class="py-10">
    <div>
      <NuxtLink to="/blog" class="flex items-center gap-2 font-semibold mb-10">
        <NuxtImg
          src="/images/blog-go-back-icon.svg"
          alt="Botão voltar"
          aria-hidden="true"
        />
        <span class="font-semibold text-base">Voltar</span>
      </NuxtLink>
    </div>

    <slot />
  </UiContainer>
</template>
