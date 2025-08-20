---
outline: deep
---

# `$$.dynamic()` with `g-bind`

Grapper Template Engine provides a very simple for of animation in collaboration with the
`g-bind` directive. When you use `$$.dynamic()` into the `g-bind` expression and the value is applied
progressively and show an animation.

The syntax is: `g-bind:attribute="$$.dynamic(<value> [, <duration>] [, <delay>])`.

<ClientOnly>
<grapper-view id="dynamic-1" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <circle fill="red"
            cx="50"
            cy="50"
            g-bind:r="$$.dynamic(radius, 4000)"/>
    <text x="50"
          y="50"
          font-size="10"
          dominant-baseline="middle"
          text-anchor="middle"
          style="cursor: pointer"
          g-on:click="change()">
      click
    </text>
  </svg>
  <g-script type="data">
    {radius: 50}
  </g-script>
  <g-script type="methods">
    function change() {
      $.data.radius = $.data.radius > 0 ? 0 : 50; 
    }
  </g-script>
</grapper-view>
<g-editor href="#dynamic-1" lines-highlight="8"></g-editor>
</ClientOnly>

### `<value>`

Any value applicable to the attribute we want to update progressively is accepted. You can use any
valid expression for calculated values.

### `<duration>`

By default, the animation duration is 200ms. You can change this behavior passing a second parameter
to `$$.dynamic()` function.

### `<delay>`

By default, the animation duration starts immediately. You can change this behavior passing a third
parameter to `$$.dynamic()` function in milliseconds.

## Keyframes as values

You can pass an array of values to describe non-linear progressing.

<ClientOnly>
<grapper-view id="dynamic-2" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <circle cx="50"
            cy="50"
            fill="red"
            g-bind:r="$$.dynamic([radius * 0.1, 
                              radius * 0.5, 
                              radius * 0.9, 
                              radius * 0.7, 
                              radius], 2000)"/>
  </svg>
  <g-script type="data">
    {radius: 50}
  </g-script>
</grapper-view>
<p>
  <button onclick="document.querySelector('#dynamic-2').update()">
   click to run the animation
  </button>
</p>
<g-editor href="#dynamic-2" lines-highlight="8-12"></g-editor>
</ClientOnly>

Optionally, you can pass an object with `value` and `offset` (with values from 0 to 1) to have more
control over the execution of the animation.

<ClientOnly>
<grapper-view id="dynamic-3" style="width: 200px">
  <svg viewBox="0 0 100 100">
    <circle cx="50"
            cy="50"
            fill="red"
            g-bind:r="$$.dynamic([{value: 0,            offset: 0},
                                  {value: radius,       offset: 0.8},
                                  {value: radius * 0.9, offset: 0.9},
                                  {value: radius,       offset: 1}], 2000)"/>
  </svg>
  <g-script type="data">
    {radius: 50}
  </g-script>
</grapper-view>
<p>
  <button onclick="document.querySelector('#dynamic-3').update()">
   click to run the animation
  </button>
</p>
<g-editor href="#dynamic-3" lines-highlight="8-12"></g-editor>
</ClientOnly>

