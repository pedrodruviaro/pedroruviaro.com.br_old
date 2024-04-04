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
    class="cursor-pointer grid gap-7 bg-brand-100 border border-brand-700 rounded-2xl p-4 custom-shadow flex-1 md:grid-rows-[max-content_1fr] focus:outline-2"
    @click="emits('see-single-post', props.post._path)"
    @keydown.enter="emits('see-single-post', props.post._path)"
    tabindex="0"
  >
    <div class="overflow-hidden rounded-xl max-h-[170px]">
      <NuxtImg
        :src="imagePath"
        loading="lazy"
        decoding="async"
        width="290"
        height="160"
        alt=""
        class="w-full h-full object-cover grayscale"
      />
    </div>

    <div>
      <BlogBadgeTag :content="props.post.tag" />
      <BlogBadgeDate :date="props.post.date" class="mt-2 mb-6" />
      <h3 class="font-bold mb-2 text-lg leading-6 lg:text-xl">
        {{ props.post.title }}
      </h3>
      <p class="text-sm">
        {{ props.post.description }}
      </p>
    </div>
  </article>
</template>

<style scoped>
.custom-shadow {
  --offset: 4px;
  --shadow-color: #000000;
  box-shadow: var(--offset) var(--offset) var(--shadow-color);
  transition: box-shadow 150ms ease-in-out;
}

@media (min-width: 1024px) {
  .custom-shadow {
    --offset: 6px;
  }
}

.custom-shadow:hover,
.custom-shadow:focus {
  --offset: 11px;
  outline: 2px solid var(--shadow-color);
}
</style>
