<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Comments from './gisqus.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <div class="giscus">
        <Comments />
      </div>
    </template>
  </Layout>
</template>
