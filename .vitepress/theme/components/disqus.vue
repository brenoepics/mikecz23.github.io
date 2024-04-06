<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, title } = useData()
</script>

<template>
  <!--
    The `class="giscus"` ensures that the comment section is inserted in the right place,
    so that `v-if` can unload the comment section precisely.
  -->
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
    <!--
      It doesn't make sense to use `v-if` to unmount `script` here,
      what needs to be uninstalled is the giscus comment section that has been inserted into the DOM.
    -->
<!-- data-theme="dark" -->
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
      data-theme="https://raw.githubusercontent.com/MikeCZ23/mikecz23.github.io/main/.vitepress/theme/giscus.css"
      data-loading="lazy"
      async
    />
  </div>
</template>
