<script lang="ts" setup>
import dayjs from 'dayjs'
import socialList from '@/helpers/socialList'
const today = dayjs(new Date())
const start = dayjs('2014-01-01')

const diff = computed(() => {
  return (today.diff(start, 'year', true)).toFixed(2)
})
</script>

<template>
  <article>
    <h1 class="text-5xl font-bold">
      Simone Colabufalo
    </h1>
    <p class="text-3xl text-zinc-500 dark:text-dark-50">
      Web Designer & Developer
    </p>
    <SocialLinks :socials="socialList" class="mt-5" />
    <div class="prose text-xl prose-zinc dark:prose-invert">
      <h2>
        Who Am I
      </h2>
      <p>I'm a freelancer web designer & developer based in Italy. I've been active in the space for <strong>{{ diff }} years</strong>.</p>
      <h3>
        What can I do for you
      </h3>
      <p>I'm specialized in engineering and developing custom solutions with web technologies.</p>
      <h3>What I'm best at</h3>
      <p>I use to work best alone or in small to medium teams. I enjoy working on the <strong>frontend</strong> part of the stack but I do work on the <strong>backend</strong> too. The technologies I'm most familiar with are:</p>
      <ul>
        <li>Javascript and Typescript;</li>
        <li>VueJS 2 and 3;</li>
        <li>NuxtJS 2 and 3;</li>
        <li>CSS, SASS, PostCSS;</li>
        <li>CSS libs like Tailwind, WindiCSS, UnoCSS, Bootstrap and so on;</li>
        <li>NodeJS;</li>
        <li>AdonisJS;</li>
        <li>Strapi;</li>
        <li>PHP;</li>
        <li>Laravel;</li>
      </ul>
      <p>Since <strong>2021</strong> I'm specializing in EVM smart contracts integrations - I've been using <strong>Ethers</strong>,<strong>Typechain</strong>, and <strong>The Graph</strong> daily to craft decentralized applications.</p>
      <p />
      <h3>Latest working experiences</h3>
      <p>Beside my freelance works, I've done consultancy for some companies too:</p>
      <h4>Ntropika Labs - Lead Software Developer [2021 - now]</h4>
      <p>
        Worked on delivering technical solutions for different projects
        built on the Ethereum ecosystem. Libs and frameworks used
        includes: EthersJS, VueJS, The Graph, Sharp, Typescript
      </p>
      <hr>
      <h4>Dedagroup Business Solutions - Web Developer [2020 - 2021]</h4>
      <p>
        Bootstrapped and developed a custom internal application in
        VueJS, Vuex e Vuetify
      </p>
      <hr>
      <h4>Nexteam - Web Developer [2017]</h4>
      <p>Custom themes on Drupal</p>
      <hr>
      <h4>Sintesi Additiva - Web Developer & Designer [2015 - 2016]</h4>
      <p>UI/Web developer mostly on PHP,JS and Python</p>
      <h3>Where you can find me</h3>
      <p>Here's where you can find me online. If you like e-mails, you can contact me at <a href="mailto:me@simonecolabufalo.com">me@simonecolabufalo.com</a></p>
      <ul>
        <li v-for="link in socialList" :key="link.name">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </article>
</template>
