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
      <p class="mt-2 text-gray-700 dark:text-gray-200">{{ description }}</p>
    </header>
    <div class="mt-8">
      <slot />
    </div>
    <footer class="text-sm leading-6 mt-12">
      <div
        class="mb-10 text-gray-700 font-semibold flex items-center dark:text-gray-200"
      >
        <nuxt-link
          v-if="previous"
          class="group flex items-center hover:text-gray-900 dark:hover:text-white"
          :to="previous.slug"
        >
          <svg
            viewBox="0 0 3 6"
            class="mr-3 w-auto h-1.5 text-gray-400 overflow-visible group-hover:text-gray-600 dark:group-hover:text-gray-300"
          >
            <path
              d="M3 0L0 3L3 6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></svg
          >{{ previous.title }}
        </nuxt-link>
        <div v-else></div>
        <nuxt-link
          v-if="next"
          :to="next.slug"
          class="group ml-auto flex items-center hover:text-gray-900 dark:hover:text-white"
          >{{ next.title
          }}<svg
            viewBox="0 0 3 6"
            class="ml-3 w-auto h-1.5 text-gray-400 overflow-visible group-hover:text-gray-600 dark:group-hover:text-gray-300"
          >
            <path
              d="M0 0L3 3L0 6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path></svg
        ></nuxt-link>
        <div v-else></div>
      </div>
      <div
        class="pt-10 pb-28 border-t border-gray-200 sm:flex justify-between text-gray-500 dark:border-gray-600"
      >
        Temp footer
      </div>
    </footer>
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
    quicklinks: {
      type: Array,
    },
    lastUpdated: {
      type: String,
      default: '2020-06-22T10:59:27.863Z',
    },
    author: {
      type: Object,
      default: () => null,
    },
    previous: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
})
</script>
