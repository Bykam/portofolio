import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import lottie from "astro-integration-lottie";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), lottie()],
});
