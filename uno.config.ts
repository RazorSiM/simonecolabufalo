import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetIcons from '@unocss/preset-icons'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import presetTypography from '@unocss/preset-typography'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
  presets: [
    presetUno(),              
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: { sans: 'Roboto', mono: 'Fira Code' },
    }),
    presetTypography(),
    presetScrollbar(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
})
