<script setup lang="ts"></script>

<template>
  <section class="spacer bg-brand-300">
    <UiContainer class="grid gap-10 lg:grid-cols-[2fr_1fr]">
      <div>
        <NuxtImg
          src="/images/home-hero-profile.png"
          width="100"
          height="100"
          alt="Pedro Ruviaro"
        />
        <h1 class="text-2xl sm:text-3xl md:text-5xl my-8 max-w-[20ch]">
          Olá, eu sou o <strong>Pedro</strong>. Desenvolvedor
          <strong>front-end</strong>
        </h1>
        <p class="max-w-[60ch]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable.
        </p>
      </div>

      <div>
        <NuxtImg
          src="/images/home-hero-frame.svg"
          alt="Grafismo"
          aria-hidden="true"
          class="mx-auto"
        />
      </div>
    </UiContainer>
  </section>
</template>
