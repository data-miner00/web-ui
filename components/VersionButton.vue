<template>
  <div class="relative ml-4">
    <button
      class="text-xs leading-5 font-semibold text-gray-500 bg-gray-100 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-gray-200 dark:highlight-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
      id="headlessui-menu-button-1"
      type="button"
      aria-haspopup="true"
      aria-expanded="true"
      aria-controls="headlessui-menu-items-2"
      @click="handleClick"
    >
      v<!-- -->3.0.12<svg
        width="6"
        height="3"
        class="ml-2 overflow-visible"
        aria-hidden="true"
      >
        <path
          d="M0 0L3 3L6 0"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
        ></path>
      </svg>
    </button>
    <div
      v-show="isPopoverOpen"
      class="absolute top-full mt-1 py-2 w-40 rounded-lg bg-white shadow ring-1 ring-gray-300 text-sm leading-6 font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:highlight-white/5 dark:ring-gray-900"
      aria-labelledby="headlessui-menu-button-1"
      id="headlessui-menu-items-2"
      role="menu"
      tabindex="0"
    >
      <span
        class="flex items-center justify-between px-3 py-1 text-sky-500 dark:text-sky-400"
        id="headlessui-menu-item-13"
        role="menuitem"
        aria-disabled="true"
        >v3.0.12<svg width="24" height="24" fill="none" aria-hidden="true">
          <path
            d="m7.75 12.75 2.25 2.5 6.25-6.5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path></svg></span
      ><a
        href="https://v2.tailwindcss.com"
        class="block px-3 py-1"
        id="headlessui-menu-item-14"
        role="menuitem"
        tabindex="-1"
        >v2.2.19</a
      ><a
        href="https://v1.tailwindcss.com"
        class="block px-3 py-1"
        id="headlessui-menu-item-15"
        role="menuitem"
        tabindex="-1"
        >v1.9.6</a
      ><a
        href="https://tailwindcss-v0.netlify.app/"
        class="block px-3 py-1"
        id="headlessui-menu-item-16"
        role="menuitem"
        tabindex="-1"
        >v0.7.4</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VersionButton',
  data: () => ({
    isPopoverOpen: false,
  }),
  created(): void {
    if (process.client) {
      window.addEventListener('click', () => {
        this.isPopoverOpen = false
      })
    }
  },
  destroyed(): void {
    window.removeEventListener('click', () => {})
  },
  methods: {
    handleClick(event: Event): void {
      this.isPopoverOpen = true
      event.stopPropagation()
    },
  },
})
</script>
