<script setup lang="ts">
import type { SkillGroup } from '#shared/schemas/profile'

defineProps<{
  groups: SkillGroup[]
}>()
</script>

<template>
  <section id="expertise" class="page-section py-[clamp(6rem,10vw,10rem)]" aria-labelledby="expertise-title">
    <div class="grid grid-cols-1 items-start gap-[clamp(2rem,8vw,7rem)] md:grid-cols-[0.65fr_1.35fr]">
      <p class="section-kicker">Technical range</p>
      <h2 id="expertise-title" class="section-title max-w-[50rem]">Deep where it matters. Broad where it helps.</h2>
    </div>

    <div
      class="mt-[clamp(3.5rem,7vw,6rem)] grid grid-cols-1 border-t border-l border-[var(--color-border-strong)] md:grid-cols-2"
    >
      <article
        v-for="(group, index) in groups"
        :key="group.name"
        class="min-h-0 border-r border-b border-[var(--color-border-strong)] p-[clamp(1.5rem,4vw,2.75rem)] md:min-h-[20rem]"
      >
        <div class="flex items-baseline gap-4 pb-5">
          <span class="font-mono text-[0.65rem] text-[var(--color-flare)]">A{{ index + 1 }}</span>
          <h3 class="font-600 m-0 text-[1.3rem] tracking-[-0.02em] text-[var(--color-ink)]">{{ group.name }}</h3>
        </div>
        <ul class="mt-6 mb-0 flex flex-wrap gap-[0.55rem] p-0">
          <li
            v-for="item in group.items"
            :key="item"
            class="border-b border-[var(--color-border-strong)] px-[0.1rem] py-[0.45rem] text-[0.9rem] text-[var(--color-copy)]"
          >
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
