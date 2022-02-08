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

export default Vue.extend({
  name: 'GettingStartedSlug',
  //@ts-ignore
  async asyncData({ $content, params, app, error }) {
    const categoryName = 'getting-started'

    const article = await $content(app.i18n.locale, categoryName, params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    const [previous, next] = await $content(app.i18n.locale, categoryName)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { article, previous, next }
  },
})
</script>
