<script setup lang="ts">
import type { PostPreview } from "~/types"

const emits = defineEmits<{
  (e: "see-single-post", slug: string): void
}>()

const props = defineProps<{
  post: PostPreview
}>()

const imagePath = computed(() => {
  const basePath = "/images/"
  return `${basePath + props.post.image}`
})
</script>

<template>
  <article
    class="cursor-pointer grid gap-7 border border-brand-700 rounded-2xl p-4 custom-shadow flex-1 md:grid-rows-[max-content_1fr] focus:outline-2"
    @click="emits('see-single-post', post._path)"
    @keydown.enter="emits('see-single-post', post._path)"
    tabindex="0"
  >
    <div class="overflow-hidden rounded-xl max-h-[170px]">
      <NuxtImg
        :src="imagePath"
        loading="lazy"
        decoding="async"
        width="300"
        height="170"
        alt=""
        class="w-full h-full object-cover grayscale"
      />
    </div>

    <div>
      <span
        class="block max-w-max bg-brand-700 text-brand-100 rounded font-semibold text-sm px-3 py-1"
        >{{ post.tag }}</span
      >
      <p class="text-xs mt-2 mb-6">{{ post.date }}</p>
      <h3 class="font-bold mb-2 text-lg leading-6 lg:text-xl">
        {{ post.title }}
      </h3>
      <p class="text-sm">
        {{ post.description }}
      </p>
    </div>
  </article>
</template>

<style scoped>
.custom-shadow {
  --offset: 4px;
  box-shadow: var(--offset) var(--offset) #000000;
  transition: box-shadow 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

@media (min-width: 1024px) {
  .custom-shadow {
    --offset: 6px;
  }
}

.custom-shadow:hover,
.custom-shadow:focus {
  --offset: 10px;
}
</style>
