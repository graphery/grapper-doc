---
outline: deep
---

# Gradients and Patterns

In addition to plain colors, the SVGs can use gradients and patterns to fill shapes. This allows for
great freedom when building graphic designs. Usually, these elements are created within the
`defs`, although it is unnecessary to place them there. We can use them for `fill` and `stroke`
values with gradients and patterns unique id reference.

## Gradients

### Linear Gradients

`linearGradient` changes color uniformly along a straight line based on each of the color points 
(`stop`) and the transition between them. By default, the gradient is from left to right; if you
need another angle (for example, 45 degrees), you can use `gradientTransform="rotate(45)"`.

The `stop` element is defined with an `offset` than receive a percentage, and `.stop-color` and 
`stop-opacity` for define the color reference for that point. 

::: code-group
```svg
<svg viewBox="0,0,100,100" width="100" height="100">
  <defs>
    <linearGradient gradientTransform="rotate(45)" id="sun">
      <stop offset="5%" stop-color="gold"/>
      <stop offset="95%" stop-color="red"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#sun)"/>
</svg>
```
```js
gySVG ().viewBox (0, 0, 100, 100).width(100).height(100);
const defs     = $.svg.add ('defs');
const gradient = defs.add ('linearGradient').gradientTransform ('rotate(45)');
gradient.add ('stop').offset ('5%').stop_color ('gold');
gradient.add ('stop').offset ('95%').stop_color ('red');

const circle = $.svg.add ('circle').cx (50).cy (50).r (50).fill (gradient.url ());
```
:::

<svg viewBox="0,0,100,100" width="100" height="100">
  <defs>
    <linearGradient gradientTransform="rotate(45)" id="sun">
      <stop offset="5%" stop-color="gold"/>
      <stop offset="95%" stop-color="red"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#sun)"/>
</svg>

### Radial Gradients

`radialGradient` is very similar to `linearGradient`, but in this case, the coordinates for the 
gradient are different, now is circular, from the center to the edge.

::: code-group
```svg
<svg viewBox="0,0,100,100" width="100" height="100">
  <defs>
    <radialGradient id="gySVGObjectbr7ijfp4igg">
      <stop offset="5%" stop-color="gold"/>
      <stop offset="95%" stop-color="red"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#gySVGObjectbr7ijfp4igg)"/>
</svg>
```
```js
$.svg.viewBox(0, 0, 100, 100).width(100).height(100);
const defs     = $.svg.add('defs');
const gradient = defs.add('radialGradient');
gradient.add('stop').offset('5%').stop_color('gold');
gradient.add('stop').offset('95%').stop_color('red');
const circle = $.svg.add('circle').cx(50).cy(50).r(50).fill(gradient.url());
```
:::

<svg viewBox="0,0,100,100" width="100" height="100">
  <defs>
    <radialGradient id="moon">
      <stop offset="5%" stop-color="white"/>
      <stop offset="95%" stop-color="grey"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="50" fill="url(#moon"/>
</svg>


## Patterns

`pattern`  defines a graphics object which can be redrawn on intervals into the $.svg. It has its
own `viewBox` bound reference, and its size is defined by `width` and `height`. The behaviour of
width and height depends on `patternUnits` configuration (by default is `'objectBoundingBox'`),
but we usually need to configure it as `'userSpaceOnUse'`. With this configuration, height and width
are references to the element's coordinate system that uses the `pattern`.

::: code-group
```svg
<svg viewBox="0,0,100,100" width="100" height="100">
  <defs>
    <pattern viewBox="0,0,10,10" patternUnits="userSpaceOnUse" width="10" height="10" id="cell">
      <circle cx="5" cy="5" r="4" fill="none" stroke-width="1" stroke="red"/>
    </pattern>
  </defs>
  <circle cx="50" cy="50" r="48" fill="url(#cell)" stroke="red" stroke-width="1"/>
</svg>
```
```js
gySVG ().viewBox (0, 0, 100, 100).width (100).height (100);
const defs    = $.svg.add ('defs');
const pattern = defs.add ('pattern').viewBox(0,0,10,10)
                    .patternUnits('userSpaceOnUse').width(10).height(10);
pattern.add('circle').cx(5).cy(5).r(4).fill('none').stroke_width(1).stroke('red');

const circle = $.svg.add ('circle').cx (50).cy (50).r (48)
  .fill (pattern.url ())
  .stroke('red').stroke_width(1);
```
:::

<svg viewBox="0,0,100,100" width="100" height="100">
  <defs>
    <pattern viewBox="0,0,10,10" patternUnits="userSpaceOnUse" width="10" height="10" id="cell">
      <circle cx="5" cy="5" r="4" fill="none" stroke-width="1" stroke="red"/>
    </pattern>
  </defs>
  <circle cx="50" cy="50" r="48" fill="url(#cell)" stroke="red" stroke-width="1"/>
</svg>
