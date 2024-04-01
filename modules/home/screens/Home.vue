<script setup lang="ts">
const NUM_OF_POSTS = 3

const router = useRouter()

function handleSeeMorePosts() {
  router.push("/blog")
}

function handleSeeSinglePost(slug: string) {
  router.push(slug)
}

const { loadingPosts, posts, fetchPosts } = usePosts({ limit: NUM_OF_POSTS })
await fetchPosts()
</script>

<template>
  <HomeHero />
  <HomeLatestPosts @see-more-posts="handleSeeMorePosts">
    <template #posts>
      <BlogPostPreviewCardLoader :loading="loadingPosts" :count="NUM_OF_POSTS">
        <BlogPostPreviewCard
          @see-single-post="handleSeeSinglePost"
          v-for="post in posts"
          :key="post._path"
          :post="post"
        />
      </BlogPostPreviewCardLoader>
    </template>
  </HomeLatestPosts>
  <HomeContact />
</template>
