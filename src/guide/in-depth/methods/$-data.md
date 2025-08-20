---
outline: deep
---

# `$.data`

You can use `$.data` in the methods to access the data object of the `grapper-view` component. In this
way, it is possible to add, modify or query data. Through reactivity, when a value is added or
modified, the template is re-evaluated, and the visualization is updated, without you having to do
anything else.

<ClientOnly>
<grapper-view>
  <svg viewBox="0 0 200 140" width="400" g-on:init="init">
    <text x="0" y="118" style="font-size: 8px">colors:</text>
    <rect g-on:click="change" x="35" y="110" width="10" height="10"
          style="cursor: pointer; stroke: rgb(0, 0, 0); fill: rgb(216, 0, 0)"><title>only red</title></rect>
    <rect g-on:click="change" x="55" y="110" width="10" height="10"
          style="cursor: pointer; stroke: rgb(0, 0, 0); fill: rgb(0, 216, 0)"><title>only green</title></rect>
    <rect g-on:click="change" x="75" y="110" width="10" height="10"
          style="cursor: pointer; stroke: rgb(0, 0, 0); fill: rgb(0, 0, 216)"><title>only blue</title></rect>
    <g g-for="row of data">
      <circle g-bind:cx="row.x" g-bind:cy="row.y" r="3" g-bind:fill="row.color"/>
    </g>
  </svg>
  <g-script type="methods">
    const options = ['rgb(216, 0, 0)', 'rgb(0, 216, 0)', 'rgb(0, 0, 216)'];
    function init() {
      $.data = Array(100).fill('').map(function (_, idx) {
        return ({   
          x : ((idx % 10) * 10) + 3 + (Math.random() * 5), 
          y : ((Math.floor(idx / 10) % 10) * 10) + 3 + (Math.random() * 5),
        });
      });
      colors();
    }
    function colors() {
      $.data.forEach((record, idx) => {
        record.color = options[idx % options.length] || 'inherit';
      });
    }
    function change () {
      if (this.style.stroke() === 'inherit') {
        this.style.stroke('rgb(0, 0, 0)');
        options.push(this.style.fill());
      } else {
        this.style.stroke('inherit');
        options.splice(options.indexOf(this.style.fill()), 1);
      }
      colors();
    }
  </g-script>
</grapper-view>
<g-editor href="grapper-view" lines-highlight="48;59"></g-editor>
</ClientOnly>