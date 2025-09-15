---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Data Dynamics Visualization

hero:
  name: Grapper
  tagline: A modern & powerful way <br/>for great data visualization
  actions:
    - theme: brand
      text: Starter Guide
      link: /quick-guide
    - theme: alt
      text: Examples
      link: https://playground.grapper.io/gallery/

features:
  - title: Declarative Syntax
    details: Easily create and manage powerful graphs using intuitive templating directives, reducing the learning curve and increasing productivity.
    icon:
      src: /img/icons/declarative.svg
      alt: declarative
  - title: Reactive Data Binding
    details: The rendering engine automatically updates graphics when data changes, ensuring perfect synchronization between data and visuals.
    icon:
      src: /img/icons/reactive.svg
      alt: reactive
  - title: Full Control
    details: Access and customize any visual element at a low level, while still benefiting from high-level abstractions.
    icon:
      src: /img/icons/control.svg
      alt: control
  - title: Open Source
    details: Free and standards-based web components for easy integration with plain HTML and modern frameworks. Fully open to the community.
    icon:
      src: /img/icons/opensource.svg
      alt: open source
  - title: Performance Optimized
    details: Efficient rendering algorithms and element reuse ensure smooth interactions and fast performance even with complex datasets.
    icon:
      src: /img/icons/performance.svg
      alt: performance
  - title: Lightweight Core
    details: Designed as a microframework with a minimal footprint, Grapper delivers powerful features in a tiny package (12 kB gzipped).
    icon:
      src: /img/icons/lightweight.svg
      alt: lightweight
---

## Very simple example

<ClientOnly>
  <g-editor href="#horizontal-bars" title="horizontal bars"></g-editor>
  <grapper-view id="horizontal-bars">
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