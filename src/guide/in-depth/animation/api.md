---
outline: deep
---

# Animation  API

Into the Grapper methods we can use `.animateTo()` for every SVG elements. This method accepts as
parameter an object with attributes as keys and the target values.

Optionally, we can include a transition duration in milliseconds as a second parameter. By default,
the animation duration is 200 milliseconds. If you pass a time value `0`, the change is executed
immediately, and the animation is not displayed.

<ClientOnly>
<grapper-view id="animation-api-1">
  <svg viewBox="0 0 200 100" width="200" height="100">
    <g stroke-width="12" stroke-linecap="round" stroke="#C0C0C0" >
      <line id="lineR" x1="10" x2="10" y1="10" y2="10"/>
      <line id="lineG" x1="10" x2="10" y1="30" y2="30"/>
      <line id="lineB" x1="10" x2="10" y1="50" y2="50"/>
    </g>
    <g id="run" style="cursor: pointer; font-size: 15px;" g-on:click="show">
       <rect x="0" y="70" width="50" height="30" fill="#C0F8C0"/>
       <text x="8" y="90">show</text>
    </g>
    <g id="run" style="cursor: pointer; font-size: 15px;" g-on:click="hide">
       <rect x="60" y="70" width="50" height="30" fill="#F8C0C0"/>
       <text x="72" y="90">hide</text>
    </g>
  </svg>
  <g-script type="methods">
    const lineR = $.svg.querySelector('#lineR');
    const lineG = $.svg.querySelector('#lineG');
    const lineB = $.svg.querySelector('#lineB');
    function show() {
       lineR.animateTo({stroke : '#D80000', x2 : 130}, 1000);
       lineG.animateTo({stroke : '#00D800', x2 : 180}, 1000);
       lineB.animateTo({stroke : '#0000D8', x2 : 100}, 1000);
    }
    function hide() {
       lineR.animateTo({stroke : '#C0C0C0', x2 : 10}, 1000);
       lineG.animateTo({stroke : '#C0C0C0', x2 : 10}, 1000);
       lineB.animateTo({stroke : '#C0C0C0', x2 : 10}, 1000);
    }
  </g-script>
</grapper-view>
<g-editor href="#animation-api-1" lines-highlight="24-26;29-31"></g-editor>
</ClientOnly>

### Keyframes

If we want to define several intermediate steps within an animation, we can pass an array of objects
with each step we want the animation to perform.

Additionally, we can include an `offset` key with values between `0` and `1` to indicate when we
want each step to be set.

<ClientOnly>
<grapper-view id="animation-api-2">
  <svg viewBox="0 0 100 100" width="100" height="100" g-on:click="run" style="cursor:pointer">
    <rect x="0" y="0" width="40" height="40" fill="violet"/>
    <text x="20" y="55" font-size="14">click to run</text>
  </svg>
  <g-script type="methods">
    function run() {
      $.svg.querySelector('rect').animateTo(
        [
          {x: 0,  y: 0,  width: 40, height: 40},
          {x: 90, y: 0,  width: 10, height: 10},
          {x: 60, y: 60, width: 40, height: 40},
          {x: 0,  y: 90, width: 10, height: 10},
          {x: 0,  y: 0,  width: 40, height: 40}
        ],
        2000
      );
    }
  </g-script>
</grapper-view>
<g-editor href="#animation-api-2" lines-highlight="16-25"></g-editor>
</ClientOnly>

