<script setup lang="ts">
import type { WorkItem } from '~/types/profile'

defineProps<{
  items: WorkItem[]
}>()
</script>

<template>
  <section id="work" class="work-section relative bg-[#101d32] text-[#eaf0f3]" aria-labelledby="work-title">
    <div class="page-section py-[clamp(6rem,10vw,9rem)]">
      <header class="grid grid-cols-1 gap-x-[clamp(2rem,8vw,7rem)] gap-y-4 md:grid-cols-[0.7fr_1.3fr]">
        <p class="m-0 font-mono text-[0.7rem] text-[#91adff] tracking-[0.09em] uppercase">Selected problem spaces</p>
        <h2 id="work-title" class="m-0 font-display text-[clamp(3.2rem,7vw,6.5rem)] text-[#f3f6f8] font-600 leading-[0.9] tracking-[-0.035em] uppercase">Work that holds up.</h2>
        <p class="m-0 mt-3 max-w-[35rem] text-[1.05rem] text-[#aeb9c8] leading-[1.7] md:col-start-2">
          A career spent making complex web products easier to build, operate, and evolve.
        </p>
      </header>

      <ol class="mt-[clamp(3.5rem,7vw,6rem)] border-t border-[#3a4658] p-0">
        <li v-for="(item, index) in items" :key="item.title" class="grid grid-cols-1 items-start gap-[0.8rem] border-b border-[#3a4658] px-0 py-[2.1rem] transition duration-180 hover:border-[var(--color-flare)] md:grid-cols-[3rem_minmax(0,1fr)_minmax(12rem,0.45fr)] md:gap-6 md:hover:px-[0.6rem]">
          <span class="pt-[0.35rem] font-mono text-[0.65rem] text-[#91adff]">0{{ index + 1 }}</span>
          <div>
            <h3 class="m-0 text-[clamp(1.35rem,2.5vw,2rem)] text-[#f3f6f8] font-600 tracking-[-0.025em]">{{ item.title }}</h3>
            <p class="mt-3 mb-0 max-w-[42rem] text-[0.95rem] text-[#aeb9c8] leading-[1.65]">{{ item.description }}</p>
          </div>
          <ul class="mt-2 mb-0 flex flex-wrap justify-start gap-[0.45rem] p-0 font-mono md:mt-0 md:justify-end" :aria-label="`${item.title} topics`">
            <li v-for="tag in item.tags" :key="tag" class="border border-[#485568] px-[0.55rem] py-[0.4rem] text-[0.6rem] text-[#c5ceda] tracking-[0.04em] uppercase">{{ tag }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.work-section::before {
  position: absolute;
  top: 0;
  left: max(1.25rem, calc((100vw - 76rem) / 2));
  width: min(7rem, 12vw);
  height: 0.4rem;
  background: var(--color-flare);
  content: '';
}
</style>
