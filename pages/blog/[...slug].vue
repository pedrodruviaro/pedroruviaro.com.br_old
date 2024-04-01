<template>
  <UiContainer as="main">
    <div class="mt-8">
      <NuxtLink to="/blog" class="flex items-center font-semibold mb-10">
        <NuxtImg
          src="/images/blog-go-back-icon.svg"
          alt="Botão voltar"
          aria-hidden="true"
        />
        <span class="font-semibold text-base">Blog</span>
      </NuxtLink>

      <div
        class="prose-sm md:prose md:max-w-[100%] mx-auto prose-code:block prose-code:max-w-full prose-code:overflow-auto prose-a:no-underline"
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
    </div>
  </UiContainer>
</template>
