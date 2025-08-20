---
outline: deep
---

# Basic shapes

## Rectangles

The `rect` creates an element that shows a rectangle.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <rect x="10" y="10" width="90" height="90"/>
</svg>
```
```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const rect = $.svg.add('rect')
                  .x(10).y(10).width(90).height(90);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <rect x="10" y="10" width="90" height="90"/>
</svg>


`width` and `height` establish the size of the rectangle. `x` and `y` move the shape 
to the appropriate position. All these values are related to the dimensions defined into the 
`viewBox`.

`fill` sets the interior color for the shape. It defaults to black when left unspecified.

`stroke` sets the border color and `stroke-width` the width of this border.

 
::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <rect x="10" y="10" width="80" height="80" 
        fill="#00D800" stroke="#0000D8" stroke-width="5"/>
</svg>
```
```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const rect = $.svg.add('rect')
                  .x(10).y(10).width(80).height(80)
                  .fill('#00D800').stroke('#0000D8').stroke_width(5);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <rect x="10" y="10" width="80" height="80" 
        fill="#00D800" stroke="#0000D8" stroke-width="5"/>
</svg>

It is also possible to create rounded corners by specifying values within `rx` and `ry`.

 
::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <rect x="10" y="10" width="80" height="80" rx="20" ry="20"
        fill="#00D800" stroke="#0000D8" stroke-width="5"/>
</svg>
```
```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const rect = $.svg.add('rect')
                  .x(10).y(10).width(80).height(80).rx(20).ry(20)
                  .fill('#00D800').stroke('#0000D8').stroke_width(5);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <rect x="10" y="10" width="80" height="80" rx="20" ry="20"
        fill="#00D800" stroke="#0000D8" stroke-width="5"/>
</svg>


## Circle

`circle` creates a circle defined with a center point (`cx` and `cy`) and an
outer radius (`r`).  All these values are according to the dimensions defined in the
`viewBox`

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
    <circle cx="50" cy="50" r="50"/>
</svg>
```
```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const circle = $.svg.add('circle')
                    .cx(50).cy(50).r(50);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
    <circle cx="50" cy="50" r="50"/>
</svg>

`fill` sets the interior color for the circle; `stroke` sets the circle border color and
`stroke-width` the border width.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <circle cx="50" cy="50" r="45" 
          fill="#00D800" stroke="#0000D8" stroke-width="5"/>
</svg>
```
```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const circle = $.svg.add('circle')
                    .cx(50).cy(50).r(45)
                    .fill('#00D800').stroke('#0000D8').stroke_width(5);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <circle cx="50" cy="50" r="45" 
          fill="#00D800" stroke="#0000D8" stroke-width="5"/>
</svg>


## Ellipse

`ellipse` creates an ellipse that's defined with a center point (`cx` and `cy`) and two radios (`rx`
and `ry`). All these values are according to the dimensions defined in the `viewBox`.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <ellipse cx="50" cy="50" rx="50" ry="30"/>
</svg>
```
```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const ellipse = $.svg.add('ellipse')
                     .cx(50).cy(50).rx(50).ry(30);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <ellipse cx="50" cy="50" rx="50" ry="30"/>
</svg>


`fill` sets the ellipse's interior color. `stroke` sets its border color and `stroke-width` its
border width.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
    <ellipse cx="50" cy="50" rx="40" ry="30" 
             fill="#00D800" stroke="#0000D8" stroke-width="5"/>
</svg>
```
```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const ellipse = $.svg.add('ellipse')
                     .cx(50).cy(50).rx(40).ry(30).fill('#D80000')
                     .fill('#00D800').stroke('#0000D8').stroke_width(5);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
    <ellipse cx="50" cy="50" rx="40" ry="30" 
             fill="#00D800" stroke="#0000D8" stroke-width="5"/>
</svg>


## Line

`line` defines a straight line with a starting point (`x1` and `y1`) and ending point
(`x2` and `y2`) define all values as dimension into the `viewBox`.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <line x1="10" y1="10" x2="90" y2="90" stroke="#0000D8"/>
</svg>
```
```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const line = $.svg.add('line')
                  .x1(10).y1(10).x2(90).y2(90).stroke('#0000D8');
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <line x1="10" y1="10" x2="90" y2="90" stroke="#0000D8"/>
</svg>

In this case `stroke` is a mandatory attribute and must be defined into the element or its
parents. Of course, it's possible to define the line width using `stroke-width`.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <line x1="10" y1="10" x2="90" y2="90" 
        stroke="#0000D8" stroke-width="5"/>
</svg>
```
```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const line = $.svg.add('line')
                  .x1(10).y1(10).x2(90).y2(90)
                  .stroke('#0000D8').stroke_width(5);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <line x1="10" y1="10" x2="90" y2="90" 
        stroke="#0000D8" stroke-width="5"/>
</svg>

Another very useful attribute is `stroke-linecap`. This attribute defines the end line style with
these values:

- `butt`  indicates that the stroke for each side does not extend beyond its two endpoints. It is
  the default value.
- `round` value indicates that at the end of each side the stroke will be extended by a half-circle
  with a diameter equal to the stroke width.
- `square` indicates that at the end of each side the stroke will be extended by a
  rectangle.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <line x1="10" y1="10" x2="90" y2="10" 
        stroke="#0000D8" stroke-width="10" />
  <line x1="10" y1="35" x2="90" y2="35" 
        stroke="#0000D8" stroke-width="10"  stroke-linecap="butt"/>
  <line x1="10" y1="60" x2="90" y2="60" 
        stroke="#0000D8" stroke-width="10"  stroke-linecap="round"/>
  <line x1="10" y1="85" x2="90" y2="85" 
        stroke="#0000D8" stroke-width="10"  stroke-linecap="square"/>
</svg>
```
```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
$.svg.add('line').x1(10).y1(10).x2(90).y2(10)
                 .stroke('#0000D8').stroke_width(10);
$.svg.add('line').x1(10).y1(35).x2(90).y2(35)
                 .stroke('#0000D8').stroke_width(10).stroke_linecap('butt');
$.svg.add('line').x1(10).y1(60).x2(90).y2(60)
                 .stroke('#0000D8').stroke_width(10).stroke_linecap('round');
$.svg.add('line').x1(10).y1(85).x2(90).y2(85)
                 .stroke('#0000D8').stroke_width(10).stroke_linecap('square');
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <line x1="10" y1="10" x2="90" y2="10" 
        stroke="#0000D8" stroke-width="10"/>
  <line x1="10" y1="35" x2="90" y2="35" 
        stroke="#0000D8" stroke-width="10" stroke-linecap="butt"/>
  <line x1="10" y1="60" x2="90" y2="60" 
        stroke="#0000D8" stroke-width="10" stroke-linecap="round"/>
  <line x1="10" y1="85" x2="90" y2="85" 
        stroke="#0000D8" stroke-width="10" stroke-linecap="square"/>
</svg>


## Polyline

`polyline` creates a set of connected straight line segments, generally resulting in an
open shape (with disconnected starting and ending points). The line is defined by `points`,
which receives a group of pairs `x, y`.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <polyline points="10,0,20,80,40,20,60,60,70,40,80,50"
            fill="none" stroke="#0000D8" stroke-width="5">
  </polyline>
</svg>
```
```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
$.svg.add('polyline').points([[10,0], [20,80], [40,20], [60,60], [70,40], [80,50]])
                     .fill('none').stroke('#0000D8').stroke_width(5);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <polyline points="10,0,20,80,40,20,60,60,70,40,80,50"
            fill="none" stroke="#0000D8" stroke-width="5">
  </polyline>
</svg>

Usually this shape is defined with `fill="none"`, and configure only with `stroke` and 
`stroke-width` values.

## Polygon

`polygon` defines a closed shape consisting of connected lines. The points of the polygon
shape are defined by `points` through a group of pairs `x, y` values.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <polygon points="50,0,60,40,100,50,60,60,50,100,40,60,0,50,40,40"/>
</svg>
```
```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
$.svg.add('polygon').points([[50,0], [60,40], [100,50], [60,60], [50,100], [40,60], [0,50], [40,40]]);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <polygon points="50,0,60,40,100,50,60,60,50,100,40,60,0,50,40,40"/>
</svg>

In other cases, `fill` sets the polygon interior color, `stroke` sets its border color
and `stroke-width` its border width.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <polygon points="50,0,60,40,100,50,60,60,50,100,40,60,0,50,40,40" 
           fill="#00D800" stroke="#0000D8" stroke-width="5"/>
</svg>
```
```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
$.svg.add('polygon').points([[50,0], [60,40], [100,50], [60,60], [50,100], [40,60], [0,50], [40,40]])
                    .fill('#00D800').stroke('#0000D8').stroke_width(5);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <polygon points="50,0,60,40,100,50,60,60,50,100,40,60,0,50,40,40" 
           fill="#00D800" stroke="#0000D8" stroke-width="5"/>
</svg>


