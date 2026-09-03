<script setup lang="ts">
export interface Props {
  name: string
  url: string
  icon: string
}

const props = defineProps<Props>()
const isExternal = props.url.startsWith('http')
</script>

<template>
  <a
    :href="url"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="inline-flex min-h-[2.8rem] items-center gap-[0.55rem] border border-[var(--social-border)] px-[0.8rem] py-[0.65rem] text-[0.76rem] text-[var(--social-color)] font-600 no-underline transition duration-180 hover:translate-y-[-2px] hover:bg-[var(--social-hover-background)] hover:text-[var(--social-hover-color)]"
  >
    <span :class="icon" class="h-4 w-4" aria-hidden="true" />
    <span>{{ name }}</span>
  </a>
</template>
