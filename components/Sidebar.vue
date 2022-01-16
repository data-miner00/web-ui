<template>
  <div
    class="hidden lg:block fixed z-20 inset-0 right-auto pb-10 px-8 overflow-y-auto"
    id="nav-wrapper"
  >
    <nav id="nav" class="lg:text-sm lg:leading-6 relative">
      <div class="sticky top-0 -ml-0.5 pointer-events-none">
        <div class="h-10"></div>
        <div class="bg-white dark:bg-slate-900 relative pointer-events-auto">
          <button
            type="button"
            class="hidden w-full lg:flex items-center text-sm leading-6 text-gray-400 rounded-md ring-1 ring-gray-100 shadow-sm py-1.5 pl-2 pr-3 hover:ring-gray-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-gray-700"
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
        <div class="h-8 bg-gradient-to-b from-white dark:from-slate-900"></div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#nav-wrapper {
  width: 19.5rem;
  left: max(0px, calc(50% - 45rem));
  top: 3.8125rem;
}
</style>
