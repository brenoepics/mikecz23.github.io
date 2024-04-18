<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

import Comments from './gisqus.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <Comments />
    </template>
  </Layout>
</template>

<script>
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
