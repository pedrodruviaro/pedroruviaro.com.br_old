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
        <NuxtLink to="mailto:pedrodruviaro@gmail.com" class="underline block"
          >pedroruviaro@gmail.com</NuxtLink
        >
        <ul class="flex gap-4 items-center">
          <li>
            <NuxtLink
              to="https://github.com/pedrodruviaro"
              target="_blank"
              aria-label="Github"
            >
              <NuxtImg
                src="/images/social-icon-github.svg"
                loading="lazy"
                decoding="async"
                width="32"
                height="32"
              />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="https://www.linkedin.com/in/pedroruviaro/"
              target="_blank"
              aria-label="Linkedin"
            >
              <NuxtImg
                src="/images/social-icon-linkedin.svg"
                loading="lazy"
                decoding="async"
                width="32"
                height="32"
              />
            </NuxtLink>
          </li>

          <li>
            <NuxtLink
              to="https://codepen.io/pedrodruviaro"
              target="_blank"
              aria-label="Codepen"
            >
              <NuxtImg
                src="/images/social-icon-codepen.svg"
                loading="lazy"
                decoding="async"
                width="32"
                height="32"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div
        class="grid place-items-center absolute bottom-[-20px] right-[-20px] w-48 opacity-[0.05] md:opacity-[1] md:bottom-auto md:right-auto md:relative md:w-auto md:h-full"
      >
        <NuxtImg
          src="/images/home-contact-img.svg"
          aria-hidden="true"
          alt="Grafismo"
          loading="lazy"
          decoding="async"
          class="w-full md:h-full md:absolute md:inset-0 md:scale-110"
        />
      </div>
    </section>
  </UiContainer>
</template>
