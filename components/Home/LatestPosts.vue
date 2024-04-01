<script setup lang="ts">
const emits = defineEmits<{
  (e: "see-more-posts"): void
}>()
</script>

<template>
  <UiContainer as="section" class="spacer">
    <h2 class="font-bold text-center text-2xl lg:text-3xl mb-7">
      O que eu ando escrevendo
    </h2>

    <p class="mx-auto text-center max-w-[60ch] mb-12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
      sollicitudin dolor in dui porta eleifend. Fusce malesuada magna eget
      rutrum porttitor.
    </p>

    <slot name="posts" />

    <UiButton @click="emits('see-more-posts')" class="mx-auto mt-12"
      >Ver mais</UiButton
    >
  </UiContainer>
</template>
