---
outline: deep
next:
  text: 'Load'
  link: '/guide/starter/load'
---

# Starter Guide

Grapper is a free and open-source **data visualization web component** designed as a micro-framework
to facilitate the **creation of custom, dynamic and interactive visualizations**. Grapper offers
flexibility in designs, allowing creators to make unique aesthetic visualizations that are far
from becoming monotonous charts seen everywhere.

Grapper is composed of:

- [**A web component**](./composer.md) for combining:
  - [**SVG template**](./template.md) with directives.
  - [**Data**](./data.md) in JSON or CSV formats.
  - [**Methods**](./methods.md), optionally, to handle interactivity and data transformation.

This is a basic example:

<ClientOnly>
  <grapper-view id="example-starter">
    <svg viewBox="0 0 200 100" width="200px" height="100px">
      <g stroke-width="12" stroke-linecap="round">
        <g g-for="(record, index) of data"> 
          <line x1="22" 
                g-bind:x2="record.value" 
                g-bind:y1="index * 20 + 30" 
                g-bind:y2="index * 20 + 30" 
                g-bind:stroke="record.color"/>
      </g>
      </g>
    </svg>
    <g-script type="data">
      [
        { color: "#D80000", value: 130 },
        { color: "#00D800", value: 170 },
        { color: "#0000D8", value: 100 },
      ]
    </g-script>
  </grapper-view>
  <g-editor href="#example-starter" title="very basic example"></g-editor>
</ClientOnly>

Grapper is based on SVG and directives, defining a **declarative way** to build **data-driven**
graphics. This approach allows centering the effort on the design in a very natural form. Designers
and developers achieve technical efficiency and gain the means to communicate their data story to
their audience effectively.

In addition, Grapper has a **smooth rendering** and **optimal performance** with a
**tiny overhead**. It is not just a tool but a complete system that includes specially designed
mechanisms to update the visualization efficiently when data are changed. This feature allows
Grapper to maintain high runtime performance without the need for pre-compilation processes.
