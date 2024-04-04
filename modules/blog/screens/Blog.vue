<script setup lang="ts">
const { loadingPosts, posts, fetchPosts } = usePosts({ limit: 0 })

await fetchPosts()

const router = useRouter()

function handleSeeSinglePost(slug: string) {
  router.push(slug)
}
</script>

<template>
  <main class="bg-brand-300">
    <UiContainer class="spacer">
      <BlogHeroSection />

      <section>
        <BlogPostPreviewCardLoader :loading="loadingPosts" :count="3">
          <BlogPostPreviewCard
            @see-single-post="handleSeeSinglePost"
            v-for="post in posts"
            :key="post._path"
            :post="post"
          />
        </BlogPostPreviewCardLoader>
      </section>
    </UiContainer>
  </main>
</template>
