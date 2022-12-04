import ElementPlus from "unplugin-element-plus/vite";
import Components from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";

export default defineNuxtConfig({
  modules: ["@unocss/nuxt"],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
  build: {
    transpile: ["element-plus/es"],
  },
  vite: {
    plugins: [
      ElementPlus(),
      Components({
        dts: true,
        resolvers: [IconsResolver({})],
      }),
    ],
  },
  components: true,
});
