<template>
  <div
    class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-64 xl:pr-16 dark:text-white"
  >
    <div class="">
      <div class="text-center py-6">
        <span class="text-9xl fontbold font-mono">404</span>
      </div>
      <h1 class="text-center my-6">
        {{ errorMessage }}
      </h1>
    </div>

    <div class="flex justify-center">
      <NuxtLink to="/" class="px-4 py-2 bg-pink-400 rounded block mx-auto"
        >Take me back</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: ['error'],
  layout: 'default',
  computed: {
    errorMessage(): string {
      switch (this.error.statusCode) {
        case 404:
          return 'Regrettably, the destination that you are heading to does not exist.'
        default:
          return "Something doesn't went right. Please refresh to see if it helps."
      }
    },
  },
})
</script>
