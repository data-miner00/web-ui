<template>
  <div
    v-show="isSearchPanelOpen"
    @click="toggleSearchPanel"
    class="fixed top-0 left-0 w-screen h-screen bg-opacity-50 text-white bg-gray-600 z-50"
  >
    hello
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    toggleSearchPanel(): void {
      this.$store.commit('popover/toggleSearchPanel')
    },
  },
  computed: {
    isSearchPanelOpen(): boolean {
      return this.$store.state.popover.isSearchPanelOpen as boolean
    },
  },
})
</script>
