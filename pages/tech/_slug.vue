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
  name: 'WebTechnologiesSlug',
  async asyncData({ $content, params, app, error }) {
    const categoryName = 'tech'

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
  head() {
    return {
      //@ts-ignore
      title: this.article.title,
    }
  },
  data() {
    return {
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0,
      },
    }
  },
  mounted() {
    //@ts-ignore
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')

        const link = document.querySelector(`.toc a[href$="#${id}"]`)

        if (link)
          if (id && entry.isIntersecting) {
            link.classList.add('active')
          } else {
            link.classList.remove('active')
          }
      })
      //@ts-ignore
    }, this.observerOptions)

    // Track all sections that have an `id` applied
    document
      .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
      .forEach((section) => {
        //@ts-ignore
        this.observer.observe(section)
      })
  },
  beforeDestroy() {
    //@ts-ignore
    this.observer.disconnect()
  },
})
</script>
