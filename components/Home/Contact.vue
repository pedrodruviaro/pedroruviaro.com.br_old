<script setup lang="ts"></script>

<template>
  <UiContainer class="spacer">
    <section
      class="p-4 bg-brand-700 text-brand-100 rounded-xl max-w-[670px] mx-auto grid gap-6 relative pb-32 overflow-hidden md:pb-10 md:p-10 md:grid-cols-[1.75fr_1fr] md:items-center"
    >
      <div class="grid gap-4">
        <h2 class="font-bold text-2xl md:text-3xl max-w-[15ch]">
          Se interessou pelo meu trabalho?
        </h2>
        <p class="max-w-[30ch] mb-2">
          Entre em contato por email ou mande uma mensagem pelas redes sociais.
        </p>

        <SocialLinksList />
      </div>

      <div
        class="grid place-items-center absolute bottom-[-20px] right-[-20px] w-48 opacity-[0.15] md:opacity-[1] md:bottom-auto md:right-auto md:relative md:w-auto md:h-full"
      >
        <NuxtImg
          src="/images/home-contact-img.svg"
          aria-hidden="true"
          alt="Grafismo"
          loading="lazy"
          decoding="async"
          class="w-full md:h-full md:absolute md:inset-0 md:scale-110"
          width="206"
          height="232"
        />
      </div>
    </section>
  </UiContainer>
</template>
