---
title: Laravel
category: Web Technologies
description: A full-stack solution for building web applications of immense size.
tags:
  - laravel
quicklinks:
  - name: Laravel
    icon: /_nuxt/assets/images/tech/laravel/logo-icons/laravel.png
    url: https://laravel.com/
  - name: PHP
    icon: /_nuxt/assets/images/tech/laravel/logo-icons/php.png
    url: https://www.php.net/
  - name: Composer
    icon: /_nuxt/assets/images/tech/laravel/logo-icons/composer.png
    url: https://getcomposer.org/
  - name: XAMPP
    icon: /_nuxt/assets/images/tech/laravel/logo-icons/xampp.png
    url: https://www.apachefriends.org/
  - name: WampServer
    icon: /_nuxt/assets/images/tech/laravel/logo-icons/wamp.png
    url: https://www.wampserver.com/en/
---

<!-- <v-list-links></v-list-links> -->

<v-quicklinks :quicklinks="quicklinks"></v-quicklinks>

## Introduction

### Laravel

Laravel is a web application framework built with PHP that has a very opionionated approach on building applications of enterprise level.

Laravel uses Model-View-Controller (MVC) pattern to build a server side web applications. The model describes data in the database, view is what the end user perceives and controller is the bridge that connects the model and view together.

### UI

Laravel uses blade to render user interfaces. Blade is just a regular HTML file that is preprocessed by PHP codes before rendering the final output.

## Getting Started

### Prerequisites

Both PHP and Composer is required to create and develop Laravel applications.

### Create Project

```
composer create-project laravel/laravel <project-name>
```

### Databases

Laravel uses MySQL as the database by default and this can be changed in the `.env` file.

### Controller

There are some naming conventions used by laravel. A `show` method represents a GET method, `store` method indicates a POST method.

Inside the controller, we can use query builder or Eloquent ORM to interact with database.

## Resources

### Links

- https://devdocs.io/php/
- https://www.php.net/
- https://laravel-news.com/
- https://laravel-livewire.com/
- https://inertiajs.com/
- https://www.youtube.com/watch?v=rIfdg_Ot-LI
