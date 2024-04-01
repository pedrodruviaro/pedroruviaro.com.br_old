<script setup lang="ts">
const props = defineProps<{
  text: string
  link: string
}>()
</script>

<template>
  <div class="bg-brand-secondary">
    <UiContainer
      class="flex flex-row justify-between gap-2 items-center py-2.5"
    >
      <p class="font-semibold text-xs sm:text-sm flex-1">
        {{ props.text }}
      </p>

      <UiButton
        variant="outlined"
        size="sm"
        link
        :to="props.link"
        class="flex-1"
        >Saiba mais</UiButton
      >
    </UiContainer>
  </div>
</template>
