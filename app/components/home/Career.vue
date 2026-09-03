<script setup lang="ts">
import type { CareerEntry } from '#shared/schemas/profile'

defineProps<{
  entries: CareerEntry[]
}>()
</script>

<template>
  <section id="career" class="page-section py-[clamp(6rem,10vw,10rem)]" aria-labelledby="career-title">
    <header class="grid grid-cols-1 items-end gap-[clamp(2rem,8vw,7rem)] md:grid-cols-[1.3fr_0.7fr]">
      <div>
        <p class="section-kicker mb-6">Career history</p>
        <h2 id="career-title" class="section-title max-w-[47rem]">A decade of building for the web.</h2>
      </div>
      <p class="m-0 text-[0.92rem] leading-[1.7] text-[var(--color-copy)]">
        Roles and dates provide context for experience developed across product companies, consultancies, and
        independent work.
      </p>
    </header>

    <ol class="mt-[clamp(3.5rem,7vw,6rem)] border-t border-[var(--color-border-strong)] p-0">
      <li
        v-for="(entry, index) in entries"
        :key="entry.company"
        class="grid grid-cols-1 gap-[0.8rem] border-b border-[var(--color-border-strong)] py-[1.7rem] md:grid-cols-[3rem_0.75fr_1.25fr] md:gap-6"
      >
        <span class="font-mono text-[0.65rem] text-[var(--color-flare)] md:pt-[0.2rem]">{{
          String(index + 1).padStart(2, '0')
        }}</span>
        <h3 class="font-600 m-0 text-[1.05rem] text-[var(--color-ink)]">{{ entry.company }}</h3>
        <div class="grid gap-[0.8rem]">
          <div
            v-for="role in entry.roles"
            :key="`${role.title}-${role.dates}`"
            class="grid grid-cols-1 gap-1 text-[0.88rem] text-[var(--color-copy)] sm:grid-cols-[1fr_auto] sm:gap-4"
          >
            <span>{{ role.title }}</span>
            <time class="font-mono text-[0.7rem] text-[var(--color-muted)] sm:whitespace-nowrap">{{ role.dates }}</time>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>
