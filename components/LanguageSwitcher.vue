<template>
  <div class="relative ml-4">
    <span class="sr-only">Language switcher</span>
    <button
      class="flex items-center w-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
      id="headlessui-menu-button-2"
      type="button"
      aria-haspopup="true"
      aria-expanded="true"
      aria-controls="headlessui-menu-items-3"
      @click="handleClick"
    >
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        class="w-5 h-5 m-auto"
      >
        <path
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        ></path>
      </svg>
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <g transform="rotate(90 12 12)">
          <path d="M9 5l7 7-7 7"></path>
        </g>
      </svg>
    </button>
    <div
      v-show="isLanguagePopoverOpen"
      class="absolute top-full mt-1 py-2 w-40 rounded-lg bg-white shadow ring-1 ring-gray-300 text-sm leading-6 font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-900"
      aria-labelledby="headlessui-menu-button-2"
      id="headlessui-menu-items-3"
      role="menu"
      tabindex="0"
    >
      <span class="block" id="headlessui-menu-item-1" role="menuitem">
        English
      </span>
      <span class="block" id="headlessui-menu-item-2" role="menuitem">
        Japanese
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LanguageSwitcher',
  methods: {
    handleClick(event: Event): void {
      event.stopPropagation()
      this.toggleLanguagePopover()
    },
    toggleLanguagePopover(): void {
      this.$store.commit('popover/toggleLanguagePopover')
    },
  },
  computed: {
    isLanguagePopoverOpen(): boolean {
      return this.$store.state.popover.isLanguagePopoverOpen as boolean
    },
  },
})
</script>
