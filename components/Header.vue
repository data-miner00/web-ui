<template>
  <header
    class="sticky top-0 z-40 w-full border-b border-solid border-gray-100 dark:border-gray-700 dark:bg-gray-800 bg-white"
  >
    <div class="mx-auto max-w-8xl">
      <div
        class="py-4 lg:px-8 mx-4 lg:mx-0 flex items-center transition-colors duration-500"
      >
        <!-- left most -->
        <button class="block md:hidden dark:text-gray-200 text-gray-700 mr-1">
          <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M4 7h22M4 15h22M4 23h22"
            ></path>
          </svg>
        </button>
        <nuxt-link to="/" class="flex items-center">
          <svg
            class="flex-none"
            height="30"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.5" cy="7.5" r="5.5" fill="#FB7185" />
            <circle cx="22" cy="6" r="3" fill="#FB7185" />
            <circle cx="18.5" cy="17.5" r="4.5" fill="#FB7185" />
          </svg>
          <span
            class="hidden sm:inline flex-none uppercase text-2xl tracking-widest ml-2 text-gray-700 dark:text-gray-200"
            >Gallerium</span
          >
        </nuxt-link>

        <!-- version -->
        <VersionButton />

        <!-- banner -->
        <BannerLink />

        <!-- right most -->
        <div class="ml-auto flex items-center">
          <!-- navlinks -->
          <nav
            class="hidden md:block text-sm leading-6 font-semibold text-gray-700 dark:text-gray-200"
          >
            <ul class="flex space-x-8">
              <li
                v-for="navlink in navlinks"
                :key="navlink.title"
                class="hover:text-pink-400 ease transition-colors"
              >
                <nuxt-link :to="navlink.url">{{ navlink.title }}</nuxt-link>
              </li>
            </ul>
          </nav>

          <!-- buttons -->
          <div
            class="ml-6 pl-6 border-l md:border-gray-200 border-solid border-transparent flex items-center"
          >
            <DarkModeButton />
            <a
              href="https://github.com/data-miner00/web-ui"
              target="_blank"
              class="ml-4 block text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              ><span class="sr-only">Gallerium on GitHub</span
              ><svg
                viewBox="0 0 16 16"
                class="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path></svg
            ></a>
            <language-switcher />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import type { Link } from '../models/links'

export default Vue.extend({
  computed: {
    navlinks(): Array<Link> {
      return [
        {
          title: 'Docs',
          url: '',
        },
        {
          title: 'Playground',
          url: '',
        },
        {
          title: 'Gallery',
          url: '/gallery',
        },
      ]
    },
  },
})
</script>
