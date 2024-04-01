<script setup lang="ts">
const TOP_BANNER_INFOS = {
  text: "Saiba de uma vez por todas como fazer layouts 100% reponsíveis de forma fácil",
  link: "/blog/layout-responsivo-de-forma-facil",
}
const TOP_BANNER_PAGE_TOKEN = "visited-banner-page"

const route = useRoute()
const currentPath = computed(() => {
  return route.path
})

const showTopBanner = ref(true)

watch(
  currentPath,
  () => {
    if (!window || !window.sessionStorage) return
    const visited = sessionStorage.getItem(TOP_BANNER_PAGE_TOKEN)

    if (visited) {
      showTopBanner.value = false
      return
    }

    if (currentPath.value === TOP_BANNER_INFOS.link) {
      showTopBanner.value = false
      sessionStorage.setItem(TOP_BANNER_PAGE_TOKEN, "true")
      return
    }
  },
  {
    immediate: true,
  }
)
</script>

<template>
  <div>
    <TopBanner
      :text="TOP_BANNER_INFOS.text"
      :link="TOP_BANNER_INFOS.link"
      v-show="showTopBanner"
    />
    <UiHeader />
    <slot />
    <UiFooter />
  </div>
</template>
