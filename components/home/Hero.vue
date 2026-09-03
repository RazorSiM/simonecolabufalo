<script setup lang="ts">
import type { HeroContent } from '~/types/profile'

defineProps<{
  content: HeroContent
}>()
</script>

<template>
  <section id="top" class="page-section grid min-h-0 grid-cols-1 items-center gap-14 py-[clamp(4.5rem,9vw,8rem)] lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-[minmax(0,1.03fr)_minmax(22rem,0.97fr)] lg:gap-[clamp(3rem,8vw,7rem)]" aria-labelledby="hero-title">
    <div class="relative z-1 max-w-[48rem] lg:max-w-none">
      <p class="eyebrow m-0 mb-6 flex items-center gap-3 font-mono text-[0.75rem] text-[var(--color-muted)] font-500 tracking-[0.09em] uppercase">{{ content.eyebrow }}</p>
      <h1 id="hero-title" class="m-0 font-display text-[clamp(3.7rem,20vw,5rem)] text-[var(--color-ink)] font-600 leading-[0.76] tracking-[-0.045em] uppercase sm:text-[clamp(4.5rem,9.2vw,8.6rem)]">
        <span class="block">Engineering</span>
        <span class="block text-[var(--color-signal)]">Team Lead.</span>
      </h1>
      <p class="mt-9 mb-0 max-w-[37rem] text-[clamp(1.35rem,2.3vw,2rem)] text-[var(--color-ink)] font-500 leading-[1.2] tracking-[-0.025em]">{{ content.subtitle }}</p>
      <p class="mt-6 mb-0 max-w-[39rem] text-[clamp(1rem,1.4vw,1.15rem)] text-[var(--color-copy)] leading-[1.75]">{{ content.introduction }}</p>

      <div class="mt-9 flex flex-wrap gap-3">
        <a class="action-button w-full bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-signal)] sm:w-auto" href="mailto:me@simonecolabufalo.com">
          Start a conversation
          <span class="i-carbon-arrow-up-right" aria-hidden="true" />
        </a>
        <a class="action-button w-full border-[var(--color-border-strong)] text-[var(--color-ink)] hover:border-[var(--color-ink)] sm:w-auto" href="#career">View career</a>
      </div>
    </div>

    <div class="system-card w-full max-w-[39rem] justify-self-end lg:max-w-none" aria-label="My operating model: lead, architect, deliver">
      <div class="system-card-header font-mono">
        <span>Operating model</span>
        <span class="system-status"><i aria-hidden="true" /> Active</span>
      </div>

      <div class="system-map">
        <svg class="system-route" viewBox="0 0 520 440" aria-hidden="true">
          <path class="route-shadow" d="M108 93 C332 87 417 139 405 223 C393 311 286 344 115 350" />
          <path class="route-line" d="M108 93 C332 87 417 139 405 223 C393 311 286 344 115 350" />
        </svg>

        <div class="system-node system-node-lead">
          <span class="node-index font-mono">01</span>
          <strong class="font-display">Lead</strong>
          <small>People & direction</small>
        </div>
        <div class="system-node system-node-architect">
          <span class="node-index font-mono">02</span>
          <strong class="font-display">Architect</strong>
          <small>Systems & boundaries</small>
        </div>
        <div class="system-node system-node-deliver">
          <span class="node-index font-mono">03</span>
          <strong class="font-display">Deliver</strong>
          <small>Products & operations</small>
        </div>
      </div>

      <ul class="system-notes font-mono" aria-label="Technical profile">
        <li v-for="note in content.notes" :key="note">{{ note }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.eyebrow::before {
  width: 2.25rem;
  height: 2px;
  background: var(--color-flare);
  content: '';
}

.system-card {
  position: relative;
  min-height: 37rem;
  overflow: hidden;
  border: 1px solid var(--color-border-strong);
  background-color: var(--color-panel);
  background-image: linear-gradient(var(--color-grid) 1px, transparent 1px), linear-gradient(90deg, var(--color-grid) 1px, transparent 1px);
  background-size: 2rem 2rem;
  box-shadow: 1.2rem 1.2rem 0 var(--color-shadow);
}

.system-card::after {
  position: absolute;
  right: -4rem;
  bottom: -5rem;
  width: 12rem;
  height: 12rem;
  border: 2.5rem solid color-mix(in srgb, var(--color-flare) 14%, transparent);
  border-radius: 50%;
  content: '';
}

.system-card-header {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border-strong);
  padding: 0.9rem 1rem;
  color: var(--color-muted);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.system-status {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.system-status i {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  background: var(--color-status);
  box-shadow: 0 0 0 0.22rem color-mix(in srgb, var(--color-status) 18%, transparent);
}

.system-map {
  position: relative;
  min-height: 29rem;
}

.system-route {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.route-shadow,
.route-line {
  fill: none;
  stroke-linecap: round;
}

.route-shadow {
  stroke: var(--color-route-shadow);
  stroke-width: 12;
}

.route-line {
  stroke: var(--color-signal);
  stroke-dasharray: 9 13;
  stroke-width: 3;
  animation: route-flow 24s linear infinite;
}

.system-node {
  position: absolute;
  z-index: 1;
  display: grid;
  min-width: 10rem;
  border-left: 3px solid var(--color-flare);
  background: var(--color-panel-solid);
  padding: 0.85rem 1rem 0.9rem;
  box-shadow: 0 0 0 1px var(--color-border-strong);
}

.system-node::before {
  position: absolute;
  top: 50%;
  left: -0.58rem;
  width: 0.9rem;
  height: 0.9rem;
  border: 3px solid var(--color-panel-solid);
  border-radius: 50%;
  background: var(--color-signal);
  content: '';
  transform: translateY(-50%);
}

.system-node-lead {
  top: 2.8rem;
  left: 3.2rem;
}

.system-node-architect {
  top: 11.3rem;
  right: 1.9rem;
}

.system-node-deliver {
  bottom: 2.1rem;
  left: 3.6rem;
}

.node-index {
  color: var(--color-signal);
  font-size: 0.62rem;
}

.system-node strong {
  color: var(--color-ink);
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1;
  text-transform: uppercase;
}

.system-node small {
  margin-top: 0.3rem;
  color: var(--color-muted);
  font-size: 0.7rem;
}

.system-notes {
  position: relative;
  z-index: 1;
  display: flex;
  margin: 0;
  border-top: 1px solid var(--color-border-strong);
  padding: 0;
  list-style: none;
}

.system-notes li {
  flex: 1;
  padding: 0.85rem 0.6rem;
  color: var(--color-muted);
  font-size: 0.58rem;
  letter-spacing: 0.04em;
  text-align: center;
  text-transform: uppercase;
}

.system-notes li + li {
  border-left: 1px solid var(--color-border-strong);
}

@keyframes route-flow {
  to {
    stroke-dashoffset: -440;
  }
}

@media (max-width: 560px) {
  .system-card {
    min-height: 32rem;
    box-shadow: 0.7rem 0.7rem 0 var(--color-shadow);
  }

  .system-map {
    min-height: 24rem;
  }

  .system-node {
    min-width: 8.4rem;
    padding: 0.7rem 0.75rem;
  }

  .system-node-lead {
    top: 2.2rem;
    left: 1.8rem;
  }

  .system-node-architect {
    top: 9.2rem;
    right: 1.2rem;
  }

  .system-node-deliver {
    bottom: 1.8rem;
    left: 2rem;
  }

  .system-node strong {
    font-size: 1.6rem;
  }

  .system-notes li {
    padding-inline: 0.2rem;
    font-size: 0.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .route-line {
    animation: none;
  }
}
</style>
