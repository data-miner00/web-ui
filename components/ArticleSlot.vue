<template>
  <div
    class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-64 xl:pr-16 dark:text-white"
  >
    <header>
      <p
        class="mb-4 text-sm leading-6 font-semibold text-pink-500 dark:text-pink-400"
      >
        {{ category }}
      </p>

      <h1
        class="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight dark:text-gray-200"
      >
        {{ title }}
      </h1>
      <p class="mt-2">{{ description }}</p>
    </header>
    <div class="mt-8">
      <slot />
    </div>
    <footer></footer>
    <Quicklinks :quicklinks="quicklinks" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    category: String,
    title: String,
    description: String,
    // componentName: {
    //   type: String,
    //   required: true,
    // },
    // quicklinks: {
    //   type: Array,
    // },
    lastUpdated: {
      type: String,
      default: '2020-06-22T10:59:27.863Z',
    },
    author: {
      type: Object,
      default: () => null,
    },
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
  data: () => ({
    quicklinks: [
      {
        id: '123',
        depth: 2,
        text: 'Query',
      },
      {
        id: '1223',
        depth: 2,
        text: 'Memorandum',
      },
      {
        id: '1423',
        depth: 2,
        text: 'Forte',
      },
      {
        id: '1623',
        depth: 2,
        text: 'Kafka',
      },
    ],
  }),
})
</script>
