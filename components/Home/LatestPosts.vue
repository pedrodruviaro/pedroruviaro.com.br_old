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

    <div class="flex flex-col gap-6 md:flex-row lg:gap-14">
      <article
        class="grid gap-7 border border-brand-700 rounded-2xl p-4 custom-shadow flex-1 md:grid-rows-[max-content_1fr]"
        v-for="i in 3"
      >
        <div class="overflow-hidden rounded-xl max-h-[170px]">
          <NuxtImg
            src="/images/CARD_MOCK.png"
            loading="lazy"
            decoding="async"
            width="300"
            height="170"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>

        <div>
          <span
            class="block max-w-max bg-brand-700 text-brand-100 rounded font-semibold text-sm px-3 py-1"
            >VueJS</span
          >
          <p class="text-xs mt-2 mb-6">Published 21 Dec 2023</p>
          <h3 class="font-bold mb-2 text-lg leading-6 lg:text-xl">
            Explorando o Two-Way Data Binding no Vue.js
          </h3>
          <p>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
      </article>
    </div>

    <UiButton @click="emits('see-more-posts')" class="mx-auto mt-12"
      >Ver mais</UiButton
    >
  </UiContainer>
</template>

<style scoped>
.custom-shadow {
  --offset: 4px;
  box-shadow: var(--offset) var(--offset) #000000;
}

@media (min-width: 1024px) {
  .custom-shadow {
    --offset: 6px;
  }
}
</style>
