<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout',
})
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div
    class="h-screen bg-zinc-300 w-full transition text-dark-900 duration-100 dark:(bg-dark-900 text-light-500) font-sans overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-color-zinc-500 scrollbar-thumb-color-lime-600 dark:scrollbar-track-color-dark-800 dark:scrollbar-thumb-color-lime-500 scrollbar-rounded scrollbar-w-1"
  >
    <header class="flex gap-5 p-[30px] items-center justify-end max-w-4xl mx-auto">
      <button
        class="rounded-full font-bold hover:(bg-zinc-400) leading-none py-2 px-2 transition focus:outline-none  hover:dark:(bg-zinc-500)
        " @click="toggleDark()"
      >
        <div v-if="!isDark" class="i-carbon:moon h-10 w-10" />
        <div v-else class="i-carbon:sun h-10 w-10" />
      </button>
    </header>

    <div class="max-w-4xl mx-auto p-10">
      <slot />
    </div>
    <footer class="max-w-4xl mx-auto mt-10 text-center text-xs mb-4 prose prose-zinc dark:prose-invert">
      This website is built with VueJS, using <a href="https://github.com/RazorSiM/vue-starter">my personal starter</a>
    </footer>
  </div>
</template>
