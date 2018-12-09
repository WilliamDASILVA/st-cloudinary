# Cloudinary

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
[![Standard JS][standard-js-src]][standard-js-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]

Embed Cloudinary images easily through our standalone Cloudinary Web Component.
Use this component with any of the following frontend frameworks:

- VueJS
- ReactJS
- Angular
- Natively with Web Component

## 🚀 Getting started

To install this component, you may install it through npm (or yarn):

```bash
npm install st-cloudinary
```

### VueJS

To use this project with VueJS, install the npm dependency.
In your `main.js` file, register the component:

```js
import Vue from 'vue';
import App from './App.vue';
import { defineCustomElements as defineCloudinary } from 'st-cloudinary/dist/loader';

// Ignore the cloudinary component through the VueJS compilation
Vue.config.ignoredElements = ['st-cloudinary'];

defineCloudinary(window)

// ...

new Vue({
  render: h => h(App)
}).$mount('#app');
```

Then in your components, use it like any normal component:

```html
<st-cloudinary
  cloud-name="demo"
  public-id="lady"
  width="200"
  height="200"
  crop="fill"
/>
```

### NuxtJS

To use this component with Nuxt, you can install directly the `nuxt-st-cloudinary-module` to automatically inject
the plugin, plus some fixes related to NuxtJS (see Known issues).

```bash
npm install nuxt-st-cloudinary-module
```

```js
// nuxt.config.js
modules: [
  'nuxt-st-cloudinary-module'
]
```

## 🐛 Known issues

### NuxtJS - Converting circular structure to JSON (toposort dependency)

To fix this issue, ensure all your dependencies are up to date.
If it does not fix the issue, remove the chunk sorting in our Nuxt configuration.
This is NOT required if you are using the `nuxt-st-cloudinary-module` since it automatically add this fix for you.

```js
build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        for (let plugin of config.plugins) {
          if (plugin.constructor.name === 'HtmlWebpackPlugin') {
            plugin.options = Object.assign(plugin.options, { chunksSortMode: 'none' })
          }
        }
      }
    }
  }
```

## 🤓 Development

You are interested in the development of this component? Great!
To get started, fork it and set-up your development environment.

### Running the dev server

```bash
npm install
npm start
```

### Building for production

```bash
npm run build
```

### Running tests

```bash
npm test
```

## 📄 License

This project is under the MIT license

<!-- Badges -->
[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
[npm-version-src]: https://img.shields.io/npm/dt/st-cloudinary.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/st-cloudinary
[npm-downloads-src]: https://img.shields.io/npm/v/st-cloudinary/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/st-cloudinary
