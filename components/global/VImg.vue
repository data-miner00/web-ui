<template>
  <div
    class="img-container w-full rounded border border-solid border-gray-200 dark:border-gray-600 my-5"
  >
    <div
      class="w-full py-6 bg-gradient-to-t from-gray-50 dark:from-gray-700 to-transparent"
    >
      <img
        :src="fullPath"
        :alt="description"
        class="block mx-auto"
        :class="widthclass"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VImage',
  props: {
    description: String,
    folder: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    caption: String,
    widthclass: {
      type: String,
      default: 'w-80',
    },
  },
  computed: {
    fullPath() {
      return require(`../../assets/images/${this.folder}/${this.image}`)
    },
  },
})
</script>

<style>
/*
 * Refer from https://www.magicpattern.design/tools/css-backgrounds
 */

.img-container {
  --pattern-base-color: white;
  --pattern-box-color: #e5e7eb;

  background-color: var(--pattern-base-color);
  opacity: 0.8;
  background-image: repeating-linear-gradient(
      45deg,
      var(--pattern-box-color) 25%,
      transparent 25%,
      transparent 75%,
      var(--pattern-box-color) 75%,
      var(--pattern-box-color)
    ),
    repeating-linear-gradient(
      45deg,
      var(--pattern-box-color) 25%,
      var(--pattern-base-color) 25%,
      var(--pattern-base-color) 75%,
      var(--pattern-box-color) 75%,
      var(--pattern-box-color)
    );
  background-position: 0 0, 10px 10px;
  background-size: 20px 20px;
}

.dark .img-container {
  --pattern-base-color: rgb(55 65 81);
  --pattern-box-color: rgb(31 41 55);
}
</style>
