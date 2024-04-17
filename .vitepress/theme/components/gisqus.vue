<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, title } = useData()


function changeGiscusTheme () {
  let modeToggle = new ModeToggle();
  const theme = modeToggle.mode === 'dark' ?  'dark' : 'light'
  function sendMessage(message) {
    let iframe = document.querySelector('iframe.giscus-frame') as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
    }
  }
  sendMessage({
    setConfig: {
      theme: theme
    }
  });
}

const modeToggle = document.getElementsByClassName("mode-toggle")[0];

if (typeof modeToggle !== "undefined") {
  modeToggle.addEventListener('click', changeGiscusTheme);
}
</script>

<template>
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="MikeCZ23/mikecz23.github.io"
      data-repo-id="R_kgDOLf7Wgg"
      data-category="General"
      data-category-id="DIC_kwDOLf7Wgs4CeLpZ"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-lang="en"
      data-theme="https://cdn.jsdelivr.net/gh/MikeCZ23/mikecz23.github.io@latest/.vitepress/theme/giscus.css"
      data-loading="lazy"
      async
    />
  </div>
</template>
