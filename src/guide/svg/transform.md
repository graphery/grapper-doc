---
outline: deep
---

# Transform

The `transform` attribute defines a group of transformations on an element or group of elements.
With these transformations, we can scale, rotate, move or deform the SVG elements. `transform`
receive a list of pseudo-functions with parameters separated by space. With this pseudo-function, we
define how we want to transform the graph.

### In Grapper

In SVG Grapper API we can use `.transform` with methods such as `.scale()` or `.translate()`
and build the transformation step by step with these helpers. All these methods return
the `.transform` object. And, as a result, you can chain the calls of them.


## scale()

`scale()` transformation resizes the SVG element. This parameter accepts one or two values with the
horizontal and vertical scaling amounts. If one of them is omitted, both values (`x` and `y`) take
the same. These measures are a multiple of the original value, so `0.5` reduces the size by half,
and `2` doubles the original size.

::: code-group

```svg
<svg viewBox="0,0,150,75" width="150" height="75">
    <defs>
        <circle cx="5" cy="10" r="4" fill="red" id="circle1"/>
    </defs>
    <use href="#circle1" x="4" transform="scale(1)"/>
    <use href="#circle1" x="8" transform="scale(2)"/>
    <use href="#circle1" x="12" transform="scale(3)"/>
    <use href="#circle1" x="16" transform="scale(4)"/>
    <use href="#circle1" x="20" transform="scale(5)"/>
</svg>
```

```js
$.svg.viewBox(0, 0, 150, 75).width(150).height(75);
const defs = $.svg.add('defs');
const dot  = defs.add('circle').cx(5).cy(10).r(4).fill('red');
for (let n = 1; n <= 5; n++) {
  $.svg.add('use').href(dot.ref()).x(n * 4).transform(`scale(${ n })`);
}
```

:::

<svg viewBox="0,0,150,75" width="150" height="75">
  <defs>
    <circle cx="5" cy="10" r="4" fill="red" id="circle1"/>
  </defs>
  <use href="#circle1" x="4" transform="scale(1)"/>
  <use href="#circle1" x="8" transform="scale(2)"/>
  <use href="#circle1" x="12" transform="scale(3)"/>
  <use href="#circle1" x="16" transform="scale(4)"/>
  <use href="#circle1" x="20" transform="scale(5)"/>
</svg>


It's important to understand the effect of `scale()` on the shape. The scaling process change
shape's size, position, and stroke. `x`, `x1`, `x2`, `cx`, and `width` are affected by the `x` scale
factor, and  `y`, `y1`, `y2`, `cy`,and `height` are affected by `y` scale factor. Other attributes,
as `r`, `stroke-width` are affected too by the `x` scale factor.

::: code-group

```svg
<svg viewBox="0,0,100,100" width="100" height="100">
    <rect x="10" y="10" width="10" height="10" stroke-width="1" stroke="blue" fill="none"/>
    <rect x="10" y="10" width="10" height="10" stroke-width="1" stroke="blue" fill="none"
          transform="scale(4)"/>
</svg>
```

```js
$.svg.viewBox(0, 0, 100, 100).width(100).height(100);
const rect = $.svg.add('rect').x(10).y(10).width(10).height(10)
                  .stroke_width(1).stroke('blue').fill('none');
rect.cloneNode().transform('scale(4)').attachTo(svg);
```

:::

<svg viewBox="0,0,100,100" width="100" height="100">
  <rect x="10" y="10" width="10" height="10" stroke-width="1" stroke="blue" fill="none"/>
  <rect x="10" y="10" width="10" height="10" stroke-width="1" stroke="blue" fill="none"
        transform="scale(4)"/>
</svg>

## translate()

`translate()` transformation moving a shape and accept two numerical values (`x` and `y`) separated
by a whitespace or comma. As a result, the shape or group is moved along both the `x` and `y` axis.
If the `y` is omitted, a `0` is assumed as value.

::: code-group

```svg
<svg viewBox="0,0,102,102" width="100" height="100">
    <rect x="1" y="1" width="50" height="50" stroke-width="1" stroke="blue" fill="none"/>
    <rect x="1" y="1" width="50" height="50" stroke-width="1" stroke="blue" fill="none"
          transform="translate(50, 50)"/>
</svg>
```

```js
$.svg.viewBox(0, 0, 102, 102).width(100).height(100);
const rect = $.svg.add('rect').x(1).y(1).width(50).height(50)
                  .stroke_width(1).stroke('blue').fill('none');
rect.cloneNode().transform('translate(50, 50)').attachTo(svg);
```

:::

<svg viewBox="0,0,102,102" width="100" height="100">
  <rect x="1" y="1" width="50" height="50" stroke-width="1" stroke="blue" fill="none"/>
  <rect x="1" y="1" width="50" height="50" stroke-width="1" stroke="blue" fill="none"
        transform="translate(50, 50)"/>
</svg>

## rotate()

`rotate()` will specify in degrees the shape's or group's rotation at its point of origin (`x` and
`y`). You can include a `x` and `y` values after the angle (separated by a whitespace) and establish
a new rotation's center (default values are `0` and `0`).

::: code-group

```svg
<svg viewBox="0,0,102,102" width="100" height="100">
    <rect x="25" y="25" width="50" height="50" stroke-width="1" stroke="blue" fill="none"/>
    <rect x="25" y="25" width="50" height="50" stroke-width="1" stroke="blue" fill="none"
          transform="rotate(15, 50, 50)"/>
    <rect x="25" y="25" width="50" height="50" stroke-width="1" stroke="blue" fill="none"
          transform="rotate(30, 50, 50)"/>
    <rect x="25" y="25" width="50" height="50" stroke-width="1" stroke="blue" fill="none"
          transform="rotate(45, 50, 50)"/>
    <rect x="25" y="25" width="50" height="50" stroke-width="1" stroke="blue" fill="none"
          transform="rotate(60, 50, 50)"/>
    <rect x="25" y="25" width="50" height="50" stroke-width="1" stroke="blue" fill="none"
          transform="rotate(75, 50, 50)"/>
</svg>
```

```js
$.svg.viewBox(0, 0, 102, 102).width(100).height(100);
const rect = $.svg.add('rect').x(25).y(25).width(50).height(50)
                  .stroke_width(1).stroke('blue').fill('none');
rect.cloneNode().transform('rotate(15, 50, 50)').attachTo(svg);
rect.cloneNode().transform('rotate(30, 50, 50)').attachTo(svg);
rect.cloneNode().transform('rotate(45, 50, 50)').attachTo(svg);
rect.cloneNode().transform('rotate(60, 50, 50)').attachTo(svg);
rect.cloneNode().transform('rotate(75, 50, 50)').attachTo(svg);
```

:::

<svg viewBox="0,0,102,102" width="100" height="100">
  <rect x="25" y="25" width="50" height="50" stroke-width="1" stroke="blue" fill="none"/>
  <rect x="25" y="25" width="50" height="50" stroke-width="1" stroke="blue" fill="none"
        transform="rotate(15, 50, 50)"/>
  <rect x="25" y="25" width="50" height="50" stroke-width="1" stroke="blue" fill="none"
        transform="rotate(30, 50, 50)"/>
  <rect x="25" y="25" width="50" height="50" stroke-width="1" stroke="blue" fill="none"
        transform="rotate(45, 50, 50)"/>
  <rect x="25" y="25" width="50" height="50" stroke-width="1" stroke="blue" fill="none"
        transform="rotate(60, 50, 50)"/>
  <rect x="25" y="25" width="50" height="50" stroke-width="1" stroke="blue" fill="none"
        transform="rotate(75, 50, 50)"/>
</svg>

## skewX() and skewY()

The elements can be skewed or made crooked using  `skewX()` and `skewY ()` transformation with a
degree value than represents a skew transformation.

::: code-group

```svg
<svg viewBox="0,0,300,150" width="300" height="150">
    <g transform="translate(2,2)">
        <rect x="0" y="0" width="90" height="90" stroke-width="1" fill="grey"/>
        <rect x="0" y="0" width="90" height="90" stroke-width="1" fill="rgba(0,0,255,0.5)"
              transform="skewX(20)"/>
        <text x="0" y="110" transform="skewX(20)">skewX(20)</text>
    </g>
    <g transform="translate(150,2)">
        <rect x="0" y="0" width="90" height="90" stroke-width="1" fill="grey"/>
        <rect x="0" y="0" width="90" height="90" stroke-width="1" fill="rgba(0,0,255,0.5)"
              transform="skewY(20)"/>
        <text x="0" y="110" transform="skewY(20)">skewY(20)</text>
    </g>
</svg>
```

```js
$.svg.viewBox(0, 0, 300, 150).width(300).height(150);
const group1 = $.svg.add('g').transform('translate(2,2)');
group1.add('rect').x(0).y(0).width(90).height(90).stroke_width(1).fill('grey');
group1.add('rect').x(0).y(0).width(90).height(90).stroke_width(1).fill('rgba(0,0,255,0.5)')
      .transform('skewX(20)');
group1.add('text').x(0).y(110).content('skewX(20)').transform('skewX(20)');
const group2 = $.svg.add('g').transform('translate(150,2)');
group2.add('rect').x(0).y(0).width(90).height(90).stroke_width(1).fill('grey');
group2.add('rect').x(0).y(0).width(90).height(90).stroke_width(1).fill('rgba(0,0,255,0.5)')
      .transform('skewY(20)');
group2.add('text').x(0).y(110).content('skewY(20)').transform('skewY(20)');
```

:::

<svg viewBox="0,0,300,150" width="300" height="150">
  <g transform="translate(2,2)">
    <rect x="0" y="0" width="90" height="90" stroke-width="1" fill="grey"/>
    <rect x="0" y="0" width="90" height="90" stroke-width="1" fill="rgba(0,0,255,0.5)"
          transform="skewX(20)"/>
    <text x="0" y="110" transform="skewX(20)">skewX(20)</text>
  </g>
  <g transform="translate(150,2)">
    <rect x="0" y="0" width="90" height="90" stroke-width="1" fill="grey"/>
    <rect x="0" y="0" width="90" height="90" stroke-width="1" fill="rgba(0,0,255,0.5)"
          transform="skewY(20)"/>
    <text x="0" y="110" transform="skewY(20)">skewY(20)</text>
  </g>
</svg>

## matrix()

All previous transformation can be described as a `matrix()` transform. This matrix transform
receive six values as `matrix(a b c d e f)` and is equivalent to applying this transformation
matrix:

```txt
a c e
b d f
0 0 1
```

This is the transformation step by step:

1) We have a rectangle with these values:

```js
x      = 10
y      = 10
width  = 30
height = 20
```

2) We obtain these X and Y points:

```js
topLeftX = x              // 10         
topLeftY = y              // 10       

topRightX = x + width     // 10 + 30 = 40  
topRightY = y             // 10          

bottomLeftX = x           // 10          
bottomLeftY = y + height  // 10 + 20 = 30 

bottomRightX = x + width  // 10 + 30 = 40  
bottomRightY = y + height // 10 + 20 = 30 
```

3) When we apply this transform function:

```js
rect.transform('matrix(3 1 1 3 -20 -30');
```

the matrix values are:

```js
a = 3, c =   1, e =  30,
b = 3, d = -20, f = -30
```

4) As a result, these operations are executed:

```js
newTopLeftX     = (topLeftX * a) + (topLeftY * c) + e          // 10
newTopLeftY     = (topLeftX * b) + (topLeftY * d) + f          // 30

newTopRightX    = (topRightX * a) + (topRightY * c) + e        // 40
newTopRightY    = (topRightX * b) + (topRightY * d) + f        // 30

newBottomLeftX  = (bottomLeftX * a) + (bottomLeftY * c) + e    // 20
newBottomLeftY  = (bottomLeftX * b) + (bottomLeftY * d) + f    // 10

newBottomRightX = (bottomRightX * a) + (bottomRightY * c) + e  // 110
newBottomRightY = (bottomRightX * b) + (bottomRightY * d) + f  // 40
```

In practice, all these operations are performed internally, and it is very simple to apply a
`matrix()` transformation:

::: code-group
```svg
<svg viewBox="0,0,200,200" width="200" height="200">
  <rect x="10" y="10" width="30" height="20" fill="grey"/>
  <rect x="10" y="10" width="30" height="20" fill="rgba(0,0,255,0.5)" 
        transform="matrix(3 1 1 3 -20 -30)"/>
</svg>
```
```js
$.svg.viewBox(0, 0, 200, 200).width(200).height(200);
$.svg.add('rect').x(10).y(10).width(30).height(20).fill('grey');
$.svg.add('rect').x(10).y(10).width(30).height(20).fill('rgba(0,0,255,0.5)')
     .transform('matrix(3 1 1 3 -20 -30)');
```
:::

<svg viewBox="0,0,200,200" width="200" height="200">
  <rect x="10" y="10" width="30" height="20" fill="grey"/>
  <rect x="10" y="10" width="30" height="20" fill="rgba(0,0,255,0.5)" 
        transform="matrix(3 1 1 3 -20 -30)"/>
</svg>
