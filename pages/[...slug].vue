<template>
  <main>
    <ContentDoc>
      <template #not-found>
        <div class="w-full h-100 flex flex-col items-center justify-center">
          <h1 class="text-7xl">404</h1>
          <p class="flex items-center gap-2 text-4xl">wops, page not found <i class="i-noto:confounded-face inline-block text-5xl"/></p>
          <NuxtLink class="text-3xl transition hover:text-lime-600" to="/">Go Back</NuxtLink>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
