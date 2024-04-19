<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Comments from './disqus.vue'
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
.task-list-item-checkbox {
    width: 13px;
    height: 13px;
}

 .task-list-item-checkbox:checked {
    appearance: none;
    -webkit-appearance: none;
    /*padding: 0.1rem;*/
    border: 0.15rem solid green;
    border-radius: 2px;
    background: green;
    content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');
    width: 13px;
    height: 13px;
}
</style>
