<template lang="pug">
  main
    h1 # vue-glitch
      br
      small > Vue.js component to apply glitch effect in any kind of text.

    glitch(text="I am glitched")
    glitch(text="I am glitched with custom color", color="tomato")
    glitch(text="I am glitched with custom background", background="steelblue")

    div
      h3 ### Component Usage
      pre
        code(v-text="sourcecode1")
      pre
        code(v-text="sourcecode2")
      pre
        code(v-text="sourcecode3")

    div
      h3 ### Component Properties
      table
        thead
          tr
            th name
            th required
            th default
        tbody
          tr
            td text
            td true
            td N/A
          tr
            td color
            td false
            td #fff
          tr
            td background
            td false
            td #000
          tr

    div
      h3 ### Component Styling
      p > To apply custom styles you should care about&nbsp;
        code .glitch
        | &nbsp;and&nbsp;
        code .glitch-wrapper
        | &nbsp;classes.

    footer(style="color: #fff; margin-top: 50px;")
      p You can find more information in &nbsp;
        a(href="https://github.com/ianaya89/vue-glitch") component repository.
      p ⌨️ with ❤️ by&nbsp;
        a(href="http://twitter.com/ianaya89", style="color: steelblue") ianaya89
</template>

<script>
  import Glitch from '../src/Glitch.vue'

  export default {
    name: 'App',
    components: { Glitch },

    data () {
      return {
        sourcecode1: '<glitch text="I am glitched"></glitch>',
        sourcecode2: '<glitch text="I am glitched with custom color", color="tomato"></glitch>',
        sourcecode3: '<glitch text="I am glitched with custom background", background="steelblue"></glitch>'
      }
    }
  }
</script>

<style lang="scss">
  $cello: #47484b;

  h1 {
    font-size: 50px;
    small {
      font-size: 25px;
    }
  }

  h3 {
    font-size: 30px;
  }

  .glitch {
    margin-bottom: 20px;
    padding: 20px;
    font-size: 40px;
  }

  body {
    align-items: center;
    background: $cello;
    color: #62B486;
    font-family: courier;
    box-sizing: border-box;
    text-align: center;
  }

  table {
    margin: auto;
    padding: 10px;
    border-collapse: collapse;

    td {
      border: 1px dotted #fff;
      padding: 20px;
    }

    th {
      border: 1px dotted #fff;
      color: #fff;
      padding: 20px;
      font-weight: bold;
    }
  }

  pre {
    margin-bottom: 40px;
  }

  code {
    padding: 10px;
    line-height: 40px;
    border-radius: 5px;
    background: #3d3d3d;
    color: #f3f3fe;
  }
</style>
