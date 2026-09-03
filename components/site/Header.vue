<script setup lang="ts">
defineProps<{
  isDark: boolean
}>()

defineEmits<{
  toggleTheme: []
}>()

const navigation = [
  { label: 'Practice', href: '#practice' },
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Career', href: '#career' },
]
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-[var(--color-border)] bg-[var(--header-background)] backdrop-blur-[16px]">
    <div class="page-section grid min-h-[4.75rem] grid-cols-[1fr_auto] items-center gap-8 md:min-h-[5.5rem] md:grid-cols-[auto_1fr_auto]">
      <a class="inline-flex items-center gap-3 text-[0.84rem] text-[var(--color-ink)] font-600 no-underline" href="#top" aria-label="Simone Colabufalo, back to top">
        <span class="grid h-[2.35rem] w-[2.35rem] place-items-center bg-[var(--color-ink)] font-display text-[1.25rem] text-[var(--color-paper)] font-600 tracking-[-0.04em]" aria-hidden="true">SC</span>
        <span class="hidden sm:inline">Simone Colabufalo</span>
      </a>

      <nav class="navigation hidden justify-center gap-[clamp(1rem,2.5vw,2rem)] md:flex" aria-label="Main navigation">
        <a v-for="item in navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <div class="flex items-center gap-[0.8rem]">
        <a class="hidden border-b border-[var(--color-border-strong)] px-0 py-[0.45rem] text-[0.76rem] text-[var(--color-ink)] font-600 no-underline sm:block" href="#contact">Contact</a>
        <button
          class="grid h-[2.65rem] w-[2.65rem] cursor-pointer place-items-center border border-[var(--color-border-strong)] bg-transparent text-[var(--color-ink)] transition duration-180 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
          type="button"
          :aria-label="isDark ? 'Use light theme' : 'Use dark theme'"
          :aria-pressed="isDark"
          @click="$emit('toggleTheme')"
        >
          <span :class="isDark ? 'i-carbon-sun' : 'i-carbon-moon'" class="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navigation a {
  position: relative;
  color: var(--color-muted);
  font-size: 0.76rem;
  font-weight: 600;
  text-decoration: none;
}

.navigation a::after {
  position: absolute;
  right: 0;
  bottom: -0.45rem;
  left: 0;
  height: 2px;
  background: var(--color-flare);
  content: '';
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 180ms ease;
}

.navigation a:hover {
  color: var(--color-ink);
}

.navigation a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
