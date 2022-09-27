---
title: Vue
category: Web Technologies
description: A modern Javascript framework that has its popularity soared since its inception.
tags:
  - vue
quicklinks:
  - name: Vue.js
    icon: /_nuxt/assets/images/tech/vue/logo-icons/vue.png
    url: https://vuejs.org/
  - name: Vuetify
    icon: /_nuxt/assets/images/tech/vue/logo-icons/vuetify.png
    url: https://vuetifyjs.com/en/
  - name: Nuxt.js
    icon: /_nuxt/assets/images/tech/vue/logo-icons/nuxt.png
    url: https://nuxtjs.org/
  - name: Vue School
    icon: /_nuxt/assets/images/tech/vue/logo-icons/vueschool.png
    url: https://vueschool.io/
  - name: Vue Mastery
    icon: /_nuxt/assets/images/tech/vue/logo-icons/vuemastery.png
    url: https://www.vuemastery.com/
---

<v-quicklinks :quicklinks="quicklinks"></v-quicklinks>

## Introduction

### Vue.js

[Vue.js](https://vuejs.org/) is a blazing fast Javascript framework originally developed by [Evan You](https://twitter.com/youyuxi). The project started out back in 2013 and is actively developed until now. Learn more about the history on this [Wikipedia](https://en.wikipedia.org/wiki/Vue.js) page.

There are 2 popular versions of Vue, which is the version 2 (2.x) and the latest version 3 (3.x).

### Vue V2

Vue V2 features the Options API.

- https://v2.vuejs.org/
- https://devdocs.io/vue~2/
- https://vuedose.tips/
- https://vueschool.io/
- https://nuxtjs.org/
- https://www.vuemastery.com/
- https://laracasts.com/series/learn-vue-2-step-by-step
- https://gridsome.org/
- https://www.vuetelescope.com/
- https://vuex.vuejs.org/
- https://router.vuejs.org/
- https://kazupon.github.io/vue-i18n/
- https://vuetifyjs.com/en/
- https://motion.vueuse.org/

### Vue V3

The newest version of Vue.js that is rewritten in TypeScript, hence it comes with a first-class support for TypeScript with Vue.

Evan You once tweeted a sneak peek of the latest upgrade for Vue back on Christmas 2021.

<blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">Ok, just want to get this out so I can enjoy the holidays:<br>A preview of the new Vue 3 docs that we&#39;ve been working on: <a href="https://t.co/WqoIlFcyn5">https://t.co/WqoIlFcyn5</a><br><br>- New design / implementation<br>- Toggle preference between Composition API / Options API<br>- Updated recommendations<br>...and more!</p>&mdash; Evan You (@youyuxi) <a href="https://twitter.com/youyuxi/status/1474751849467023365?ref_src=twsrc%5Etfw">December 25, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

There are quite a number of difference between the two versions of Vue, or rather the Options API and the Composition API.

A prime example would be the way to declare a reactive state. In Options API, all the state is stored within the `data` method within the default export.

```html
<script>
  export default {
    data() {
      return {
        name: "Keith",
      };
    },
  };
</script>
```

Whereas in Composition API, we will need to use `ref` for the same declaration within the `setup` method.

```html
<script>
  import { ref } from "vue";

  export default {
    setup() {
      const name = ref('Keith');

      return {
        name,
      };
    },
  };
</script>
```

[This article](https://plainenglish.io/blog/differences-between-vue-2-and-vue-3) discusses the differences between the two versions of Vue in a much greater detail.

### Nuxt

Nuxt.js is a server-side framework for Vue. It supports server-side rendering and static site generation out of the box. SSR/SSG will greatly improve the search engine optimazation (SEO) results. Besides, it also supports client-side rendering as well.

Nuxt.js also have two distinct versions that are used widely, which are Nuxt v2 and Nuxt v3 respectively.

- https://content.nuxtjs.org/
- https://tailwindcss.nuxtjs.org/
- https://i18n.nuxtjs.org/

## Development Tools

### Vue Devtools

Vue devtools is a browser extension that can be used to debug Vue application directly in the browser of choice. It supports Vuex state as well. For Chromium-based browsers such as Chrome, Brave and Edge, the devtools can be found [here](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd). For Firefox, the devtools can be obtained via the [marketplace](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/).

### CLI

The Vue CLI can be installed via NPM or Yarn.

```
npm i -g @vue/cli
# or
yarn global add @vue/cli
```

Then, to create a project, we can specify a project name or create via UI.

```
vue create <project-name>
# or
vue ui
```

For more info, visit the official website for [Vue CLI](https://cli.vuejs.org/) webpage.

### Visual Studio Code

Visual Studio Code is the recommended code editor of choice for Vue based applications. Here are some of the useful extensions tailored for Vue development.

- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Articles

### Vuex

- https://www.grandream.jp/blog/vuex-undefined/