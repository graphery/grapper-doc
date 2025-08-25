---
outline: deep
---

# Helpers

For some cases, Grapper offers helper functions to simplify the construction of the values accepted
by the SVG attribute. These helpers are available in the `$` object, accessible from the `g-bind`
and `g-content` expressions:

## `g-bind`

- `$.element` refers to the wrapper of the element where the `g-bind` directive has been included. 
  With this reference it is possible to query other attributes of the element such as 
  `$.element.x()` or `$.element.stroke()`.

- `$.attribute` is the name of the attribute in which the `g-bind` directive has been included.

- `$.currentValue()` returns the current value of the property that has the `g-bind` directive. 
  It is useful when we need to know the value of the property before modifying it. If the attribute
  is `class` returns and array of strings. If the attribute is `style` returns an object with `key` 
  and  `value`.

## `g-bind:transform`

The transform attribute values are converted in helper functions. You can use these helpers to 
build the transformation. You can combine the helpers, as `$.translate(10,10).rotate(45)`.

- `$.translate(<x>, [<y>)` moves the object by `x` and `y`, if `y` is not provided, it is assumed to
  be `0`.

- `$.scale(<x>, [<y>])` specifies a scale operation by `x` and `y`, if `y` is not provided, it is
  assumed to be equal to `x`.

- `$.rotate(<a>, [<x>, <y>])` define a rotation by a degrees `a` about a given point (`x` and `y`),
  if `x` and `y` are not supplied, the rotation is about the origin coordinate system.

- `$.skewX(<a>)` and `$.skewY(<a>)` specify a skew transformation along the `x` and `y` axis
  by `a` degrees.

- `$.matrix(<a>, <b>, <c>, <d>, <e>, <f>)` modify the form by a transformation matrix.

Example:

<ClientOnly>
<grapper-view id="helpers-1" style="width: 100px">
  <svg viewBox="0 0 100 100">
    <path fill="none" stroke="#D80000" stroke-width="2" 
      d="M42.5,4.35L55,26L42.5,47.65L17.5,47.65L5,26L17.5,4.35Z"/>
    <path fill="none" stroke="#00D800" stroke-width="2" 
      d="M42.5,4.35L55,26L42.5,47.65L17.5,47.65L5,26L17.5,4.35Z"
      g-bind:transform="$.translate(41,24)"/>
    <path fill="none" stroke="#0000D8" stroke-width="2" 
      d="M42.5,4.35L55,26L42.5,47.65L17.5,47.65L5,26L17.5,4.35Z"
      g-bind:transform="$.translate(0,48).rotate(60,30,26)"/>
  </svg>
</grapper-view>
<g-editor href="#helpers-1"></g-editor>
</ClientOnly>

## `g-bind:d` in `path`

Constructing the `d` attribute of a `path` in SVG may seem complicated, but it is a series of
relatively simple instructions. Grapper offers a series of helpers to construct the value of `d`
step by step, chaining the different functions.

- `M(<x>, <y>)` `m(<x>, <y>)` move to absolute and relative point.
- `Z()` `z()` close path.
- `L(<x>, <y>)` `l(<x>, <y>)` line to absolute and relative point.
- `H(<x>)` `h(<x>)` horizontal line to absolute and relative `x` point.
- `V(<y>)` `v(<y>)` vertical line to absolute and relative `y`point.
- `C(<x1>, <y1>, <x2>, <y2>, <x>, <y>)` `c(<x1>, <y1>, <x2>, <y2>, <x>, <y>)` absolute and relative
  cubic Bézier curve.
- `S(<x1>, <y1>, <x2>, <y2>)` `s(<x1>, <y1>, <x2>, <y2>)` absolute and relative smooth cubic Bézier
  curve.
- `Q(<x1>, <y1>, <x>, <y>)` `q(<x1>, <y1>, <x>, <y>)` absolute and relative quadratic Bézier curve.
- `T(<x>, <y>)` `t(<x>, <y>)` absolute and relative smooth quadratic Bézier curve.
- `A(<rx>, <ry>, <rot>, <arc-flag>, <sweep-flag>, <x>, <y>)`
  `a(<rx>, <ry>, <rot>, <arc-flag>, <sweep-flag>, <x>, <y>)`
  absolute and relative arc curve.

Example:

<ClientOnly>
<grapper-view id="helpers-2" style="width: 100px">
  <svg viewBox="0 0 100 100">
    <path fill="none" stroke="#D80000" stroke-width="2" 
      g-bind:d="$.M(42.5,4.35).L(55,26).L(42.5,47.65).L(17.5,47.65).L(5,26).L(17.5,4.35).Z()"/>
    <path fill="none" stroke="#00D800" stroke-width="2" 
      g-bind:d="$.M(83.5,28.35).L(96,50).L(83.5,71.65).L(58.5,71.65).L(46,50).L(58.5,28.35).Z()"/>
    <path fill="none" stroke="#0000D8" stroke-width="2" 
      g-bind:d="$.M(42.5,52.35).L(55,74).L(42.5,95.65).L(17.5,95.65).L(5,74).L(17.5,52.35).Z()"/>
  </svg>
</grapper-view>
<g-editor href="#helpers-2"></g-editor>
</ClientOnly>

### `:d="$.arc(cx, cy, r, grades, [start = 0] )"`

Creates an arc (section of the circumference) based on a center (`cx` and `cy`), a radius (`r`),
positive or negative number of grades (`grades`), and optionally a start angle (in degrees).

Parameters:

- `cx`        - center x
- `cy`        - center y
- `r`         - radius
- `grades`    - grades in degrees
- `start`     - start position in degrees (optional, default value `0`)

<ClientOnly>
<grapper-view data="grades: 90, start: 0" id="arc">
  <svg viewBox="0 0 100 100" width="200" height="200">
    <path stroke="black" stroke-width="1" fill="none" 
          g-bind:d="$.arc(50, 50, 48, grades, start)"/>
  </svg>
</grapper-view>
<p>
  <label>grades:
    <input id="arcGradesRange" type="range" min="-360" max="360" value="90"
           oninput="document.querySelector('#arc').data.grades = document.querySelector('#arcGradesNumber').value = Number(this.value)">
    <input id="arcGradesNumber" type="number" min="-360" max="360" value="90"
           oninput="document.querySelector('#arc').data.grades = document.querySelector('#arcGradesRange').value = Number(this.value)">
</label>
</p>
<p>
  <label>start: 
    <input id="arcStartRange" type="range" min="-360" max="360" value="0"
           oninput="document.querySelector('#arc').data.start = document.querySelector('#arcStartNumber').value = Number(this.value)">
    <input id="arcStartNumber" type="number" min="-360" max="360" value="0"
           oninput="document.querySelector('#arc').data.start = document.querySelector('#arcStartRange').value = Number(this.value)">
  </label>
</p>
<g-editor href="#arc"></g-editor>
</ClientOnly>

### `:d="$.barArc(cx, cy, r, width, grades, [start = 0] )"`

Creates a bar with arc form (section of the circumference) based on a center (`cx` and `cy`), a
radius (`r`), and width (`width`), positive or negative number of grades (`grades`), and optionally
a start angle (in degrees).

Parameters:

- `cx`        - center x
- `cy`        - center y
- `r`         - radius
- `width`     - bar width
- `grades`    - grades in degrees
- `start`     - start position in degrees (optional, default value `0`)

<ClientOnly>
<grapper-view data="grades: 90, start: 0" id="barArc">
  <svg viewBox="0 0 100 100" width="200" height="200">
    <path stroke="black" stroke-width="1" fill="none" 
          g-bind:d="$.barArc(50, 50, 40, 10, grades, start)"/>
  </svg>
</grapper-view>
<p>
  <label>grades:
    <input id="barGradesRange" type="range" min="-360" max="360" value="90"
           oninput="document.querySelector('#barArc').data.grades = document.querySelector('#barGradesNumber').value = Number(this.value)">
    <input id="barGradesNumber" type="number" min="-360" max="360" value="90"
           oninput="document.querySelector('#barArc').data.grades = document.querySelector('#barGradesRange').value = Number(this.value)">
</label>
</p>
<p>
  <label>start: 
    <input id="barStartRange" type="range" min="-360" max="360" value="0"
           oninput="document.querySelector('#barArc').data.start = document.querySelector('#barStartNumber').value = Number(this.value)">
    <input id="barStartNumber" type="number" min="-360" max="360" value="0"
           oninput="document.querySelector('#barArc').data.start = document.querySelector('#barStartRange').value = Number(this.value)">
  </label>
</p>
<g-editor href="#barArc"></g-editor>
</ClientOnly>

### `:d="$.circleSlice(cx, cy, r, grades, [start = 0] )"`

Creates a circle slice (section of the circle) based on a center (`cx` and `cy`), a radius
(`r`), positive or negative number of grades (`grades`), and optionally a start angle (in degrees).

Parameters:

- `cx`        - center x
- `cy`        - center y
- `r`         - radius
- `grades`    - grades in degrees
- `start`     - start position in degrees (optional, default value `0`)

<ClientOnly>
<grapper-view data="grades: 90, start: 0" id="circleSlice">
  <svg viewBox="0 0 100 100" width="200" height="200">
    <path stroke="black" stroke-width="1" fill="none" 
          g-bind:d="$.circleSlice(50, 50, 40, grades, start)"/>
  </svg>
</grapper-view>
<p>
  <label>grades:
    <input id="sliceGradesRange" type="range" min="-360" max="360" value="90"
           oninput="document.querySelector('#circleSlice').data.grades = document.querySelector('#sliceGradesNumber').value = Number(this.value)">
    <input id="sliceGradesNumber" type="number" min="-360" max="360" value="90"
           oninput="document.querySelector('#circleSlice').data.grades = document.querySelector('#sliceGradesRange').value = Number(this.value)">
</label>
</p>
<p>
  <label>start: 
    <input id="sliceStartRange" type="range" min="-360" max="360" value="0"
           oninput="document.querySelector('#circleSlice').data.start = document.querySelector('#sliceStartNumber').value = Number(this.value)">
    <input id="sliceStartNumber" type="number" min="-360" max="360" value="0"
           oninput="document.querySelector('#circleSlice').data.start = document.querySelector('#sliceStartRange').value = Number(this.value)">
  </label>
</p>
<g-editor href="#circleSlice"></g-editor>
</ClientOnly>


## `g-content`

The `g-content` directive has two helpers:

- `$.element` refers to the wrapper of the element where the `g-conten` directive has been included.
  With this reference it is possible to query attributes of the element such as `$.element.x()` or 
  `$.element.stroke()` for conditional content.

- `$.currentContent()` returns the content of the element. It can be useful to add elements instead
  of replacing them or to check the content before modifying it.

- `$.fromURL()` gets an external resource via a URL and inserts it as element content.