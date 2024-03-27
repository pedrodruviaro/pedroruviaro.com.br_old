<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    as?: string
  }>(),
  {
    as: "div",
  }
)
</script>

<template>
  <Component
    :is="props.as"
    class="w-full px-3 md:px-4 lg:px-6 max-w-[1154px] mx-auto"
  >
    <slot />
  </Component>
</template>
