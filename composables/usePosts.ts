import type { PostPreview } from "~/types"

interface Args {
  limit: Ref<number> | number
}

export function usePosts({ limit }: Args) {
  const posts = ref<PostPreview[]>([])
  const loadingPosts = ref(true)
  const error = ref<Error | null>(null)

  async function fetchPosts() {
    loadingPosts.value = true
    try {
      const { data } = await useAsyncData("blog-posts", () =>
        queryContent<PostPreview>("/blog")
          .sort({ date: -1 })
          .limit(unref(limit))
          .find()
      )

      if (data && data.value) {
        posts.value = data.value!
      }
    } catch (e) {
      error.value = e as Error
    } finally {
      loadingPosts.value = false
    }
  }

  return {
    posts,
    loadingPosts,
    error,
    fetchPosts,
  }
}
