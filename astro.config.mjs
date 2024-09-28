import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://x-cortex-docs.vercel.app",
  integrations: [
    starlight({
      title: "x-cortex-docs",
      customCss: [
        "./src/tailwind.css",
        "./src/styles/katex.css",
        "./src/styles/index.css",
      ],
      social: {
        github: "https://github.com/x-cortex/x-cortex-docs",
      },
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 4,
      },
      sidebar: [
        {
          label: "overview",
          link: "overview/",
        },
        {
          label: "x-cortex",
          autogenerate: {
            directory: "/x-cortex",
          },
        },
        {
          label: "x-whatsapp",
          autogenerate: {
            directory: "/x-whatsapp",
          },
        },
        {
          label: "x-x",
          collapsed: true,
          autogenerate: {
            directory: "/x-x",
          },
        },
        {
          label: "x-telegram",
          collapsed: true,
          autogenerate: {
            directory: "/x-telegram",
          },
        },
        {
          label: "x-gmail",
          collapsed: true,
          autogenerate: {
            directory: "/x-gmail",
          },
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
