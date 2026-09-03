<script setup lang="ts">
import type { ContactContent } from '~/types/profile'

defineProps<{
  content: ContactContent
}>()
</script>

<template>
  <section id="contact" class="contact-section relative overflow-hidden text-white" aria-labelledby="contact-title">
    <div class="page-section relative z-1 py-[clamp(5rem,10vw,9rem)]">
      <p class="m-0 mb-6 font-mono text-[0.7rem] text-[#ced9ff] tracking-[0.09em] uppercase">Get in touch</p>
      <h2 id="contact-title" class="m-0 max-w-[62rem] font-display text-[clamp(3.6rem,8.5vw,8rem)] text-white font-600 leading-[0.86] tracking-[-0.04em] uppercase">{{ content.title }}</h2>
      <p class="mt-8 mb-0 max-w-[41rem] text-[1.05rem] text-[#e2e8ff] leading-[1.7]">{{ content.description }}</p>
      <a class="group mt-10 inline-flex items-center gap-[0.8rem] border-b-2 border-white pb-[0.35rem] text-[clamp(1.15rem,3vw,2rem)] text-white font-600 no-underline" href="mailto:me@simonecolabufalo.com">
        me@simonecolabufalo.com
        <span class="i-carbon-arrow-up-right transition duration-180 group-hover:translate-x-[0.2rem] group-hover:translate-y-[-0.2rem]" aria-hidden="true" />
      </a>
      <SocialLinks :socials="socialList" class="mt-14" />
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  --social-border: rgb(255 255 255 / 40%);
  --social-color: #fff;
  --social-hover-background: #fff;
  --social-hover-color: #1745b4;
  background: #265cdd;
}

.contact-section::after {
  position: absolute;
  right: -9rem;
  bottom: -14rem;
  width: 34rem;
  height: 34rem;
  border: 5rem solid rgb(255 255 255 / 8%);
  border-radius: 50%;
  content: '';
}
</style>
