import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/kit/vite"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      "@components": "./src/components",
      "@hooks": "./src/hooks",
      "@utils": "./src/utils",
      "@stores": "./src/stores",
      "@styles": "./src/styles",
      "@layouts": "./src/layouts",
      "@typings": "./src/typings",
    },
  },
}

export default config
