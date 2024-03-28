import type { ParsedContent } from "@nuxt/content/dist/runtime/types"

export interface PostPreview extends ParsedContent {
  image: string
  tag: string
  date: Date
  _path: string
}
