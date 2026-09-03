import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import presetTypography from '@unocss/preset-typography'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
  theme: {
    breakpoints: {
      sm: '560px',
      md: '760px',
      lg: '960px',
      xl: '1200px',
    },
    colors: {
      ink: '#101d32',
      paper: '#eaf0f3',
      signal: '#265cdd',
      flare: '#f15a38',
    },
  },
  shortcuts: {
    'page-section': 'mx-auto w-[calc(100%-2.5rem)] max-w-[76rem] sm:w-[calc(100%-3rem)]',
    'section-kicker': 'm-0 font-mono text-[0.7rem] tracking-[0.09em] uppercase text-[var(--color-signal)]',
    'section-title': 'm-0 font-display text-[clamp(3.2rem,7vw,6.5rem)] font-600 leading-[0.9] tracking-[-0.035em] uppercase text-[var(--color-ink)]',
    'section-copy': 'm-0 text-[var(--color-copy)] text-[1.05rem] leading-[1.7]',
    'action-button': 'inline-flex min-h-[3.25rem] items-center justify-center gap-[0.6rem] border border-solid border-transparent px-[1.15rem] py-[0.75rem] text-[0.9rem] font-600 no-underline transition duration-180 ease-out hover:translate-y-[-2px]',
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        display: 'Barlow Condensed:500,600',
        sans: 'IBM Plex Sans:400,500,600',
        mono: 'IBM Plex Mono:400,500',
      },
    }),
    presetTypography(),
    presetScrollbar(),
  ],
  transformers: [transformerVariantGroup()],
})
