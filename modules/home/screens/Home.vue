<script setup lang="ts">
import type { PostPreview } from "~/types"
const router = useRouter()

function handleSeeMorePosts() {
  router.push("/blog")
}

function handleSeeSinglePost(slug: string) {
  router.push(slug)
}

const { data: posts, pending: loadingPosts } = await useAsyncData(() =>
  queryContent<PostPreview>().sort({ date: -1 }).limit(3).find()
)
</script>

<template>
  <HomeHero />
  <HomeLatestPosts @see-more-posts="handleSeeMorePosts">
    <template #posts>
      <BlogPostPreviewCardLoader :loading="loadingPosts" :count="3">
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
