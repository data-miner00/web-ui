<template>
  <div class="flex items-center justify-between my-4">
    <a
      v-for="(quicklink, index) in quicklinks"
      :key="index"
      :href="quicklink.url"
      target="_blank"
      class="flex flex-col justify-center items-center h-24 w-32 rounded bg-gray-50 dark:bg-gray-600 quicklinks opacity-80 hover:opacity-100"
    >
      <div>
        <img class="logo-icon" :src="quicklink.icon" :alt="quicklink.name" />
      </div>
      <div>
        <p class="text-center">{{ quicklink.name }}</p>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { PropType } from 'vue'

type Quicklink = {
  name: string
  icon: string
  url: string
}

export default Vue.extend({
  name: 'VQuicklinks',
  props: {
    quicklinks: Array as PropType<Array<Quicklink>>,
  },
})
</script>

<style scoped>
.logo-icon {
  max-width: 30px;
  max-height: 30px;
}
</style>

<style>
.quicklinks {
  --background-color: rgba(249, 250, 251, 0.8);
  --line-color: rgb(225, 226, 226);
  background-color: var(--background-color);
  background-image: linear-gradient(var(--line-color) 1px, transparent 1px),
    linear-gradient(
      to right,
      var(--line-color) 1px,
      var(--background-color) 1px
    );
  background-size: 20px 20px;
}

.dark .quicklinks {
  --background-color: rgba(75, 85, 99, 0.8);
  --line-color: rgb(94, 100, 109);
}
</style>
