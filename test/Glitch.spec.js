/* globals describe it expect */

import Vue from 'vue'
import jsdom from 'jsdom'
import GlitchComponent from '../src/Glitch.vue'

const renderer = require('vue-server-renderer').createRenderer()

const text = 'I am a glitch message'
const ClonedComponent = Vue.extend(GlitchComponent)

describe('Glitch Component', () => {
  it('should creates a glitch and glitch-wrapper divs ', () => {
    const NewComponent = new ClonedComponent({ propsData: { text } }).$mount()

    renderer.renderToString(NewComponent, (err, str) => {
      if (err) { throw err }

      const dom = new jsdom.JSDOM(str)
      const glitch = dom.window.document.querySelector('div.glitch')
      const glitchWrapper = dom.window.document.querySelector('div.glitch-wrapper')

      expect.anything(glitchWrapper)
      expect.anything(glitch)
    })
  })

  it('should set text property as glitch div inner text', () => {
    const NewComponent = new ClonedComponent({ propsData: { text } }).$mount()

    renderer.renderToString(NewComponent, (err, str) => {
      if (err) { throw err }

      const dom = new jsdom.JSDOM(str)
      const glitch = dom.window.document.querySelector('.glitch')

      expect(glitch.textContent).toEqual(text)
    })
  })

  it('should set color and background properties and apply inline styles in glitch div', () => {
    const color = 'red'
    const background = 'yellow'

    const NewComponent = new ClonedComponent({ propsData: { text, color, background } }).$mount()

    renderer.renderToString(NewComponent, (err, str) => {
      if (err) { throw err }

      const dom = new jsdom.JSDOM(str)
      const glitch = dom.window.document.querySelector('.glitch')

      expect(glitch.style.color).toEqual(color)
      expect(glitch.style.background).toEqual(background)
    })
  })
})
