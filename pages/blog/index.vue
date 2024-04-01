<script setup lang="ts">
import Blog from "~/modules/blog/screens/Blog.vue"

useSeoMeta({
  title: "Blog",
  description: "Meu blog pessoal",
})

definePageMeta({
  layout: "blog",
})
</script>

<template>
  <div>
    <NuxtLayout>
      <Blog />
    </NuxtLayout>
  </div>
</template>
