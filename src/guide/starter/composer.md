---
outline: deep
---

# Grapper View

Grapper is based on the custom tag `<grapper-view></grapper-view>`. 
This web component is the main element of Grapper and everything happens inside it. 
We will include the other elements in a nested way.

<ClientOnly>
  <div style="display: none">
    <grapper-view id="scafolding">
      <template></template>
      <g-script type="data"></g-script>
      <g-script type="methods"></g-script>
    </grapper-view>
  </div>
  <g-editor href="#scafolding" mode="readonly" highlight-lines="2-4"></g-editor>
</ClientOnly>

The component `grapper-view` can include:

| name                        | description                                                                           | tag                     |
|-----------------------------|---------------------------------------------------------------------------------------|-------------------------|
| [template](template.md) | defines the SVG powered by directives                                                 | `<template></template>` |
| [data](data.md) | data in format CSV, JSON or JSON5                                                     | `<script type="data"></script>` |
| [methods](methods.md) | Optionally, can include Javascript functions to manage events and data transformation | `<script type="methods"></script>` |

::: details Using external resources instead including the code in the component

In all our examples we will include the code directly inside `grapper-view`. 
In practice, we can create separate files for each of the elements and link them by the attributes:

- The `svg-src` attribute specifies the path to the SVG template.
- The `data-src` attribute indicates the location of the data source.
- The `methods-src` attribute indicates the location of methods.

<ClientOnly>
<div style="display:none" id="external-resources">
  <grapper-view 
    svg-src="../../svg/circles.svg"
    data-src="../../data/circles.json"
    methods-src="../../methods/circles.js"></grapper-view>
</div>
<g-editor href="#external-resources" mode="readonly"></g-editor>
</ClientOnly>

:::