<template>
  <div class="toc fixed z-20 py-10 px-8 overflow-y-auto hidden xl:block">
    <h5 class="font-bold text-sm mb-4 leading-6">Contents covered</h5>
    <ul class="leading-6 text-sm mb-4">
      <li v-for="link in quicklinks" :key="link.id">
        <nuxt-link
          :to="`#${link.id}`"
          class="block py-1 font-medium text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <span
            :class="[
              { 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 },
            ]"
            >{{ link.text }}</span
          >
        </nuxt-link>
      </li>
    </ul>

    <AdsCard image="ads1.jpg" displayText="Get your very own now!" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    quicklinks: Array,
  },
})
</script>

<style lang="postcss" scoped>
.toc {
  width: 19.5rem;
  top: 4rem;
  right: max(0px, calc(50% - 45rem));
  @apply bottom-0;
}

a.active {
  @apply font-bold text-pink-400;
}
</style>
