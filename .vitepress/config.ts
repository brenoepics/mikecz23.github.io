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
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-TWEJW6NL8T' }],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-TWEJW6NL8T');`],
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
      src: 'or_icon.png'
    },

   // lastUpdated: {
   //   text: 'Updated at',
   //   formatOptions: {
   //     dateStyle: 'short'
       // timeStyle: 'none'
  //    }
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

    footer: { /* <span class="divider">|</span> */
      message: 'Licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/"><img src="https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png" alt="License: CC BY-NC-ND 4.0" style="display: inline-block;height:15px!important;vertical-align:text-bottom;"><img style="height:15px!important;margin-left:0px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt=""><img style="height:15px!important;margin-left:-3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt=""><img style="height:15px!important;margin-left:-3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1" alt=""><img style="height:15px!important;margin-left:-3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1" alt=""></a> <span class="divider">|</span> Powered by <a target="_blank" href="https://vitepress.dev/">VitePress <img src="https://vitepress.dev/vitepress-logo-large.webp" alt="Vite Logo" height="13px" width="13px" style="display: inline-block"></a>',
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
      { icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<linearGradient id="sQWglRuEWWD3tD7RI56sQa_MGNtlXsq2xHJ_gr1" x1="31.932" x2="31.932" y1="4.286" y2="46.901" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQa_MGNtlXsq2xHJ_gr1)" d="M50.13,20.42c0.51-1.84,1.18-5.92,1.74-8.76c-0.91-0.92-1.44-1.83-1.44-1.83H49.2l-0.93,2.6 l-3.53,2.87c-3.47-2.86-7.91-4.56-12.74-4.56s-9.27,1.7-12.74,4.56l-5.5-4.31l0.66-1.68h-1.23c0,0-0.54,0.92-1.45,1.83 c0.57,2.84,2.51,7.81,3.02,9.65c-2.19,3.22-2.88,5.88-2.88,10.07c0,6.99,3.59,13.17,9.02,16.77l8.9-8.35l3.92,0.57l8.84,8.12 c5.73-3.54,9.56-9.89,9.56-17.11C52.12,26.67,52.32,23.64,50.13,20.42z M24.73,26.88c-1.84-0.6-2.9-2.42-2.36-4.07 c0.04-0.13,0.09-0.26,0.17-0.38l6.1,3.3C27.84,26.87,26.26,27.37,24.73,26.88z M40.6,24.03c-0.03,0.2-0.09,0.4-0.19,0.59 c-0.31,0.61-0.88,1.08-1.58,1.31c-0.59,0.19-1.21,0.17-1.73,0c-0.03-0.01-0.05-0.02-0.08-0.03l3.6-1.95 C40.62,23.98,40.61,24,40.6,24.03z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQb_MGNtlXsq2xHJ_gr2" x1="32" x2="32" y1="19.42" y2="55.94" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQb_MGNtlXsq2xHJ_gr2)" d="M30.5,51.3v0.04 c0,0.04,0.01,0.08,0.02,0.12v-0.04L30.5,51.3z M30.5,51.3v0.04c0,0.04,0.01,0.08,0.02,0.12v-0.04L30.5,51.3z M30.5,51.3v0.04 c0,0.04,0.01,0.08,0.02,0.12v-0.04L30.5,51.3z M30.5,51.3v0.04c0,0.04,0.01,0.08,0.02,0.12v-0.04L30.5,51.3z M50.31,21.71 c-0.05-0.11-0.11-0.22-0.17-0.33c-0.12-0.23-0.24-0.44-0.37-0.66c-0.25-0.44-0.53-0.88-0.84-1.3c-0.04,0.11-0.08,0.23-0.11,0.34 c-0.12,0.42-0.24,0.81-0.36,1.16c-0.06,0.19-0.12,0.38-0.18,0.55c0.29,0.47,0.55,0.96,0.8,1.46c0.11,0.22,0.22,0.45,0.32,0.67 c0.05,0.11,0.09,0.21,0.13,0.32c0.96,2.26,1.48,4.74,1.48,7.35c0,9.01-6.3,16.58-14.73,18.52l0.73-13.73l-1-0.06l-1,0.01 c-2.07,0.93-4.14,0.93-6.21,0l-1-0.01l-1,0.06l0.87,13.72c-8.41-1.96-14.68-9.52-14.68-18.51c0-2.6,0.52-5.08,1.48-7.34 c0.04-0.11,0.09-0.22,0.14-0.33c0.09-0.22,0.2-0.45,0.31-0.67c0.25-0.5,0.51-0.99,0.8-1.47c-0.06-0.17-0.12-0.35-0.18-0.54 c-0.12-0.36-0.24-0.74-0.36-1.16c-0.03-0.11-0.07-0.23-0.11-0.34c-0.31,0.42-0.59,0.86-0.84,1.3c-0.13,0.22-0.25,0.43-0.37,0.66 c-0.06,0.11-0.12,0.22-0.17,0.33c-1.52,2.85-2.36,6.1-2.36,9.56c0,9.96,7.06,18.29,16.45,20.24l0.19,2.92 c0.02,0.39,0.26,0.72,0.61,0.87c1.11,0.49,2.45,0.64,3.43,0.64s2.38-0.14,3.44-0.63c0.34-0.15,0.56-0.49,0.58-0.86l0.16-2.94 c9.41-1.94,16.48-10.27,16.48-20.24C52.67,27.81,51.83,24.56,50.31,21.71z M34.15,51.95c-0.04,0-0.09,0.01-0.12,0.01h-0.04 c-0.27-0.03-0.49-0.24-0.51-0.5c-0.05,0.21-0.24,0.38-0.48,0.38c-0.28,0-0.5-0.23-0.5-0.5c0,0.27-0.22,0.5-0.5,0.5 s-0.5-0.23-0.5-0.5c0,0.27-0.22,0.5-0.5,0.5c-0.24,0-0.43-0.17-0.48-0.38c-0.02,0.27-0.26,0.5-0.55,0.5s-0.53-0.23-0.55-0.51v-0.03 c0-0.03,0.02-0.14,0.03-0.17c0.2-0.61,0.34-1.12,0.66-2.37l0.39,2.42v-0.46c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5 c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5v0.46l0.42-2.42c0.24,0.7,0.35,1.63,0.58,2.26 c0.07,0.19,0.07,0.18,0.07,0.37C34.53,51.73,34.36,51.9,34.15,51.95z M33.5,51.34V51.3l-0.02,0.12 C33.49,51.39,33.5,51.37,33.5,51.34z M30.5,51.3v0.04c0,0.04,0.01,0.08,0.02,0.12v-0.04L30.5,51.3z M30.5,51.3v0.04 c0,0.04,0.01,0.08,0.02,0.12v-0.04L30.5,51.3z M30.5,51.3v0.04c0,0.04,0.01,0.08,0.02,0.12v-0.04L30.5,51.3z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQc_MGNtlXsq2xHJ_gr3" x1="38.734" x2="38.734" y1="-.405" y2="56.573" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQc_MGNtlXsq2xHJ_gr3)" d="M42.729,49.23 c-0.14,0.1-0.33,0.13-0.51,0.04l-7.479-4.54l0.08-0.37v-0.01l0.47-2.17c0-0.01,0.01-0.02,0-0.03l0.08-0.37L35.54,41l1.36,1.43 L42.729,49.23z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQd_MGNtlXsq2xHJ_gr4" x1="39.241" x2="39.241" y1="17.198" y2="41.225" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQd_MGNtlXsq2xHJ_gr4)" d="M42.729,49.23l-5.829-6.8L35.54,41l6,2.97 l0.16,0.51l0.33,1.03l0.889,3.16C42.989,48.9,42.889,49.11,42.729,49.23z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQe_MGNtlXsq2xHJ_gr5" x1="9.599" x2="9.599" y1="-.405" y2="56.573" gradientTransform="matrix(-1 0 0 1 33.91 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQe_MGNtlXsq2xHJ_gr5)" d="M20.318,49.23 c0.14,0.1,0.33,0.13,0.51,0.04l7.479-4.54l-0.08-0.37v-0.01l-0.47-2.17c0-0.01-0.01-0.02,0-0.03l-0.08-0.37L27.506,41l-1.36,1.43 L20.318,49.23z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQf_MGNtlXsq2xHJ_gr6" x1="10.105" x2="10.105" y1="17.198" y2="41.225" gradientTransform="matrix(-1 0 0 1 33.91 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQf_MGNtlXsq2xHJ_gr6)" d="M20.318,49.23l5.829-6.8l1.36-1.43 l-6,2.97l-0.16,0.51l-0.33,1.03l-0.889,3.16C20.058,48.9,20.158,49.11,20.318,49.23z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQg_MGNtlXsq2xHJ_gr7" x1="15.948" x2="15.948" y1="16.275" y2="42.357" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQg_MGNtlXsq2xHJ_gr7)" d="M26,32L5.92,45.38 c-0.05-0.17-0.03-0.36,0.11-0.51l8.36-9.2L15,35L26,32z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQh_MGNtlXsq2xHJ_gr8" x1="23.335" x2="23.335" y1="3.458" y2="54.776" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQh_MGNtlXsq2xHJ_gr8)" d="M30,41l-0.48,0.21h-0.01l-0.96,0.41 l-0.38,0.16l-1.53,0.65l-4.8,2.05l-0.9,0.39c-0.04,0.01-0.07,0.02-0.1,0.03l-3.59,1.53c-0.23,0.1-0.45,0.02-0.58-0.14L28,37 l0.04,0.08l1.72,3.44L30,41z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQi_MGNtlXsq2xHJ_gr9" x1="15.96" x2="15.96" y1="1.867" y2="55.459" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQi_MGNtlXsq2xHJ_gr9)" d="M26,32v4.9L19.83,43l-1.57,0.32l-1.2,0.24 L6.5,45.7c-0.01,0-0.02,0.01-0.03,0C6.21,45.74,6,45.58,5.92,45.38L26,32z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQj_MGNtlXsq2xHJ_gr10" x1="22.276" x2="22.276" y1="16.435" y2="42.252" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQj_MGNtlXsq2xHJ_gr10)" d="M28,37l-11.33,9.29 c-0.13-0.15-0.17-0.39-0.03-0.6l0.93-1.36l0.69-1.01L26,32h1.42l0.05,0.44l0.52,4.47L28,37z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQk_MGNtlXsq2xHJ_gr11" x1="47.592" x2="47.592" y1="18.498" y2="40.811" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQk_MGNtlXsq2xHJ_gr11)" d="M57.62,45.38L37.54,32l11,3l0.61,0.67 l8.36,9.2C57.65,45.02,57.67,45.21,57.62,45.38z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQl_MGNtlXsq2xHJ_gr12" x1="40.205" x2="40.205" y1="3.458" y2="54.776" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQl_MGNtlXsq2xHJ_gr12)" d="M46.87,46.29 c-0.13,0.16-0.35,0.24-0.58,0.14L42.7,44.9c-0.03-0.01-0.06-0.02-0.1-0.03l-0.9-0.39l-4.8-2.05l-1.53-0.65l-0.38-0.16l-0.96-0.41 h-0.01c-0.01-0.01-0.02-0.01-0.03-0.02L33.54,41l0.24-0.48l1.75-3.5c0.01,0,0.01-0.01,0.01-0.02L46.87,46.29z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQm_MGNtlXsq2xHJ_gr13" x1="47.58" x2="47.58" y1="1.86" y2="55.464" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQm_MGNtlXsq2xHJ_gr13)" d="M57.62,45.38 c-0.08,0.21-0.3,0.37-0.56,0.32h-0.01l-10.57-2.14l-1.2-0.24L43.71,43l-6.17-6.1v-4.89c0-0.01,0-0.01,0-0.01L57.62,45.38z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQn_MGNtlXsq2xHJ_gr14" x1="41.264" x2="41.264" y1="18.655" y2="40.725" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQn_MGNtlXsq2xHJ_gr14)" d="M46.87,46.29L35.54,37 c0-0.01,0-0.02,0.01-0.02l1.46-3.83c0.01-0.01,0.01-0.02,0.02-0.03l0.49-1.08c0.01-0.01,0.02-0.02,0.02-0.03l7.74,11.31l0.69,1.01 l0.93,1.36C47.04,45.9,47,46.14,46.87,46.29z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQo_MGNtlXsq2xHJ_gr15" x1="15.765" x2="15.765" y1="15.669" y2="42.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQo_MGNtlXsq2xHJ_gr15)" d="M26,31l-0.63,0.06L5.55,33.03 c-0.01-0.02-0.02-0.04-0.01-0.06c-0.04-0.19,0.03-0.4,0.24-0.52l8.25-4.54l3.89-2.14l0.52-0.29l1.19,0.87h0.01l0.17,0.13l4.73,3.46 h0.01l0.11,0.08l0.01,0.01L26,31z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQp_MGNtlXsq2xHJ_gr16" x1="15.768" x2="15.768" y1="1.221" y2="55.962" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQp_MGNtlXsq2xHJ_gr16)" d="M26,32l-11,3l-0.89-0.16l-8.18-1.46H5.92 c-0.01,0-0.01,0-0.02-0.01c-0.19-0.04-0.31-0.19-0.35-0.34c-0.01-0.02-0.02-0.04-0.01-0.06l19-3.03h0.01l0.05-0.01l0.06,0.09 l0.01,0.01l0.7,1.03L26,32z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQq_MGNtlXsq2xHJ_gr17" x1="47.775" x2="47.775" y1="17.965" y2="41.013" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQq_MGNtlXsq2xHJ_gr17)" d="M58,32.97c0.01,0.02,0,0.04-0.01,0.06 l-19.82-1.97L37.54,31l1.34-0.97v-0.01h0.01l0.01-0.01l0.09-0.07H39l6.1-4.46l0.92,0.51l3.49,1.92l8.25,4.54 C57.97,32.57,58.04,32.78,58,32.97z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQr_MGNtlXsq2xHJ_gr18" x1="51.544" x2="51.544" y1="18.414" y2="39.986" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQr_MGNtlXsq2xHJ_gr18)" d="M55.07,25H48l0.84-4.21v-0.01 c0-0.01,0-0.01,0.01-0.02c0.1-0.35,0.5-0.5,0.79-0.27l5.25,4.02C55.06,24.63,55.12,24.83,55.07,25z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQs_MGNtlXsq2xHJ_gr19" x1="47.772" x2="47.772" y1="1.221" y2="55.962" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQs_MGNtlXsq2xHJ_gr19)" d="M58,32.97c0.01,0.02,0,0.04-0.01,0.06 c-0.04,0.15-0.16,0.3-0.35,0.34c-0.01,0.01-0.01,0.01-0.02,0.01h-0.01l-8.18,1.46L48.54,35l-11-3c0.01-0.01,0.02-0.02,0.02-0.03 l0.61-0.91l0.69-1.01l0.02-0.02v-0.01l0.06-0.09l0.05,0.01H39L58,32.97z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQt_MGNtlXsq2xHJ_gr20" x1="50.535" x2="50.535" y1="1.187" y2="56.006" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQt_MGNtlXsq2xHJ_gr20)" d="M55.07,25c-0.02,0.15-0.11,0.28-0.26,0.35 l-5.3,2.56H49.5L46,26l0.02-0.01L47.87,25H55.07z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQu_MGNtlXsq2xHJ_gr21" x1="-15.465" x2="-15.465" y1="18.414" y2="39.986" gradientTransform="matrix(-1 0 0 1 -2.459 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQu_MGNtlXsq2xHJ_gr21)" d="M9.48,25h7.07l-0.84-4.21v-0.01 c0-0.01,0-0.01-0.01-0.02c-0.1-0.35-0.5-0.5-0.79-0.27l-5.25,4.02C9.49,24.63,9.43,24.83,9.48,25z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQv_MGNtlXsq2xHJ_gr22" x1="-16.474" x2="-16.474" y1="1.187" y2="56.006" gradientTransform="matrix(-1 0 0 1 -2.459 0)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQv_MGNtlXsq2xHJ_gr22)" d="M9.48,25c0.02,0.15,0.11,0.28,0.26,0.35 l5.3,2.56h0.01l3.5-1.91l-0.02-0.01L16.68,25H9.48z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQw_MGNtlXsq2xHJ_gr23" x1="31.982" x2="31.982" y1="42.626" y2="47.834" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQw_MGNtlXsq2xHJ_gr23)" d="M29,42.626h6c0,0,0.22,2.754-0.349,4.861 c-0.08,0.295-0.422,0.426-0.7,0.299c-0.543-0.249-0.904-0.488-1.156-0.744c-0.467-0.475-1.218-0.511-1.697-0.048 c-0.268,0.259-0.643,0.5-1.196,0.75c-0.308,0.139-0.646-0.056-0.711-0.388C29.038,46.565,28.798,44.727,29,42.626z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQx_MGNtlXsq2xHJ_gr24" x1="37.02" x2="40.62" y1="24.94" y2="24.94" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQx_MGNtlXsq2xHJ_gr24)" d="M40.62,23.95c0,0.03-0.01,0.05-0.02,0.08 l-3.5,1.9c-0.03-0.01-0.05-0.02-0.08-0.03L40.62,23.95z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQy_MGNtlXsq2xHJ_gr25" x1="34.65" x2="35.22" y1="26.825" y2="26.825" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQy_MGNtlXsq2xHJ_gr25)" d="M34.65,26.6 c0.14,0.17,0.29,0.32,0.45,0.45c0.02-0.1,0.06-0.21,0.12-0.32L34.65,26.6z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQz_MGNtlXsq2xHJ_gr26" x1="24" x2="24" y1="8.251" y2="19.889" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQz_MGNtlXsq2xHJ_gr26)" d="M20,9l4,9h4C27,12,23.556,10.633,20,9z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQA_MGNtlXsq2xHJ_gr27" x1="39.77" x2="39.77" y1="8.251" y2="19.889" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQA_MGNtlXsq2xHJ_gr27)" d="M43.541,9l-4,9H36 C37,12,39.985,10.633,43.541,9z"></path><path fill="#fff" d="M30.52,51.42v0.04c-0.01-0.04-0.02-0.08-0.02-0.12V51.3L30.52,51.42z"></path><path fill="#fff" d="M33.5,51.3v0.04c0,0.03-0.01,0.05-0.02,0.08L33.5,51.3z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQB_MGNtlXsq2xHJ_gr28" x1="34.65" x2="35.22" y1="26.825" y2="26.825" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQB_MGNtlXsq2xHJ_gr28)" d="M35.22,26.73 c-0.06,0.11-0.1,0.22-0.12,0.32c-0.16-0.13-0.31-0.28-0.45-0.45L35.22,26.73z"></path><path fill="#fff" d="M30.52,51.42v0.04c-0.01-0.04-0.02-0.08-0.02-0.12V51.3L30.52,51.42z"></path><path fill="#fff" d="M33.5,51.3v0.04c0,0.03-0.01,0.05-0.02,0.08L33.5,51.3z"></path><linearGradient id="sQWglRuEWWD3tD7RI56sQC_MGNtlXsq2xHJ_gr29" x1="31.959" x2="31.959" y1="53" y2="54.847" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQC_MGNtlXsq2xHJ_gr29)" d="M30.038,54.847h3.843c0.552,0,1-0.448,1-1 l0-0.847c-2.057,0.48-4.003,0.472-5.843,0l0,0.847C29.038,54.399,29.486,54.847,30.038,54.847z"></path><g><linearGradient id="sQWglRuEWWD3tD7RI56sQD_MGNtlXsq2xHJ_gr30" x1="32" x2="32" y1="6.969" y2="47.797" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#sQWglRuEWWD3tD7RI56sQD_MGNtlXsq2xHJ_gr30)" d="M51.29,8.38C51.1,8.14,50.81,8,50.5,8H50 c-0.51,0-0.93,0.38-0.99,0.88l-0.17,1.44l-3.56,2.9l0.26-4.15c0.04-0.76-0.74-1.29-1.43-0.97l-4.64,2.2C37.14,9.46,34.62,9,32,9 c-2.77,0-5.43,0.51-7.87,1.45l-4.68-2.34C18.76,7.76,17.96,8.29,18,9.06l0.23,3.76l-3.07-2.5l-0.17-1.44C14.93,8.38,14.51,8,14,8 h-0.5c-0.31,0-0.6,0.14-0.79,0.38l-1.8,2.29l0.11,0.53c0.72,3.59,1.44,6.42,2.07,8.58c0.14,0.47,0.27,0.9,0.4,1.31 c0.06,0.22,0.13,0.42,0.2,0.62c0.04,0.14,0.08,0.28,0.13,0.41c0.16,0.47,0.3,0.88,0.44,1.24c0.08,0.21,0.15,0.4,0.21,0.57 c0.35,0.92,0.58,1.4,0.62,1.5c0.01,0.01,0.02,0.02,0.02,0.02l0.11,0.23l0.23,0.15c0.07,0.05,0.59,0.4,1.33,0.89 c1.87,1.24,5.17,3.41,6.32,4.08c1.34,0.76,2.9,2.22,2.9,4.84v0.41l0.29,0.3c0.17,0.17,0.31,0.32,0.6,0.49L27,39.21 c3.21,1.47,6.54,1.47,10,0v-2.34c0.29-0.17,0.53-0.34,0.71-0.52l0.29-0.3v-0.41c0-2.62,1.56-4.08,2.9-4.85 c1.15-0.67,4.46-2.84,6.33-4.08c0.74-0.49,1.25-0.83,1.32-0.88l0.23-0.15l0.11-0.23c0-0.01,0.01-0.02,0.02-0.03 c0.06-0.13,0.29-0.61,0.62-1.5c0.08-0.17,0.15-0.36,0.22-0.56c0.13-0.36,0.28-0.77,0.43-1.24c0.05-0.13,0.09-0.27,0.13-0.41 c0.07-0.2,0.14-0.4,0.2-0.62c0.13-0.41,0.26-0.84,0.4-1.31c0.63-2.16,1.35-4.99,2.07-8.58l0.11-0.53L51.29,8.38z M39.55,12.46 l0.27-0.13l2.06-0.98l0.77-0.36l-0.27,0.62l-0.72,1.61L39.98,17h-2.44L39.55,12.46z M37.2,11.93l-2.95,5.56 c-0.34,0.66,0.11,1.44,0.85,1.47L36.2,19c-1.53,1.94-2.01,4.07-2.15,5.42l-1.2-0.26h-1.7l-1.54,0.33 c-0.14-1.35-0.6-3.51-2.16-5.49h0.62c0.73,0,1.22-0.75,0.91-1.42c-0.82-1.77-2.17-4.7-2.57-5.65C30,11.16,33.61,11.16,37.2,11.93z M30.77,26.29L32,26.02l1.23,0.27c-0.62,1.72,0.12,3.39,1.05,4.56c-1.62,0.66-3.14,0.68-4.56,0 C30.65,29.68,31.39,28.01,30.77,26.29z M21.8,11.52l1.98,0.99l0.77,0.38l0.04-0.07c0.4,0.96,1.14,2.71,1.82,4.18h-2.85l-1.59-3.57 l-0.71-1.62l-0.33-0.73L21.8,11.52z M15.72,21.46c-0.06-0.17-0.12-0.35-0.18-0.54c-0.12-0.36-0.24-0.74-0.36-1.16 c-0.03-0.11-0.07-0.23-0.11-0.34c-0.05-0.18-0.11-0.37-0.17-0.57c-0.11-0.39-0.22-0.81-0.34-1.25c-0.47-1.73-0.98-3.82-1.48-6.29 c0.06-0.06,0.11-0.11,0.16-0.17l0.02,0.22l4.04,3.29l1.39,1.13L22.64,19h2.01c1.93,1.56,2.63,3.58,2.87,4.98l-5.31-2.86 l-2.64-1.43L17.42,17c-0.43,0.43-0.82,0.87-1.18,1.34l2.03,2.91l1.32,0.72c-0.61,0.61-1.53,1.43-2.8,2.34 C16.61,23.91,16.23,22.99,15.72,21.46z M26.85,25.9c-0.55,0.21-1.19,0.23-1.81,0.03c-0.7-0.23-1.27-0.7-1.58-1.31 c-0.11-0.22-0.18-0.44-0.21-0.67L26.85,25.9z M39.9,29.06c-1.71,0.98-3.7,2.87-3.89,6.08c-0.67,0.41-2.13,0.93-3.16,1.11 c-0.32,0.06-0.59,0.08-0.79,0.06c-0.2,0.02-0.48,0-0.8-0.06c-1.08-0.18-2.6-0.7-3.27-1.11c-0.19-3.21-2.18-5.1-3.89-6.07 c-0.97-0.57-3.66-2.33-5.55-3.58c1.25-0.93,2.14-1.77,2.73-2.38c-0.13,0.8,0.01,1.65,0.4,2.42c0.54,1.07,1.54,1.91,2.74,2.3 c0.49,0.16,0.99,0.23,1.48,0.23c1.11,0,2.18-0.39,2.97-1.11c0.42,1.24-0.47,2.44-1.06,3.05c-0.26,0.28-0.33,0.7-0.19,1.06 l0.05,0.12c0.22,0.53,0.57,0.99,1.03,1.32c0.52,0.38,1.23,0.88,1.77,1.21C30.78,33.9,31.14,34,31.51,34h0.93 c0.39,0,0.76-0.11,1.09-0.32c0.53-0.34,1.22-0.82,1.73-1.18c0.49-0.33,0.86-0.8,1.08-1.35l0.04-0.1c0.14-0.35,0.07-0.77-0.19-1.04 c-0.57-0.6-1.44-1.76-1.09-2.96c0.78,0.66,1.8,1.01,2.87,1.01c0.49,0,0.99-0.07,1.48-0.23c1.2-0.39,2.2-1.23,2.74-2.3 c0.42-0.82,0.54-1.72,0.38-2.57l0.03-0.01c0.57,0.62,1.51,1.52,2.86,2.53C43.57,26.73,40.88,28.49,39.9,29.06z M37.02,25.9 l3.6-1.95c0,0.03-0.01,0.05-0.02,0.08c-0.03,0.2-0.09,0.4-0.19,0.59c-0.31,0.61-0.88,1.08-1.58,1.31c-0.59,0.19-1.21,0.17-1.73,0 C37.07,25.92,37.05,25.91,37.02,25.9z M49.44,17.6c-0.12,0.44-0.23,0.86-0.34,1.25c-0.06,0.2-0.12,0.39-0.17,0.57 c-0.04,0.11-0.08,0.23-0.11,0.34c-0.12,0.42-0.24,0.81-0.36,1.16c-0.06,0.19-0.12,0.38-0.18,0.55c-0.5,1.51-0.89,2.43-1.06,2.83 c-1.27-0.91-2.19-1.73-2.8-2.34l1.31-0.71l2.03-2.91c-0.36-0.47-0.75-0.91-1.18-1.34l-2.15,2.69l-8.32,4.43 c0.22-1.4,0.9-3.51,2.89-5.12h2.36l3.95-3.22l1.39-1.13l4.04-3.29l0.02-0.22c0.05,0.06,0.1,0.11,0.16,0.17 C50.42,13.78,49.91,15.87,49.44,17.6z"></path></g><path fill="#fff" d="M28.42,37.496c-1.239-0.312-1.634-0.729-1.634-0.729s0.427,4.448,2.427,5.122 C28.42,39.352,28.42,37.496,28.42,37.496z"></path><path fill="#fff" d="M35.421,37.637c0.998-0.279,1.64-0.813,1.64-0.813s-0.262,4.157-2.262,4.831 C35.579,39.117,35.421,37.637,35.421,37.637z"></path><path fill="#fff" d="M32.043,40.828L32.043,40.828c0.342,0,0.62-0.278,0.62-0.62v-1.76c0-0.342-0.278-0.62-0.62-0.62l0,0 c-0.342,0-0.62,0.278-0.62,0.62v1.76C31.423,40.551,31.7,40.828,32.043,40.828z"></path><path fill="#fff" d="M33.879,40.828L33.879,40.828c0.342,0,0.62-0.278,0.62-0.62v-1.76c0-0.342-0.278-0.62-0.62-0.62l0,0 c-0.342,0-0.62,0.278-0.62,0.62v1.76C33.259,40.551,33.536,40.828,33.879,40.828z"></path><path fill="#fff" d="M30.211,40.828L30.211,40.828c0.342,0,0.62-0.278,0.62-0.62v-1.76c0-0.342-0.278-0.62-0.62-0.62l0,0 c-0.342,0-0.62,0.278-0.62,0.62v1.76C29.591,40.551,29.869,40.828,30.211,40.828z"></path>
</svg>',},link: "https://mikecz23.github.io/witcher3map/",  ariaLabel: "Mapa"},
    ]
  }
});
