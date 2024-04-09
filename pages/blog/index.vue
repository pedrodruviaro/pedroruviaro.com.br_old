<script setup lang="ts">
import BlogView from "~/views/blog/BlogView.vue"

useSeoMeta({
  title: "Blog",
  description: "Meu blog pessoal",
})
</script>

<template>
  <BlogView />
</template>
