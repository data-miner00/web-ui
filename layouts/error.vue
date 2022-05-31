<template>
  <div
    class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-64 xl:pr-16 dark:text-white"
  >
    <div v-if="error.statusCode === 404">
      <h1>Page not found</h1>
    </div>
    <div v-else>
      <h1>An error occurred</h1>
    </div>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: ['error'],
  layout: 'default',
})
</script>
