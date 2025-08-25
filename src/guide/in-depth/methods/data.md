---
outline: deep
---

# `function data()`

As described in the section on data, if we name a function `data` it will have a special behavior
and will be called every time the data is modified. This function will receive the original data and
should return the transformed data. 

You can include a `function data()` in the methods to perform filter and transformation of data
before the template evaluation.

<ClientOnly>
<div id="data-1">
<grapper-view data="percentage: 50" style="width:100px">
  <svg viewBox="0 0 100 130">
    <g g-for="n of spokes">
      <line x1="50" y1="0" x2="50" y2="50"
            stroke-width="4" stroke="red"
            g-bind:transform="$.rotate((360 / spokes) * n, 50, 50)"/>
    </g>
    <text x="50" y="115" font-size="12"
          dominant-baseline="middle" text-anchor="middle"
          g-content="`${ percentage } % (${ spokes } spokes)`"></text>
  </svg>
  <g-script type="methods">
    function data(original) {
      const spokes = Math.floor(original.percentage / 100 * 25);
      return { ...original, spokes };
    }
  </g-script>
</grapper-view>
<p>
<label>percentage:
  <input type="range" min="0" max="100" step="1" value="50"
         oninput="document.querySelector('grapper-view').data.percentage = this.value">
</label></p>
</div>
<g-editor href="#data-1" lines-highlight="26-29"></g-editor>
</ClientOnly>