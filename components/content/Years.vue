<script lang="ts" setup>
const initialDate = "2014-01-01"

const diffDateInYears = (current: Date, initial: string) => {
  const date1 = new Date(initial)
  const date2 = current
  const diffTime = Math.abs(date2 - date1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const diffYears = diffDays / 365.25
  return diffYears.toFixed(2)
}
</script>
<template>
  <ClientOnly>
    <strong>{{ diffDateInYears(new Date(), initialDate) }}</strong> 
  </ClientOnly>
</template>
