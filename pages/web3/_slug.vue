<template>
  <ArticleSlot
    :category="article.category"
    :title="article.title"
    :description="article.description"
    :lastUpdated="article.lastUpdated"
    :author="article.author"
    :previous="previous"
    :next="next"
    :quicklinks="article.toc"
  >
    <nuxt-content :document="article" />
  </ArticleSlot>
</template>

<script lang="ts">
import Vue from 'vue'
import { FetchReturn } from '@nuxt/content/types/query-builder'

export default Vue.extend({
  name: 'Web3Slug',
  async asyncData({ $content, params, app, error }) {
    const categoryName = 'web3'

    const article = await $content(app.i18n.locale, categoryName, params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    const [previous, next] = (await $content(app.i18n.locale, categoryName)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()) as Array<FetchReturn>

    return { article, previous, next }
  },
})
</script>
