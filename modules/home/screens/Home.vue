<script setup lang="ts">
const router = useRouter()

function handleSeeMorePosts() {
  router.push("/blog")
}
</script>

<template>
  <HomeHero />
  <HomeLatestPosts @see-more-posts="handleSeeMorePosts" />
  <HomeContact />
</template>
