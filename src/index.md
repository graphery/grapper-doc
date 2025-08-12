---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Home

hero:
  image: '/img/logo/g.svg'
  name: grapper
  tagline: data visualization microframework
  actions:
    - theme: brand
      text: Starter Guide
      link: /guide/starter/
    - theme: alt
      text: Examples
      link: https://playground.grapper.dev/gallery/@grapper

features:
  - title: Declarative Syntax
    details: Easily create and manage powerful graphs using intuitive templating directives, reducing the learning curve and increasing productivity.
  - title: Data Binding
    details: The rendering engine detects and applies changes to the graphical representation, ensuring seamless updates that stay in sync with your data.
  - title: Powerful and Open
    details: Create any type of data-driven graphic, with low-level access to all visual elements without limitations.
  - title: Seamless Integration
    details: Built with web components, it integrates smoothly with plain HTML and popular Javascript frameworks.
  - title: Performance Optimization
    details: Optimized for performance, the solution includes efficient rendering algorithms and element reuse for fast, effective rendering.
  - title: Tiny size
    details: Designed as a microframework with a minimal footprint, it ensures a quick and smooth download experience.
---

## Simple example

```html
<grapper-view>
  <svg viewBox="0 0 200 100" width="200px" height="100px">
    <g stroke-width="12" stroke-linecap="round">
      <g g-for="(record, index) of data">
        <line  x1="22"
              :x2="record.value"
              :y1="index * 20 + 30"
              :y2="index * 20 + 30"
              :stroke="record.color"
        ></line>
      </g>
    </g>
  </svg>
  <script type="data">
    [
      {"color": "#D80000", "value": 130},
      {"color": "#00D800", "value": 170},
      {"color": "#0000D8", "value": 100}
    ]
  </script>
</grapper-view>
```

<ClientOnly>
  <grapper-view>
    <svg viewBox="0 0 200 100" width="200px" height="100px">
    <g stroke-width="12" stroke-linecap="round">
      <g g-for="(record, index) of data">
          <line        x1="22" 
                g-bind:x2="record.value"   
                g-bind:y1="index * 20 + 30"
                g-bind:y2="index * 20 + 30"
                g-bind:stroke="record.color"
          ></line>
      </g>
    </g>
    </svg>
    <g-script type="data">
    [
      {"color": "#D80000", "value": 130},
      {"color": "#00D800", "value": 170},
      {"color": "#0000D8", "value": 100}
    ]
    </g-script>
  </grapper-view>
</ClientOnly>