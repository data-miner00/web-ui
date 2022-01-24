<template>
  <div
    class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16 dark:text-white"
  >
    <header>{{ $t('hello') }}</header>
    <div></div>
    <footer></footer>
    <Quicklinks :quicklinks="quicklinks" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    quicklinks: [
      {
        id: '123',
        depth: 2,
        text: 'hhhaha',
      },
      {
        id: '1223',
        depth: 2,
        text: 'sahaha',
      },
      {
        id: '1423',
        depth: 2,
        text: 'hsaaha',
      },
      {
        id: '1623',
        depth: 2,
        text: 'hafha',
      },
    ],
  }),
})
</script>
