<template>
  <div
    class="hidden lg:block fixed z-20 inset-0 right-auto pb-10 px-8 overflow-y-auto transition-colors ease-in duration-500"
    id="nav-wrapper"
  >
    <nav id="nav" class="lg:text-sm lg:leading-6 relative">
      <div class="sticky top-0 -ml-0.5 pointer-events-none">
        <div class="h-10 bg-white dark:bg-gray-800"></div>
        <div class="relative pointer-events-auto rounded">
          <button
            type="button"
            class="hidden w-full lg:flex items-center text-sm leading-6 text-gray-400 rounded-md ring-1 ring-gray-100 shadow-sm py-1.5 pl-2 pr-3 hover:ring-gray-300 bg-white dark:bg-gray-700 dark:highlight-white/5 dark:ring-gray-700 dark:hover:bg-gray-600 dark:hover:ring-gray-600"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              class="mr-3 flex-none"
            >
              <path
                d="m19 19-3.5-3.5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle></svg
            ><span class="font-semibold">Quick search...</span
            ><span class="ml-auto pl-3 flex-none text-xs font-semibold"
              >Ctrl K</span
            >
          </button>
        </div>
        <div class="h-8 from-white dark:from-gray-800 bg-gradient-to-b"></div>
      </div>
      <ul>
        <li
          v-for="mainLink in mainLinks"
          :key="mainLink.title"
          class="text-gray-700 dark:text-gray-100"
        >
          <nuxt-link
            :to="mainLink.to"
            class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400"
            ><div
              class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10"
            >
              <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
                  class="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
                  class="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"
                ></path>
              </svg>
            </div>
            {{ mainLink.title }}</nuxt-link
          >
        </li>
        <li
          v-for="category in categories"
          :key="category.title"
          class="mt-12 lg:mt-8"
        >
          <h5 class="mb-8 lg:mb-3 font-bold text-gray-600 dark:text-gray-200">
            {{ category.title }}
          </h5>
          <ul
            class="category space-y-6 lg:space-y-2 border-l border-gray-100 dark:border-gray-600"
          >
            <li
              v-for="categoryLink in category.links"
              :key="categoryLink.title"
            >
              <nuxt-link
                class="block border-l pl-4 -ml-px font-semibold"
                :to="categoryLink.to"
                >{{ categoryLink.title }}</nuxt-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

class MainLink {
  constructor(
    public to: string,
    public title: string,
    public conditionalClasses: string,
    public icon?: string
  ) {}
}

class CategoryLink {
  constructor(
    public to: string,
    public title: string,
    public conditionalClasses: string
  ) {}
}

class Category {
  constructor(public title: string, public links: Array<CategoryLink>) {}
}

export default Vue.extend({
  name: 'Sidebar',
  computed: {
    mainLinks() {
      return [
        new MainLink('', 'Documentation', ''),
        new MainLink('', 'Components', ''),
        new MainLink('', 'Libraries', ''),
        new MainLink('', 'Playground', ''),
        new MainLink('', 'Information', ''),
        new MainLink('', 'Frameworks', ''),
      ]
    },
    categories() {
      return [
        new Category('Getting Started', [
          new CategoryLink('', 'Introduction', ''),
          new CategoryLink('/getting-started', 'Future Works', ''),
        ]),
        new Category('Internet Designs', [
          new CategoryLink('internet-designs/', 'Navbar', ''),
          new CategoryLink('internet-designs/', 'Sidebar', ''),
          new CategoryLink('internet-designs/', 'Header', ''),
          new CategoryLink('internet-designs/', 'Footer', ''),
          new CategoryLink('internet-designs/', 'Subscription', ''),
        ]),
        new Category('Actual Designs II', [
          new CategoryLink('actual-designs', 'Navbar', ''),
          new CategoryLink('actual-designs', 'Sidebar', ''),
          new CategoryLink('actual-designs', 'Footer', ''),
          new CategoryLink('actual-designs', 'Subscription', ''),
        ]),
        new Category('Actual Designs III', [
          new CategoryLink('actual-designs', 'Navbar', ''),
          new CategoryLink('actual-designs', 'Sidebar', ''),
          new CategoryLink('actual-designs', 'Footer', ''),
          new CategoryLink('actual-designs', 'Subscription', ''),
        ]),
        new Category('Actual Designs IV', [
          new CategoryLink('actual-designs', 'Navbar', ''),
          new CategoryLink('actual-designs', 'Sidebar', ''),
          new CategoryLink('actual-designs', 'Footer', ''),
          new CategoryLink('actual-designs', 'Subscription', ''),
        ]),
      ]
    },
  },
})
</script>

<style lang="postcss" scoped>
#nav-wrapper {
  width: 19.5rem;
  left: max(0px, calc(50% - 45rem));
  /* top: 3.8125rem; */
  top: 4rem;
}

.category a {
  @apply border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300;
}

.category .nuxt-link-active {
  @apply text-pink-500 border-current font-semibold dark:text-pink-400;
}
</style>
