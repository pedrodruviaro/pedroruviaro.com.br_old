<script setup lang="ts">
import SingleView from "~/views/blog/SingleView.vue"
</script>

<template>
  <SingleView>
    <div
      class="prose-sm md:prose md:max-w-[100%] mx-auto prose-code:block prose-code:max-w-full prose-code:overflow-auto prose-a:no-underline mt-10"
    >
      <div>
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
    </div>
  </SingleView>
</template>
