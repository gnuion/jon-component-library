import { defineConfig, toColorValue } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'

import * as colors from '@twind/preset-tailwind/colors'

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  // preflight: presetTailwind(),
  /* config */
  ignorelist: "dark",

  // using class strategy with `.dark`
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: "#fff",
          on: {
            background: "#000"
          }
        },
        dark: {
          background: toColorValue(colors.neutral[800], { opacityValue: "1" }),
          on: {
            background: toColorValue("#fff", { opacityValue: "0.8" })
          }
        }
      }
    }
  }
})
