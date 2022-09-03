<template>
  <div
    class="img-container w-full rounded border border-solid border-gray-200 dark:border-gray-600 my-5"
  >
    <div
      @click="toggleImageOverlay"
      class="w-full py-6 bg-gradient-to-t from-gray-50 dark:from-gray-700 to-transparent"
    >
      <img
        :src="fullPath"
        :alt="description"
        class="block mx-auto"
        :class="widthclass"
      />
    </div>
    <div
      @click="toggleImageOverlay"
      class="fixed inset-0 bg-opacity-80 bg-black flex items-center justify-center z-20"
      :class="{ hidden: !overlayOpen }"
    >
      <div @click.stop="" class="">
        <img
          :src="fullPath"
          :alt="description"
          class="block mx-auto max-w-4xl"
        />
      </div>
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
  data: () => ({
    overlayOpen: false,
  }),
  methods: {
    toggleImageOverlay() {
      this.$data.overlayOpen = !this.$data.overlayOpen
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
  opacity: 0.95;
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
