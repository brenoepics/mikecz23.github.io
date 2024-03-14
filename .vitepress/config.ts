import { defineConfig } from "vitepress"
import FastGlob from "fast-glob";
import grayMatter from "gray-matter";
import { readFile } from "node:fs/promises";
import { basename } from "node:path";

const posts: any[] = [];
for (const source of await FastGlob("novinky/*-*.md")) {
  const content = await readFile(source, "utf-8");
  const matter = grayMatter(content);
  posts.push({
    text: matter.data.title,
    link: `/novinky/${basename(source, ".md")}.html`
    link: `/hollow-knight/${basename(source, ".md")}.html`
  });
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "test – Čeština",
  description: "Stránka fanouškovského překladu.",
  base: "/test/",
  head: [
    ["link", { rel: "icon", href: "/test/favicon.ico" }],
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
      { text: "Hollow Knight", link: "/hollow-knight/", activeMatch: "/hollow-knight/" },
    ],

    outline: {
      label: "Obsah"
    },

    sidebar: {
      "/novinky/": posts,
      "/hollow-knight/": posts
    },

    socialLinks: [
      { icon: "facebook", link: "#" },
      { icon: "instagram", link: "#" },
      { icon: "github", link: "#" }
    ]
  }
});
