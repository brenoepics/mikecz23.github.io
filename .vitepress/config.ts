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
 // lastUpdated: true,
  
  title: "MikeCZ - Češtiny",
  description: "Stránka fanouškovského překladu hry.",
  base: "/test/",
  head: [
    ["link", { rel: "icon", href: "/test/favicon.ico" }],
    ['meta', { name: 'description', content: 'Stránka fansouškovského překladu hry' }],
    ['meta', { property: 'og:url', content: 'https://github.com/MikeCZ23/test' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'MikeCZ - Češtiny' }],
    ['meta', { property: 'og:description', content: 'Stránka fanouškovského překladu hry.' }],
    // ['meta', { property: 'og:image', content: 'https://brenoepics.github.io/vitepress-carbon/site-card.jpg' }],  // Obrázek v odkazu
    ['meta', { property:'theme-color', name: 'theme-color', content: '#41ad4f' }], // barva odkazu
    ['meta', { property:'twitter:card', name: 'twitter:card', content: 'summary_large_image' }],
  ],
  themeConfig: {
    docFooter: {
      prev: 'Předchozí stránka',
      next: 'Následující stránka'
    },

  logo: {
      src: './public/.jpg'
    },

   // lastUpdated: {
   //   text: 'Updated at',
   //   formatOptions: {
   //     dateStyle: 'short'
       // timeStyle: 'none'
  //    }
  //  },
    
  //  footer: {
  //  message: '<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>',
  //  copyright: 'Copyright © 2024-present'
  //  },
    
    darkModeSwitchLabel: "Vzhled",
    lightModeSwitchTitle: "Přepnout do světlého režimu",
    darkModeSwitchTitle: "Přepnout do tmavého režimu",

    nav: [
      { text: "🏠 Úvod", link: "/" },
      { text: "📰 Novinky", link: "/novinky/", activeMatch: "/novinky/"},
      // dropdown
      { text: '🇨🇿 Češtiny', items: [
        { text: 'MikeCZ', items: [
          { text: "Hollow Knight", link: "/readme/hollow", activeMatch: "/hollow/"},
          { text: "Plague Inc", link: "/readme/plague", activeMatch: "/plague/" },
          { text: 'Voices of the Void', link: '/readme/VotV', activeMatch: "/VotV/"},
          { text: 'Progressbar95', link: '/readme/progressbar95', activeMatch: "/progressbar95/"}]},
        { text: 'Pertim', items: [
          { text: "Summer of 58", link: "/readme/summer", activeMatch: "/summer/"},
          { text: "Silver Chains", link: "/readme/silcha", activeMatch: "/silcha/" },
          { text: 'Im counting to 6', link: '/readme/count6', activeMatch: "/count6/"},
          { text: 'Alone in the Dark Prologue', link: '/readme/alodar', activeMatch: "/alodar/"}]}
        ]},
    ],

    outline: {
      label: "Obsah"
    },

    sidebar: {
      "/novinky/": posts
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/MikeCZ23/test" },
      { icon: "discord", link: "https://www.youtube.com/watch?v=ebYN0chFJp8" }
    ]
  }
});
