<script setup lang="ts">
const props = defineProps<{
  date: Date | string
}>()

const postDate = usePostDate(props.date as Date)
</script>

<template>
  <p class="text-xs">{{ postDate }}</p>
</template>
