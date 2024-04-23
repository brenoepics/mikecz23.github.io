import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme"
import './custom.css';
import './giscus-dark.css';
import './giscus-light.css';
import PBlogFigure from "./components/PBlogFigure.vue";
import PBlogHeader from "./components/PBlogHeader.vue";
import PBlogListing from "./components/PBlogListing.vue";
import PBlogVideo from "./components/PBlogVideo.vue";
import PDateString from "./components/PDateString.vue";
import PTeamMembers from "./components/PTeamMembers.vue";
import Layout from "./components/Layout.vue";
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import './BtP-style.css'
import vitepressMusic from 'vitepress-plugin-music'
import 'vitepress-plugin-music/lib/css/index.css'

const playlist = [
  {
    name: 'Hollow Knight',
    author: 'TyKim',
    file: '/docs/hollowknight.mp3',
  }
]

export default {
  Layout,
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("PBlogFigure", PBlogFigure);
    app.component("PBlogHeader", PBlogHeader);
    app.component("PBlogListing", PBlogListing);
    app.component("PBlogVideo", PBlogVideo);
    app.component("PDateString", PDateString);
    app.component("PTeamMembers", PTeamMembers);

    vitepressMusic(playlist);

    vitepressBackToTop({
      // default
      threshold:300
    })
  }
} satisfies Theme;
