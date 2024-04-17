<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, title } = useData()
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
