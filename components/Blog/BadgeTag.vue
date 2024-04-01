<script setup lang="ts">
const props = defineProps<{
  content: string
}>()
</script>

<template>
  <span
    class="block max-w-max bg-brand-700 text-brand-100 rounded font-semibold text-sm px-3 py-1"
    >{{ props.content }}</span
  >
</template>
