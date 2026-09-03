<script setup lang="ts">
const isDark = useDark()
const toggleDark = useToggle(isDark)
const isMounted = shallowRef(false)
const renderedIsDark = computed(() => isMounted.value && isDark.value)

onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <div class="min-h-screen bg-[var(--color-paper)] font-sans">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader :is-dark="renderedIsDark" @toggle-theme="toggleDark()" />
    <main id="main-content">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
