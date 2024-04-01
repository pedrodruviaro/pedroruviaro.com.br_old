<script setup lang="ts">
import Home from "~/modules/home/screens/Home.vue"

useSeoMeta({
  title: "Home",
  description: "Olá, eu sou o Pedro. Desenvolvedor front-end.",
})
</script>

<template>
  <div>
    <NuxtLayout>
      <main>
        <Home />
      </main>
    </NuxtLayout>
  </div>
</template>
