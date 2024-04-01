<script setup lang="ts">
type Variants = "outlined" | "filled"
type Sizes = "sm" | "base" | "lg"

const props = withDefaults(
  defineProps<{
    variant?: Variants
    link?: boolean
    size?: Sizes
  }>(),
  {
    link: false,
    variant: "filled",
    size: "base",
  }
)

const baseClasses = "font-bold  rounded-md flex max-w-max"

const variantClasses: Record<Variants, string> = {
  filled: "text-brand-100 bg-brand-700",
  outlined: "bg-transparent border border-brand-700 font-semibold",
}

const sizeClasses: Record<Sizes, string> = {
  sm: "text-sm px-3 py-1",
  base: "text-base px-6 py-2",
  lg: "",
}
</script>

<template>
  <button
    :class="[
      variantClasses[props.variant],
      sizeClasses[props.size],
      baseClasses,
    ]"
    v-if="!props.link"
  >
    <slot />
  </button>

  <NuxtLink
    v-else
    :class="[
      variantClasses[props.variant],
      sizeClasses[props.size],
      baseClasses,
    ]"
  >
    <slot />
  </NuxtLink>
</template>
