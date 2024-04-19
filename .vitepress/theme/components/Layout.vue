<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
// import Comments from './disqus.vue'
import Giscus from '@giscus/vue'

const { Layout } = DefaultTheme
const { frontmatter, title } = useData()
</script>

<template>
  <Layout>
    <template #doc-after>
      <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
        <Giscus
          :key="giscus"
          :is="'script'"
          src="https://giscus.app/client.js"
          repo="MikeCZ23/mikecz23.github.io"
          repoId="R_kgDOLf7Wgg"
          category="General"
          categoryId="DIC_kwDOLf7Wgs4CeLpZ" 
          :theme="isDark ? 'dark_dimmed' : 'light'"
          lang="en"
          loading="lazy"
          emit-metadata="0"
          reactions-enabled="1"
          input-position="top"
          strict="0"
          mapping="pathname"
          crossorigin="anonymous"
        />
      </div>
    </template>
  </Layout>
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

</style>
