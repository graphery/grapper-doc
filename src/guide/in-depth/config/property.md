---
outline: deep
---

# `.config` property

You can access and manipulate the configurate from `.config` property of the `grapper-view`. As a
result, you can use the data function to calculate configuration values and simplify the template.

<ClientOnly>
<grapper-view id="config-03" style="width:50%">
  <svg g-bind:viewBox="[0, 0, $.config.width, $.config.height]">
    <g g-for="(record, n) of data">
      <rect g-bind:x="n * $.config.elementWidth"
            g-bind:y="$.config.height - ($.config.height * record.value / data.$max('value'))"
            g-bind:height="$.config.height * record.value / data.$max('value')"
            g-bind:width="$.config.elementWidth"
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
  <g-script type="methods">
    function data (target) {
      $.config.elementWidth = $.config.width / (target.length + 1);
      return target;
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
<g-editor href="#config-03" lines-highlight="26"></g-editor>
</ClientOnly>
