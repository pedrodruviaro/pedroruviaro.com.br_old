<script setup lang="ts"></script>

<template>
  <section class="max-w-5xl mx-auto spacer">
    <UiContainer class="custom-grid">
      <h2 class="font-bold text-3xl md:text-4xl mb-8 title">Sobre mim</h2>
      <p class="bg-brand-primary px-4 py-2 text-xl subtitle">
        web developer based in Brazil
      </p>

      <div class="grid gap-2 mt-4 text">
        <p>
          Chemistry graduated, currently focusing on my career transition to the
          tech area, especially in web development. Currently studying ReactJS
          as a way to expand my range of activities, alongside CSS (specially
          styled-components) and HTML, with some SEO involved in the midle. For
          more information or contact, check out my social links and my
          curriculum below.
        </p>

        <p>
          In early 2021, i started my way up in the programming world, always
          studying hard and practicing along the way. You can check more about
          me in my Linkedin, where i update frequently so all the people out
          there can see what i'm doing and check my progress along the way.
        </p>
      </div>

      <NuxtImg
        src="/images/about-image.png"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        width="220"
        height="330"
        alt=""
        class="hidden md:grid-area grayscale-[100%] img"
      />
    </UiContainer>
  </section>
</template>

<style scoped>
@media (min-width: 45em) {
  .custom-grid {
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 1rem;

    grid-template-areas:
      "title img"
      "subtitle img"
      "text img";
  }

  .title {
    grid-area: title;
    text-align: left;
    margin-bottom: 0;
  }

  .subtitle {
    grid-area: subtitle;
    grid-column: 1/-1;
    grid-row: 2;
    position: relative;
    left: -1em;
    width: calc(100% + 2em);
    padding-left: 1em;
    padding-right: calc(200px + 4em);
  }

  .text {
    grid-area: text;
  }

  .img {
    grid-area: img;
    position: relative;
    z-index: 2;
    box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25),
      0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);
    margin: 0;
    display: block;
  }
}

@media (min-width: 62.5rem) {
  .custom-grid {
    grid-template-columns: 1fr 220px;
  }

  .text {
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
