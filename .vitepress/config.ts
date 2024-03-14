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

    darkModeSwitchLabel: "Vzhled",

    nav: [
      { text: "Úvod", link: "/" },
      { text: "Novinky", link: "/novinky/", activeMatch: "/novinky/", items: [
        { text: 'Tool1', link: '/tools/tool1.md' },
        { text: 'Tool2', link: '/tools/tool2.md' },
        { text: 'Tool3', link: '/tools/tool3.md' },
      ],
    },
      { text: "Hollow Knight", link: "/hollow/", activeMatch: "/hollow/" },
      { text: "Plague Inc", link: "/plague/", activeMatch: "/plague/" },
    ],

    outline: {
      label: "Obsah"
    },

    sidebar: {
      "/novinky/": posts
    },

    socialLinks: [
      { icon: "facebook", link: "https://www.facebook.com/profile.php?id=61556872838453" },
      { icon: "instagram", link: "https://www.instagram.com/starfield.cestina/" },
      { icon: "github", link: "https://github.com/prekladyher/starfield-preklad" }
    ]
  }
});
