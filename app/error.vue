<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const isNotFound = computed(() => props.error.statusCode === 404)

useHead({
  title: isNotFound.value ? 'Page not found - Simone Colabufalo' : 'Something went wrong - Simone Colabufalo',
})
</script>

<template>
  <main class="min-h-screen bg-[var(--color-paper)] font-sans">
    <section class="page-section flex min-h-screen flex-col items-start justify-center py-16">
      <p class="m-0 font-mono text-[0.7rem] tracking-[0.08em] text-[var(--color-flare)] uppercase">
        Error / {{ error.statusCode }}
      </p>
      <h1
        class="font-display font-600 my-4 text-[clamp(5rem,14vw,10rem)] leading-[0.8] text-[var(--color-ink)] uppercase"
      >
        {{ isNotFound ? 'Wrong turn.' : 'System fault.' }}
      </h1>
      <p class="m-0 text-[var(--color-copy)]">
        {{ isNotFound ? 'The page you are looking for does not exist.' : 'An unexpected error occurred.' }}
      </p>
      <NuxtLink
        class="font-600 mt-8 border-b-2 border-[var(--color-signal)] text-[var(--color-ink)] no-underline"
        to="/"
      >
        Return home
      </NuxtLink>
    </section>
  </main>
</template>
