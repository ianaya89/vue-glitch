# vue-glitch

> 👻 Vue.js component to apply glitch effect in any kind of text

![glitch preview](src/assets/preview.gif)


### Install

```bash
$ npm i -S vue-glitch

# or

$ yarn add vue-glitch
```

### Global Use

```javascript
// main.js

import Vue from 'vue';
import VueGlitch from 'vue-glitch';

Vue.use(VueGlitch);
```

```html
<script>
  // Component.vue

  export default {
    name: 'Component',

    data () {
      return {
        text: 'I am glitched!'
      }
    }
  };
</script>

<template>
  <div v-esc="escape"></div>
</template>

```


### Local Use


### Development Setup

```bash
# install dependencies
$ npm install

# dev mode
$ npm run dev

# test
$ npm run test

# build
$ npm run build
```

---
**This project was generated with [yeoman](http://yeoman.io/) and [generator-vue-component](https://github.com/ianaya89/generator-vue-component) :heart:**
