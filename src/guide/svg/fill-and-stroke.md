---
outline: deep
---

# Fill and stroke

`fill` and `stroke` allow us to paint the SVG elements' interior and border. In fact, there are a
lot of attributes related. Let's review the most important.

## fill

The `fill` attribute defines how paints the interior of a specific SVG element. This fill can be a
solid color, a gradient, or a pattern.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <rect x="0" y="0" width="100" height="100" fill="#00D800"/>
</svg>
```
```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
$.svg.add('rect').x(0).y(0).width(100).height(100).fill('#00D800');
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <rect x="0" y="0" width="100" height="100" fill="#00D800"/>
</svg>

## fill-rule

`fill-rule` indicates the mode to be used to fill a shape. The accepted values are `nonzero`, 
`evenodd`, or `inherit` (to take the value specified by its parent).

- `nonzero` determines the "insideness" of a point in the shape by drawing a line from that point to
  infinity in any direction and then examining the places where a segment of the shape crosses the
  line. Starting with a count of zero, add one each time a path segment crosses the ray from left to
  right and subtract one each time a path segment crosses the ray from right to left. After counting
  the crossings, if the result is zero then the point is outside the path. Otherwise, it is inside.

- `evenodd` determines the "insideness" of a point in the shape by drawing a line from that point to
  infinity in any direction and counting the number of path segments from the given shape that the
  line crosses. If this number is odd, the point is inside; if even, the point is outside.

::: code-group
```svg
<svg viewBox="0 0 200 100" width="75" height="75">
  <polygon points="50,0,21,90,98,35,2,35,79,90" fill="#00D800" fill-rule="zero"/>
  <polygon points="150,0,121,90,198,35,102,35,179,90" fill="#00D800" fill-rule="evenodd"/>
</svg>
```
```js
$.svg.viewBox('0 0 200 100').width(150).height(75);
$.svg.add('polygon').points(50,0, 21,90, 98,35, 2,35, 79,90)
     .fill('#00D800').fill_rule('nonzero');
$.svg.add('polygon').points(150,0, 121,90, 198,35, 102,35, 179,90)
     .fill('#00D800').fill_rule('evenodd');
```
:::

<svg viewBox="0 0 200 100" width="75" height="75">
  <polygon points="50,0,21,90,98,35,2,35,79,90" fill="#00D800" fill-rule="zero"/>
  <polygon points="150,0,121,90,198,35,102,35,179,90" fill="#00D800" fill-rule="evenodd"/>
</svg>

## fill-opacity

`.fill-opacity` defines the opacity level of the interior paint fill. A value 0 results in complete
transparency, the value 1 is no transparency.

::: code-group
```svg
<svg viewBox="0 0 130 100" width="75" height="75">
  <circle cx="40" cy="50" r="40" fill="#00D800" fill-opacity="0.5"/>
  <circle cx="90" cy="50" r="40" fill="#0000D8" fill-opacity="0.5"/>
</svg>
```
```js
$.svg.viewBox('0 0 130 100').width(75).height(75);
$.svg.add('circle').cx(40).cy(50).r(40).fill('#00D800').fill_opacity(0.5);
$.svg.add('circle').cx(90).cy(50).r(40).fill('#0000D8').fill_opacity(0.5);
```
:::

<svg viewBox="0 0 130 100" width="75" height="75">
  <circle cx="40" cy="50" r="40" fill="#00D800" fill-opacity="0.5"/>
  <circle cx="90" cy="50" r="40" fill="#0000D8" fill-opacity="0.5"/>
</svg>

## fill values and style

As with other visual properties, you can use CSS and the `style` for handling `fill` and related
values.

 
::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <circle cx="50" cy="50" r="50" style="fill: #00D800; fill-opacity: 0.5;"/>
</svg>
```
```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
$.svg.add('circle').cx(50).cy(50).r(50).style.fill('#00D800').style.fillOpacity(0.5);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <circle cx="50" cy="50" r="50" style="fill: #00D800; fill-opacity: 0.5;"/>
</svg>

## stroke and stroke-width

`stroke` defines the color border paint of SGV element, and `stroke-width` the border width. This
stroke can be used in combination with `fill`.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <rect x="10" y="10" width="80" height="80" fill="#00D800" stroke="#0000D8" stroke-width="10"/>
</svg>
```
```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
$.svg.add('rect').x(10).y(10).width(80).height(80)
     .fill('#00D800').stroke('#0000D8').stroke_width(10);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <rect x="10" y="10" width="80" height="80" fill="#00D800" stroke="#0000D8" stroke-width="10"/>
</svg>

## stroke-linecap

`stroke-linecap` defines which shape the end of an open path will take and there are four acceptable
values: `butt`, `round`, `square`, `inherit`.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="100" height="100">
  <line x1="10" x2="80" y1="25" y2="25"
        stroke="#0000D8" stroke-width="10" stroke-linecap="butt"/>
  <line x1="10" x2="80" y1="50" y2="50"
        stroke="#0000D8" stroke-width="10" stroke-linecap="round"/>
  <line x1="10" x2="80" y1="75" y2="75"
        stroke="#0000D8" stroke-width="10" stroke-linecap="square"/>
</svg>
```
```js
$.svg.viewBox('0 0 100 100').width(100).height(100);
$.svg.add('line').x1(10).x2(80).y1(25).y2(25)
     .stroke('#0000D8').stroke_width(10).stroke_linecap('butt');
$.svg.add('line').x1(10).x2(80).y1(50).y2(50)
     .stroke('#0000D8').stroke_width(10).stroke_linecap('round');
$.svg.add('line').x1(10).x2(80).y1(75).y2(75)
     .stroke('#0000D8').stroke_width(10).stroke_linecap('square');
```
:::

<svg viewBox="0 0 100 100" width="100" height="100">
  <line x1="10" x2="80" y1="25" y2="25"
        stroke="#0000D8" stroke-width="10" stroke-linecap="butt"/>
  <line x1="10" x2="80" y1="50" y2="50"
        stroke="#0000D8" stroke-width="10" stroke-linecap="round"/>
  <line x1="10" x2="80" y1="75" y2="75"
        stroke="#0000D8" stroke-width="10" stroke-linecap="square"/>
</svg>

## stroke-linejoin and stroke-miterlimit

`stroke-linejoin` defines how the corners of strokes will look on paths and basic shapes.

::: code-group
```svg
<svg viewBox="0 0 230 100" width="170" height="75">
  <polygon points="50,10, 90,90, 10,90" fill="none"
           stroke="#0000D8" stroke-width="10" stroke-linejoin="miter"/>
  <polygon points="70,10, 160,10, 110,90" fill="none"
           stroke="#0000D8" stroke-width="10" stroke-linejoin="round"/>
  <polygon points="180,10, 130,90, 220,90" fill="none"
           stroke="#0000D8" stroke-width="10" stroke-linejoin="bevel"/>
</svg>
```
```js
$.svg.viewBox('0 0 230 100').width(170).height(75);
$.svg.add('polygon').points(50,10, 90,90, 10,90)
     .fill('none').stroke('#0000D8').stroke_width(10).stroke_linejoin('miter');
$.svg.add('polygon').points(70,10, 160,10, 110,90)
     .fill('none').stroke('#0000D8').stroke_width(10).stroke_linejoin('round');
$.svg.add('polygon').points(180,10, 130,90, 220,90)
     .fill('none').stroke('#0000D8').stroke_width(10).stroke_linejoin('bevel');
```
:::

<svg viewBox="0 0 230 100" width="170" height="75">
  <polygon points="50,10, 90,90, 10,90" fill="none"
           stroke="#0000D8" stroke-width="10" stroke-linejoin="miter"/>
  <polygon points="70,10, 160,10, 110,90" fill="none"
           stroke="#0000D8" stroke-width="10" stroke-linejoin="round"/>
  <polygon points="180,10, 130,90, 220,90" fill="none"
           stroke="#0000D8" stroke-width="10" stroke-linejoin="bevel"/>
</svg>

`stroke-linejoin="miter"` work together with `stroke-miterlimit` attribute. This last allows how far
this joint/corner extends. This value is a limit on the ratio of the miter length to the 
`stroke-width`. The minimum value is `1`.

::: code-group
```svg
<svg viewBox="0 0 300 100" width="225" height="75">
  <polygon points="50,10,90,90,50,60,10,90" fill="none" stroke="#0000D8"
           stroke-width="10" stroke-linejoin="miter"/>
  <polygon points="150,10,190,90,150,60,110,90" fill="none" stroke="#0000D8"
           stroke-width="10" stroke-linejoin="miter" stroke-miterlimit="1"/>
  <polygon points="250,10,290,90,250,60,210,90" fill="none" stroke="#0000D8"
           stroke-width="10" stroke-linejoin="miter" stroke-miterlimit="6"/>
</svg>
```
```js
$.svg.viewBox('0 0 300 100').width(225).height(75);
$.svg.add('polygon').points(50,10, 90,90, 50,60, 10,90).fill('none')
     .stroke('#0000D8').stroke_width(10).stroke_linejoin('miter');
$.svg.add('polygon').points(150,10, 190,90, 150,60, 110,90).fill('none')
     .stroke('#0000D8').stroke_width(10).stroke_linejoin('miter').stroke_miterlimit(1);
$.svg.add('polygon').points(250,10, 290,90, 250,60, 210,90).fill('none')
     .stroke('#0000D8').stroke_width(10).stroke_linejoin('miter').stroke_miterlimit(6);
```
:::

<svg viewBox="0 0 300 100" width="225" height="75">
  <polygon points="50,10,90,90,50,60,10,90" fill="none" stroke="#0000D8"
           stroke-width="10" stroke-linejoin="miter"/>
  <polygon points="150,10,190,90,150,60,110,90" fill="none" stroke="#0000D8"
           stroke-width="10" stroke-linejoin="miter" stroke-miterlimit="1"/>
  <polygon points="250,10,290,90,250,60,210,90" fill="none" stroke="#0000D8"
           stroke-width="10" stroke-linejoin="miter" stroke-miterlimit="6"/>
</svg>

## stroke-dasharray

With `stroke-dasharray` you can specify the length of the dash, and the distance between dashes,
rather than solid lines.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <line x1="0" x2="200" y1="50" y2="50" stroke="black" stroke-width="10" 
        stroke-dasharray="10,10,10,10,10,10,20,10,20,10,20"/>
</svg>
```
```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
$.svg.add('line').x1(0).x2(100).y1(50).y2(50).stroke_width(10)
     .stroke_dash(10, 10, 10, 10, 10, 10, 20, 10, 20, 10, 20);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <line x1="0" x2="200" y1="50" y2="50" stroke="black" stroke-width="10" 
        stroke-dasharray="10,10,10,10,10,10,20,10,20,10,20"/>
</svg>

## stroke_dashoffset and stroke-opacity

Use `stroke-dashoffset` to specify the distance at which the dashes should start, and
`stroke_opacity` to define the opacity. 

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <circle cx="50" cy="50" r="40" fill="none"
          stroke="#0000D8" stroke-width="10" stroke-dasharray="62.5" stroke-dashoffset="31"/>
</svg>
```
```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
$.svg.add('circle').cx(50).cy(50).r(40).fill('none')
     .stroke('#0000D8')
     .strokeWidth(10)
     .stroke_dasharray(62.5)
     .stroke_dashoffset(31);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <circle cx="50" cy="50" r="40" fill="none"
          style="stroke: #0000D8; stroke-width: 10; stroke-dasharray: 62.5; stroke-dashoffset: 31;"/>
</svg>


## stroke values and style

As with other SVG visual properties, you can use CSS and the `.style.` members to configure stroke 
values.

::: code-group
```svg
<svg viewBox="0 0 100 100" width="75" height="75">
  <circle cx="50" cy="50" r="40" fill="none" 
     style="stroke:#0000D8; stroke-width:10; stroke-dasharray:31.25; stroke-dashoffset:15.5;"/>
</svg>
```
```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
$.svg.add('circle').cx(50).cy(50).r(40).fill('none')
     .style.stroke('#0000D8')
     .style.strokeWidth(10)
     .style.strokeDasharray(31.25)
     .style.strokeDashoffset(5.5);
```
:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <circle cx="50" cy="50" r="40" fill="none"
          style="stroke: #0000D8; stroke-width: 10; stroke-dasharray: 31.25; stroke-dashoffset:15.5;"/>
</svg>
