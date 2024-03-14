import { defineConfig } from "vitepress"
import FastGlob from "fast-glob";
import grayMatter from "gray-matter";
import { readFile } from "node:fs/promises";
import { basename } from "node:path";
import { fileURLToPath, URL } from 'url'

const posts: any[] = [];
for (const source of await FastGlob("novinky/*-*.md")) {
  const content = await readFile(source, "utf-8");
  const matter = grayMatter(content);
  posts.push({
    text: matter.data.title,
    link: `/novinky/${basename(source, ".md")}.html`
  });
}

export default {
  resolve: {
    alias: { '@': fileURLToPath(new URL('../src', import.meta.url)) }
  }
}
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hollow Knight – Čeština",
  description: "Stránka fanouškovského překladu hry Hollow Knight.",
  base: "/test/hollow-knight/",
  head: [
    ["link", { rel: "icon", href: "/hollow-knight/favicon.ico" }],
  ],
  themeConfig: {
    docFooter: {
      prev: 'Předchozí stránka',
      next: 'Následující stránka'
    },

    darkModeSwitchLabel: "Vzhled",

    nav: [
      { text: "Úvod", link: "/" },
      { text: "Novinky", link: "/novinky/", activeMatch: "/novinky/" },
    ],

    outline: {
      label: "Obsah"
    },

    sidebar: {
      "/novinky/": posts
    },

    socialLinks: [
      { icon: "facebook", link: "#" },
      { icon: "instagram", link: "#" },
      { icon: "github", link: "#" }
    ]
  }
});
