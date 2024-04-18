<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter, title } = useData()
</script>

<!-- I MUST F5 IF I CHANGE THEME -->
<!-- https://cdn.jsdelivr.net/gh/MikeCZ23/mikecz23.github.io@main/.vitepress/theme/giscus.css -->
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
      :data-theme="isDark ? 'dark' : 'light'" 
      data-loading="lazy"
      async
    />
  </div>
</template>


<script lang="ts">
import { watch } from 'vue'
import { useRoute, useData } from 'vitepress'

export default {
  mounted() {
    const vitePressData = useData()
    this.isDark = vitePressData.isDark

    const route = useRoute() 
    watch(route, () => {
      this.giscus = !this.giscus
    })
  },
  data() {
    return {
      giscus: true,
      isDark: false
    }
  }
}
</script>

<style>
img.pv {
  margin-top: 1em;
}

div.giscus {
  margin-top: 2em;
}

</style>
