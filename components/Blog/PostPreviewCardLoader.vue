<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading: boolean
    count?: number
  }>(),
  {
    count: 3,
  }
)
</script>

<template>
  <div>
    <div v-if="props.loading" class="wrapper">
      <div
        class="animate-pulse w-full h-[250px] lg:h-[490px] rounded-xl bg-gray-400"
        v-for="i in props.count"
        :key="i"
      ></div>
    </div>

    <div class="wrapper" v-else>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply flex flex-col gap-6 md:grid md:grid-cols-3 lg:gap-14;
}
</style>
