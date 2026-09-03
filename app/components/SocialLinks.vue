<script setup lang="ts">
export interface Link {
  name: string
  url: string
  icon: string
}

export interface Props {
  socials: Link[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-wrap items-center gap-[0.65rem]">
    <SocialLink v-for="link in socials" :key="link.name" :name="link.name" :url="link.url" :icon="link.icon" />
  </div>
</template>
