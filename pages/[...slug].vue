<template>
  <ContentDoc>
    <template #not-found>
      <section class="page-section flex min-h-[calc(100svh-11.5rem)] flex-col items-start justify-center">
        <p class="m-0 font-mono text-[0.7rem] text-[var(--color-flare)] tracking-[0.08em] uppercase">Error / 404</p>
        <h1 class="my-4 font-display text-[clamp(5rem,14vw,10rem)] text-[var(--color-ink)] font-600 leading-[0.8] uppercase">Wrong turn.</h1>
        <span class="text-[var(--color-copy)]">The page you are looking for does not exist.</span>
        <NuxtLink class="mt-8 border-b-2 border-[var(--color-signal)] text-[var(--color-ink)] font-600 no-underline" to="/">Return home</NuxtLink>
      </section>
    </template>
  </ContentDoc>
</template>
