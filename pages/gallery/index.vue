<template>
  <div>
    <section class="my-20">
      <h1 class="text-2xl font-bold dark:text-white">Photograph</h1>
      <p class="dark:text-gray-300 text-gray-600">
        Enjoy the latest picks of picturesque photographs that can be used in
        your next project.
      </p>

      <div class="flex gap-7 flex-wrap mt-5">
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
      </div>

      <nuxt-link class="block ml-auto mt-3 dark:text-white underline" to="/"
        >More photographs</nuxt-link
      >
    </section>

    <section class="my-20">
      <h1 class="text-2xl font-bold dark:text-white">Youtube Collections</h1>
      <p class="dark:text-gray-300 text-gray-600">
        A series of designs that are collected from well-known Youtube Educators
        in designs
      </p>

      <div class="flex gap-7 flex-wrap mt-5">
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
        <div class="w-80 h-60 bg-gray-50 rounded"></div>
      </div>
      <nuxt-link class="block ml-auto mt-5 dark:text-white underline" to="/"
        >More collections</nuxt-link
      >
    </section>
    <div>Temp</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'header-only',
})
</script>
