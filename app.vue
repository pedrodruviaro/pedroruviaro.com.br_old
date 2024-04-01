<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - pedroruviaro` : "pedroruviaro"
  },

  htmlAttrs: {
    lang: "pt-BR",
  },
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator color="#00F2B2" :height="3" />
    <NuxtPage />
  </div>
</template>
