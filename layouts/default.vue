<template>
  <div
    @click="closeIfPopover"
    class="dark:bg-gray-800 bg-white transition-colors duration-250 min-h-screen"
  >
    <Header />
    <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <Sidebar />
      </div>
      <div class="lg:pl-80">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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

<style lang="postcss">
.nuxt-content {
  @apply text-gray-700 dark:text-gray-200;
}

.nuxt-content h2 {
  @apply mb-2 text-sm leading-6 font-semibold text-pink-500 dark:text-pink-400 mt-10;
}

.nuxt-content h3 {
  @apply font-semibold text-xl text-black dark:text-white mb-2;
}
.nuxt-content h4 {
}

.nuxt-content h1:hover a,
.nuxt-content h2:hover a,
.nuxt-content h3:hover a {
}

.nuxt-content h1 a,
.nuxt-content h2 a,
.nuxt-content h3 a {
}

.nuxt-content p,
.nuxt-content > ul,
.nuxt-content ol {
  @apply my-6;
}

.nuxt-content code {
  @apply font-mono relative mx-1;
}

.nuxt-content code::before {
  content: '';
  @apply absolute bg-gray-200 dark:bg-gray-500 bg-opacity-30 dark:bg-opacity-30 -inset-1 rounded-md pointer-events-none;
}

.nuxt-content-highlight pre code {
  @apply mx-0;
}

.nuxt-content-highlight pre code::before {
  @apply hidden;
}

.nuxt-content hr {
  @apply my-12 border-t bg-gray-100 dark:border-gray-600 dark:bg-opacity-5;
}

.nuxt-content a {
  @apply font-bold border-b border-pink-400;
}

.nuxt-content a:hover {
  @apply border-b-2;
}

.nuxt-content blockquote {
  @apply rounded-sm border-l-4 border-pink-400 py-3 my-3 pl-6 dark:bg-gray-600 bg-gray-200 bg-opacity-30;
}

.nuxt-content blockquote.warning {
  @apply border-yellow-500 text-yellow-500 bg-yellow-100;
}

.nuxt-content blockquote.info {
  @apply border-blue-500 text-blue-500 bg-blue-100;
}

.nuxt-content blockquote.danger {
  @apply border-red-500 text-red-500 bg-red-100;
}

.nuxt-content blockquote p:last-of-type {
  @apply my-0;
}

.nuxt-content-highlight pre {
  /* Lucario have built-in css */
  @apply mb-6;
}

.nuxt-content ul {
}

.nuxt-content ul li {
  @apply my-2 pl-7 relative;
}

.nuxt-content ul li::before {
  content: '';
  width: 0.75em;
  height: 0.125em;
  top: calc(0.875em - 0.0625em);
  @apply absolute left-0 rounded-full bg-gray-300;
}

.nuxt-content ol {
  @apply list-decimal list-inside;
}

.nuxt-content ol li {
  @apply my-2;
}

.nuxt-content table {
  @apply w-full text-left border-collapse table-auto my-8;
}

.nuxt-content thead tr {
  @apply border-b border-solid border-gray-300 dark:border-gray-600;
}

.nuxt-content th,
.nuxt-content td {
}

.nuxt-content tbody tr {
  @apply border-b border-solid border-gray-200 dark:border-gray-700;
}

.nuxt-content td,
.nuxt-content th {
  @apply py-2;
}
</style>
