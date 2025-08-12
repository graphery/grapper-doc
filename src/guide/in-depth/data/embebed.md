---
outline: deep
---

# Embebed data

The `<script type="data">` composer supports three types of data that can be included directly within its HTML
tag: CSV, JSON and JSON5. The type of format is directly deduced from the content.

- Example using CSV:

  <ClientOnly>
  <g-editor lines-highlight="3-6" keep-format  mode="readonly">
  <textarea><grapper-view>
    <g-script type="data">
      "x";"y";"radix";"color"
      20;20;20;"red"
      45;45;30;"blue"
      n80;80;10;"green"
    </g-script>
  </grapper-view></textarea>
  </g-editor>
  </ClientOnly>

- Example using JSON:

  <ClientOnly>
  <g-editor lines-highlight="3-7" mode="readonly">
  <textarea><grapper-view>
    <g-script type="data">
    [
      {"x": 20, "y": 20, "radix": 20, "color": "red"},
      {"x": 45, "y": 45, "radix": 30, "color": "blue"},
      {"x": 80, "y": 80, "radix": 10, "color": "green"}
    ]
    </g-script>
  </grapper-view></textarea>
  </g-editor>
  </ClientOnly>
  
- Example using JSON5 (a JavaScript object):

  <ClientOnly>
  <g-editor lines-highlight="3-7" mode="readonly">
  <textarea><grapper-view>
    <g-script type="data">
    [
      {x: 20, y: 20, radix: 20, color: "red"},
      {x: 45, y: 45, radix: 30, color: "blue"},
      {x: 80, y: 80, radix: 10, color: "green"},
    ]
    </g-script>
  </grapper-view></textarea>
  </g-editor>
  </ClientOnly>

::: warning
In some environments the `script type="data` has conflicts. In these cases, you can 
use alternatively `<g-script type="data"></g-script>`.

<ClientOnly>
<g-editor options="g-script: true" lines-highlight="2" mode="readonly">
<textarea><grapper-view>
  <g-script type="data">
    ...
  </g-script>
</grapper-view></textarea>
</g-editor>
</ClientOnly>

:::

