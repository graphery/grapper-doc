---
outline: deep
---

# Lists Rendering

The `g-for` directive is a powerful feature in Grapper that allows you to render a block of SVG
elements multiple times based on an array or an object's properties. It provides a convenient way to
iterate over data and dynamically generate content in your templates.

## `g-for`

The `g-for` directive creates each array element by cloning the content element.

<ClientOnly>
<grapper-view id="list-1" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <g g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:style="{fill: value.color}"/>
    </g>
  </svg>
  <g-script type="data">[
    {x: 20, y: 20, radix: 20, color: "red"},
    {x: 45, y: 45, radix: 30, color: "blue"},
    {x: 80, y: 80, radix: 10, color: "green"}
  ]</g-script>
</grapper-view>
<g-editor href="#list-1" lines-highlight="4"></g-editor>
</ClientOnly>

## Each array data 

`"item of data"` is the directive expression. It specifies the iteration and defines a
variable (`item` in this example) to represent each element iterating the array.

You can also access the index of the current iteration by using an optional second parameter in the
`g-for` syntax:

<ClientOnly>
<grapper-view id="list-2" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <g g-for="(value, idx) of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:style="{fill: value.color}"/>
      <text dominant-baseline="middle"
            text-anchor="middle"
            font-size="10"
            fill="white"
            g-bind:x="value.x"
            g-bind:y="value.y"
            g-content="idx"></text>
    </g>
  </svg>
  <g-script type="data">[
    {x: 20, y: 20, radix: 20, color: "red"},
    {x: 45, y: 45, radix: 30, color: "blue"},
    {x: 80, y: 80, radix: 10, color: "green"}
  ]</g-script>
</grapper-view>
<g-editor href="#list-2" lines-highlight="4;18"></g-editor>
</ClientOnly>

## Each object property

`"prop in obj"` is the directive expression. It specifies the iteration and defines a
variable (`prop` in this example) to represent each property value into the object.

You can also access the key by using an optional second parameter in the `g-for` syntax:

<ClientOnly>
<grapper-view id="list-3" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <g g-for="(value, key) in data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:style="{fill: value.color}"/>
      <text dominant-baseline="middle"
            text-anchor="middle"
            font-size="10"
            fill="white"
            g-bind:x="value.x"
            g-bind:y="value.y"
            g-content="key"></text>
    </g>
  </svg>
  <g-script type="data">{
    a: {x: 20, y: 20, radix: 20, color: "red"},
    b: {x: 45, y: 45, radix: 30, color: "blue"},
    d: {x: 80, y: 80, radix: 10, color: "green"}
  }</g-script>
</grapper-view>
<g-editor href="#list-3" lines-highlight="4;18"></g-editor>
</ClientOnly>

## Destructuring

You can use the JavaScript destructuring assignment syntax for unpack properties from objects into 
distinct variables. 

<ClientOnly>
<grapper-view id="list-4" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <g g-for="({x, y, radix, color}, idx) of data">
      <circle g-bind:cx="x"
              g-bind:cy="y"
              g-bind:r="radix"
              g-bind:style="{fill: color}"/>
      <text dominant-baseline="middle"
            text-anchor="middle"
            font-size="10"
            fill="white"
            g-bind:x="x"
            g-bind:y="y"
            g-content="idx"></text>
    </g>
  </svg>
  <g-script type="data">[
    {x: 20, y: 20, radix: 20, color: "red"},
    {x: 45, y: 45, radix: 30, color: "blue"},
    {x: 80, y: 80, radix: 10, color: "green"}
  ]</g-script>
</grapper-view>
<g-editor href="#list-4" lines-highlight="4;6-9;16-17"></g-editor>
</ClientOnly>

## Range number

Additionally, `g-for` supports the iteration over a range of numbers with `n of number`.
This example will render 10 circle elements starting with 0:

<ClientOnly>
<grapper-view id="list-5" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <g g-for="n of 10">
      <circle g-bind:cx="(n + 1) * 9" g-bind:cy="(n + 1) * 9" r="5"/>
      <text font-size="7" fill="white" text-anchor="middle" dominant-baseline="middle" g-bind:x="(n + 1) * 9" g-bind:y="(n + 1) * 9" g-content="n"></text>
    </g>
  </svg>
</grapper-view>
<g-editor href="#list-5" lines-highlight="4"></g-editor>
</ClientOnly>

Additionally, `g-for` supports the iteration over a range of numbers with `n in number`.
This example will render 10 circle elements starting with 1:

<ClientOnly>
<grapper-view id="list-6" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <g g-for="n in 10">
      <circle g-bind:cx="n * 9" g-bind:cy="n * 9" r="5"/>
      <text font-size="7" fill="white" text-anchor="middle" dominant-baseline="middle" g-bind:x="n * 9" g-bind:y="n * 9" g-content="n"></text>
    </g>
  </svg>
</grapper-view>
<g-editor href="#list-6" lines-highlight="4"></g-editor>
</ClientOnly>