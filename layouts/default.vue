<template>
  <div class="dark:bg-gray-800 transition-colors duration-250 min-h-screen">
    <Header />
    <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <Sidebar />
      </div>
      <div class="lg:pl-80">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
