<template>
  <div
    class="dark:bg-gray-800 transition-colors ease-in duration-500 min-h-screen"
  >
    <Header />
    <div>
      <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <Sidebar />
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
