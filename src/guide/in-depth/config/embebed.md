---
outline: deep
---

# Embebed configuration

Grapper allow defining the data visualization configuration into `<script type="config">` with
formats JSON or JSON5. 

<ClientOnly>
<grapper-view style="width: 50%" id="config-01">
  <svg g-bind:viewBox="[0, 0, $.config.width, $.config.height]">
    <g g-for="(record, n) of data">
      <rect g-bind:x="n * ($.config.width / (data.length + 1))"
            g-bind:y="$.config.height - ($.config.height * record.value / data.$max('value'))"
            g-bind:height="$.config.height * record.value / data.$max('value')"
            g-bind:width="$.config.width / (data.length + 1)"
            g-bind:fill="$.config.colors[n]"/>
    </g>
  </svg>
  <g-script type="config">
  {
    height: 50,
    width : 100,
    colors: ['#638475', '#7fb069', '#d36135',  '#ece4b7', '#e6aa68']
  }
  </g-script>
  <g-script type="data">[
    {name: "A", value: 10},
    {name: "B", value: 32},
    {name: "C", value: 24},
    {name: "E", value: 5},
    {name: "F", value: 17},
  ]</g-script>
</grapper-view>
<g-editor href="#config-01" lines-highlight="25-29"></g-editor>
</ClientOnly>

As you can see, the configuration is accessible from the template with `$.config`.