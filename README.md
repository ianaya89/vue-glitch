# vue-glitch

> 👻 Vue.js component to apply glitch effect in any kind of text

![glitch preview](src/assets/preview.gif)


## Install

```bash
$ npm i -S vue-glitch

# or

$ yarn add vue-glitch
```

## Global Registration

```javascript
// main.js

import Vue from 'vue';
import Glitch from 'vue-glitch';

Vue.component('glitch', Glitch);
```

## Local Registration

```html
<script>
  // Component.vue
  import Glitch from 'vue-glitch';

  export default {
    name: 'Component',

    components: { Glitch }
  };
</script>
```

## Component Usage

```html
<template>
  <main>
    <glitch text="I am glitched"></glitch>
    <glitch text="I am glitched with custom color", color="tomato"></glitch>
    <glitch text="I am glitched with custom background", background="steelblue"></glitch>
  </main>
</template>
```

## Component Properties

| name | required | default |
| :---: | :---: | :---: |
| text | `true` |  |
| color | `false` | `#fff` |
| background | `false` | `#000` |


## Styling
> To apply custom styles you should care about `.glitch` and `.glitch-wrapper` classes.

```css
.glitch {
  margin-bottom: 20px;
  padding: 20px;
  font-size: 40px;
}

.glitch-wrapper {
  font-family: sans-serif;
}
```


## Development Setup

```bash
# install dependencies
$ npm i

# dev mode
$ npm run dev

# test
$ npm run test

# build
$ npm run build
```

---
**This project was generated with [generator-vue-component](https://github.com/ianaya89/generator-vue-component)**
**⌨️ with ❤️ by [@ianaya89](https://twitter.com/ianaya89)**
