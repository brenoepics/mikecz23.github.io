import { defineConfig } from "vitepress"
import FastGlob from "fast-glob";
import grayMatter from "gray-matter";
import { readFile } from "node:fs/promises";
import { basename } from "node:path";
import { URL, fileURLToPath } from 'node:url';

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
    lastUpdated: true,
  
    appearance: 'dark',

    vite: {
      resolve: {
        alias: [
          {
          find: /^.*VPSwitchAppearance\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/CustomSwitchAppearance.vue', import.meta.url),
          ),
        },
        ],
      },
    },
    
    sitemap: {
    hostname: 'https://mikecz23.github.io/',
    lastmodDateOnly: false,
 /*   transformItems: (items) => {
      // add new items or modify/filter existing items
    items.push({
      url: '/readme/',
      changefreq: 'monthly',
      priority: 0.8
    })
    return items
    } */
  },
  
  title: "MikeCZ - Češtiny",
  cleanUrls: true,
  description: "Stránka fanouškovského překladu hry.",
  cacheDir: './.vitepress/cache',
  outDir: '',
  srcDir: '',
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/favicon1.ico" }],
    // ['meta', { name: 'description', content: 'Stránka fansouškovského překladu hry' }],
    ['meta', { property: 'og:url', content: 'https://github.com/MikeCZ23' }],
    ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:title', content: 'MikeCZ - Češtiny' }],
    // ['meta', { property: 'og:description', content: 'Stránka fanouškovského překladu hry.' }],
    ['meta', { property: 'og:image', content: 'https://mikecz23.github.io/icon.png' }],  // Obrázek v odkazu
    ['meta', { property:'theme-color', name: 'theme-color', content: '#ff6767' }], // barva odkazu
    ['meta', { property:'twitter:card', name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'google-site-verification', content: 'DmFx_aqenbpJTLNw4Pl_iK2Au3N_lEnhdDz0xreDVwA' }],
  ],
  themeConfig: {
    docFooter: {
      prev: 'Předchozí stránka',
      next: 'Následující stránka'
    },

     editLink: {
      pattern: 'https://github.com/mikecz23/mikecz23.github.io/edit/main/:path',
      text: 'Edit this page'
    },

    logo: {
      src: 'icon.png'
    },

   // lastUpdated: {
   //   text: 'Updated at',
   //   formatOptions: {
   //     dateStyle: 'short'
       // timeStyle: 'none'
  //    }
  //  },
    
 //   footer: {
 //   message: '<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>',
 //  copyright: 'Copyright © 2024-present'
 //   },
    
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

    footer: { /* <span class="divider">|</span> */
      message: '<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"><img src="https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg" alt="License: CC BY-NC-ND 4.0" style="display: inline-block"></a> <span class="divider">|</span> Powered by <a target="_blank" href="https://vitepress.dev/">VitePress',
      copyright: `Copyright © ${new Date().getFullYear()} <a href="">MikeCZ</a>`,
    },

    outline: {
      label: "Obsah"
    },

    sidebar: {
      "/novinky/": posts
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/MikeCZ23/mikecz23.github.io" },
      { icon: "discord", link: "https://discord.gg/hKcEnX9FrK" },
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m15 21l-6-2.1l-4.65 1.8q-.5.2-.925-.112T3 19.75v-14q0-.325.188-.575T3.7 4.8L9 3l6 2.1l4.65-1.8q.5-.2.925.113T21 4.25v14q0 .325-.187.575t-.513.375zm-1-2.45V6.85l-4-1.4v11.7zm2 0l3-1V5.7l-3 1.15zM5 18.3l3-1.15V5.45l-3 1zM16 6.85v11.7zm-8-1.4v11.7z"/></svg>',},link: "https://mikecz23.github.io/witcher3map/",  ariaLabel: "Mapa"},
    ]
  }
});
