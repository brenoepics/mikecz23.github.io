<script setup lang="ts">
import { useData } from 'vitepress'

const { title } = useData()
</script>

<template>
  <div :key="title" class="giscus">
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="MikeCZ23/test"
      data-repo-id="R_kgDOLf7Wgg"
      data-category="General"
      data-category-id="DIC_kwDOLf7Wgs4CeLpZ"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="bottom"
      data-lang="en"
      data-theme="dark"
      data-loading="lazy"
      async
    />
  </div>
</template>
