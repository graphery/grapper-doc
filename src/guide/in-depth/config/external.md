---
outline: deep
---

# Load Configuration as External Resource

In production environments or when you want to share the configuration in serval components,
the `<script type="config">`with the `src` attribute makes it straightforward to indicate the source
of the functions.

<ClientOnly>
<grapper-view id="config-02" style="width:50%">
  <svg g-bind:viewBox="[0, 0, $.config.width, $.config.height]">
    <g g-for="(record, n) of data">
      <rect g-bind:x="n * ($.config.width / (data.length + 1))"
            g-bind:y="$.config.height - ($.config.height * record.value / data.$max('value'))"
            g-bind:height="$.config.height * record.value / data.$max('value')"
            g-bind:width="$.config.width / (data.length + 1)"
            g-bind:fill="$.config.colors[n]"/>
    </g>
  </svg>
  <g-script type="data">[
    {name: "A", value: 10},
    {name: "B", value: 32},
    {name: "C", value: 24},
    {name: "E", value: 5},
    {name: "F", value: 17},
  ]</g-script>
  <g-script type="config" src="/config/general.json"></g-script>
</grapper-view>
<g-editor href="#config-02" lines-highlight="24"></g-editor>
</ClientOnly>


It is possible to directly include the `config-src` properties within the `grapper-view` component
itself, simplifying the overall code structure by eliminating the `script` tag.

<ClientOnly>
<g-editor lines-highlight="4" keep-format  mode="readonly">
<textarea><grapper-view 
  svg-src="/svg/circle.svg" 
  methods-src="/methods/circle.js"
  config-src="/config/config.json">
</grapper-view></textarea>
</g-editor>
</ClientOnly>


