// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme-without-fonts'
import './style.css'
import './custom.css'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots0
      'home-hero-image': () => h('div', { class: 'home-hero-welcome' }, [
        h('grapper-welcome'),
      ]),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
