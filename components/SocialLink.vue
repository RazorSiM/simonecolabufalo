<script lang="ts" setup>
export interface Props {
  name: string
  url: string
  icon: string
}
defineProps<Props>()
</script>

<template>
  <a :href="url" target="_blank" class="text-zinc-700 dark:text-zinc-400 hover:text-lime-600 hover:dark:text-lime-500">
    <div
      :title="name"
      :class="icon"
      class="h-8 w-8 transition  "
    />
  </a>
</template>
