<script setup lang="ts">
import type { PracticeItem } from '~/types/profile'

defineProps<{
  items: PracticeItem[]
}>()
</script>

<template>
  <section id="practice" class="page-section py-[clamp(6rem,10vw,10rem)]" aria-labelledby="practice-title">
    <header class="grid grid-cols-1 items-end gap-x-[clamp(2rem,8vw,7rem)] gap-y-4 md:grid-cols-[0.65fr_1.35fr]">
      <p class="section-kicker self-start md:col-start-1">How I contribute</p>
      <h2 id="practice-title" class="section-title md:col-start-2">From direction to production.</h2>
      <p class="section-copy mt-4 max-w-[39rem] md:col-start-2">
        I work across the engineering lifecycle, connecting people, technical decisions, and reliable execution.
      </p>
    </header>

    <ol class="mt-[clamp(3rem,7vw,6rem)] grid grid-cols-1 border-t border-[var(--color-border-strong)] p-0 md:grid-cols-3">
      <li
        v-for="(item, index) in items"
        :key="item.name"
        class="grid min-h-0 grid-cols-[auto_1fr] gap-[1.3rem] px-0 py-8 pb-10 md:min-h-[22rem] md:pr-[clamp(1.3rem,3vw,2.5rem)]"
        :class="index > 0 ? 'border-t border-[var(--color-border-strong)] md:border-l md:border-t-0 md:pl-[clamp(1.3rem,3vw,2.5rem)]' : ''"
      >
        <span class="font-mono text-[0.7rem] text-[var(--color-flare)]">0{{ index + 1 }}</span>
        <div>
          <h3 class="mt-[-0.25rem] mb-[2.2rem] font-display text-[clamp(2.4rem,4vw,3.4rem)] text-[var(--color-ink)] font-600 leading-none uppercase">{{ item.name }}</h3>
          <p class="m-0 min-h-0 text-[1.2rem] text-[var(--color-ink)] font-600 leading-[1.35] md:min-h-[4.2rem]">{{ item.summary }}</p>
          <p class="mt-5 mb-0 text-[0.94rem] text-[var(--color-copy)] leading-[1.7]">{{ item.description }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>
