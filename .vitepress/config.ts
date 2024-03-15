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
  });
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Češtiny",
  description: "Stránka fanouškovského překladu hry.",
  base: "/test/",
  head: [
    ["link", { rel: "icon", href: "/test/favicon.ico" }],
  ],
  themeConfig: {
    docFooter: {
      prev: 'Předchozí stránka',
      next: 'Následující stránka'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 20124-present Evan You'
    },

    darkModeSwitchLabel: "Vzhled",
    lightModeSwitchTitle: "Přepnout do světlého režimu",
    darkModeSwitchTitle: "Přepnout do tmavého režimu",

    nav: [
      { text: "Úvod", link: "/" },
      { text: "Novinky", link: "/novinky/", activeMatch: "/novinky/"},
      // dropdown
      { text: 'Češtiny', items: [
      { text: "Hollow Knight", link: "/hollow/", activeMatch: "/hollow/"},
      { text: "Plague Inc", link: "/plague/", activeMatch: "/plague/" },
      { text: 'Voices of the Void', link: '/readme/VotV'},
      { text: 'Progressbar95', link: '/readme/progressbar95'}]},
    ],

    outline: {
      label: "Obsah"
    },

    sidebar: {
      "/novinky/": posts
    },

    socialLinks: [
      { icon: "github", link: "#" }
    ]
  }
});
