<template>
  <div
    @click="closeIfPopover"
    class="dark:bg-gray-800 bg-white transition-colors duration-250 min-h-screen"
  >
    <Header />
    <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 min-h-full">
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'header-only',
  methods: {
    closeIfPopover(): void {
      if (this.isLanguagePopoverOpen)
        this.$store.commit('popover/setLanguagePopover', false)

      if (this.isVersionPopoverOpen)
        this.$store.commit('popover/setVersionPopover', false)
    },
  },
  computed: {
    isVersionPopoverOpen(): boolean {
      return this.$store.state.popover.isVersionPopoverOpen as boolean
    },
    isLanguagePopoverOpen(): boolean {
      return this.$store.state.popover.isLanguagePopoverOpen as boolean
    },
  },
})
</script>
