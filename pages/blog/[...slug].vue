<script setup lang="ts"></script>

<template>
  <UiContainer class="spacer">
    <div
      class="prose-sm md:prose md:max-w-[100%] mx-auto prose-code:block prose-code:max-w-full prose-code:overflow-auto"
    >
      <ContentDoc :path="$route.path">
        <template v-slot="{ doc }">
          <ContentRenderer :value="doc" />
        </template>

        <template #not-found>
          <div>
            <h2>Você se perdeu, essa página não existe... :(</h2>
            <NuxtLink to="/">Voltar</NuxtLink>
          </div>
        </template>
      </ContentDoc>
    </div>
  </UiContainer>
</template>
