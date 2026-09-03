<script setup lang="ts">
import type { ProfileContent } from '~/types/profile'

const { data: document } = await useAsyncData('profile', () => queryContent('/').findOne())

if (!document.value) {
  throw createError({ statusCode: 404, statusMessage: 'Profile not found' })
}

const profile = computed(() => document.value as unknown as ProfileContent)

useSeoMeta({
  title: () => profile.value.title,
  description: () => profile.value.description,
  ogTitle: () => profile.value.title,
  ogDescription: () => profile.value.description,
  ogType: 'profile',
  ogUrl: 'https://simonecolabufalo.com',
  ogImage: 'https://simonecolabufalo.com/og-image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: () => profile.value.title,
  twitterDescription: () => profile.value.description,
  twitterImage: 'https://simonecolabufalo.com/og-image.png',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://simonecolabufalo.com' }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Simone Colabufalo',
        url: 'https://simonecolabufalo.com',
        jobTitle: 'Engineering Team Lead',
        email: 'mailto:me@simonecolabufalo.com',
        sameAs: [
          'https://www.linkedin.com/in/simone-colabufalo/',
          'https://github.com/RazorSiM',
        ],
      }),
    },
  ],
})
</script>

<template>
  <div class="overflow-clip">
    <HomeHero :content="profile.hero" />
    <HomePractice :items="profile.practice" />
    <HomeWork :items="profile.work" />
    <HomeExpertise :groups="profile.skills" />
    <HomeCareer :entries="profile.career" />
    <HomeContact :content="profile.contact" />
  </div>
</template>
