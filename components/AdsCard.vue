<template>
  <a
    class="rounded transition-colors duration-200 bg-gray-100 hover:gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex flex-col items-center justify-center overflow-hidden"
    target="_blank"
    :href="url"
  >
    <img :src="src" alt="Advertisement illustration" class="block" />
    <caption
      class="text-xs dark:text-gray-200 text-gray-700 font-semibold py-1"
    >
      {{
        displayText
      }}
    </caption>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AdsCard',
  props: {
    image: String,
    displayText: String,
    url: {
      type: String,
      default: '',
    },
  },
  computed: {
    src(): string {
      return require(`../assets/images/_ads/${this.image}`)
    },
  },
})
</script>
