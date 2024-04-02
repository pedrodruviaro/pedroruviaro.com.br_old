<script setup lang="ts">
import Single from "~/modules/blog/screens/Single.vue"
</script>

<template>
  <Single>
    <div
      class="prose md:max-w-[100%] mx-auto prose-code:block prose-code:max-w-full prose-code:overflow-auto prose-a:no-underline"
    >
      <ContentDoc :path="$route.path">
        <template v-slot="{ doc }">
          <div class="flex items-center justify-between mb-4">
            <BlogBadgeTag :content="doc.tag" />
            <BlogBadgeDate :date="doc.date" />
          </div>

          <ContentRenderer :value="doc" />
        </template>

        <template #not-found>
          <BlogDocumentNotFound />
        </template>
      </ContentDoc>
    </div>
  </Single>
</template>
