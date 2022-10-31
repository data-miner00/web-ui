---
title: Angular
category: Web Technologies
description: A component-based framework for building scalable web applications aided by a suite of powerful tools.
tags:
  - angular
quicklinks:
  - name: Angular
    icon: /_nuxt/assets/images/tech/angular/logo-icons/angular.png
    url: https://angular.io/
  - name: Angular.js
    icon: /_nuxt/assets/images/tech/angular/logo-icons/angularjs.svg
    url: https://angularjs.org/
  - name: Karma
    icon: /_nuxt/assets/images/tech/angular/logo-icons/karma.png
    url: https://karma-runner.github.io/latest/index.html
  - name: Jasmine
    icon: /_nuxt/assets/images/tech/angular/logo-icons/jasmine.png
    url: https://jasmine.github.io/
  - name: RxJS
    icon: /_nuxt/assets/images/tech/angular/logo-icons/rxjs.png
    url: https://rxjs.dev/
---

<v-quicklinks :quicklinks="quicklinks"></v-quicklinks>

## Introduction

### What is Angular

Angular is a platform and framework for building SPAs (Single Page Apps) using HTML and TypeScript. There are _two versions_ of Angular, one of which is the earliest version of Angular, Angular 1.x, that is referred as **Angular.js** and Angular 2+ onwards are referred as just **Angular**. Angular.js has reached its EOL as of January 2022 with hopes to existing Angular.js projects to migrate to its successor Angular that is actively maintained.

<div class="table-wrapper">

| Version | Name | Status | Initial Release Date |
| --- | --- | --- | --- |
| 1.x | Angular.js | EOL | Oct 20, 2010 |
| 2.x | Angular 2 | EOL | September 2016 |
| 3.x | Angular 3 | Not released | - |
| 4.x | Angular 4 | EOL | March 2017 |
| 5.x | Angular 5 | EOL | Nov 2017 |
| 6.x | Angular 6 | EOL | May 2018 |
| 7.x | Angular 7 | EOL | Oct 2018 |
| 8.x | Angular 8 | EOL | May 2019 |
| 9.x | Angular 9 | EOL | Feb 2020 |
| 10.x | Angular 10 | EOL | June 2020 |
| 11.x | Angular 11 | EOL | Nov 2020 |
| 12.x | Angular 12 | LTS | May 2021 |
| 13.x | Angular 13 | LTS | Nov 2021 |
| 14.x | Angular 14 | Active | June 2022 |

</div>

Courtesy to James Hartman on [Guru99](https://www.guru99.com/) for this list of release. More details for the release notes for each of the versions can be found [here](https://www.guru99.com/angularjs-1-vs-2-vs-4-vs-5-difference.html).

### Angular CLI

It has a powerful CLI tool that can assist in tasks such as scaffolding a new project, generating files for new components or services, linting and testing.

The CLI can be installed via NPM, PNPM or Yarn globally with their own commands for installing global packages. In this example, NPM is used for demostration.

```
npm i -g @angular/cli
```

After that, Angular commands can be accessed by the `ng` keyword.

```
ng help
```

To create a new project,

```
ng new <project-name>
```

For more information on the available commands and the usual workflow with the cli, visit the [Angular CLI](https://angular.io/cli) page to learn more.

## Links

### UI Frameworks

- [Angular Material](https://material.angular.io/)
- [Onsen UI](https://onsen.io/v2/guide/angular2/)
- [ECharts](https://xieziyu.github.io/ngx-echarts/#/welcome)
