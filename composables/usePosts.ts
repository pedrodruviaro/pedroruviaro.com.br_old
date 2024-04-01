import type { PostPreview } from "~/types"

export async function usePosts({ limit }: { limit: number }) {
  const { data: posts, pending: loadingPosts } = await useAsyncData(
    "blog-posts",
    async () =>
      await queryContent<PostPreview>("/blog")
        .sort({ date: -1 })
        .limit(limit)
        .find()
  )

  return {
    posts,
    loadingPosts,
  }
}
