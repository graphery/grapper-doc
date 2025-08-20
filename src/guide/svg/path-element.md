---
outline: deep
---

# Path element

With `path` an SVG shape is created. All the basic shapes can be created with a path element, but it
is normally just used for more complex shapes.

As in other cases, the attributes `fill` sets the interior color, `stroke` sets its border color
and `stroke-width` its border width.

The path information is described in `d` attribute with special commands describes with a letter
and groups of points:

::: code-group

```svg
<svg viewBox="0 0 512 512" width="75" height="75">
    <path d="M462,62c-54,-46,-136,-38,-186,13l-19,20,-19,-20c-50,-51,-131,-60,-186,-13
           c-62,53,-66,149,-9,207l193,199c12,12,32,12,45,0l193,-199c54,-55,52,-154,-13,-207Z"
          fill="#00D800">
    </path>
</svg>
```

```js
$.svg.viewBox('0 0 512 512').width(75).height(75);
const path = $.svg.add('path')
              .d.M(462, 62)
              .c(-54, -46, -136, -38, -186, 13)
              .l(-19, 20, -19, -20)
              .c(-50, -51, -131, -60, -186, -13)
              .c(-62, 53, -66, 149, -9, 207)
              .l(193, 199)
              .c(12, 12, 32, 12, 45, 0)
              .l(193, -199)
              .c(54, -55, 52, -154, -13, -207)
              .Z();
path.fill('#00D800');
```

:::

<svg viewBox="0 0 512 512" width="75" height="75">
  <path d="M462,62c-54,-46,-136,-38,-186,13l-19,20,-19,-20c-50,-51,-131,-60,-186,-13
           c-62,53,-66,149,-9,207l193,199c12,12,32,12,45,0l193,-199c54,-55,52,-154,-13,-207Z" 
        fill="#00D800">
  </path>
</svg>

Uppercase letter methods express coordinates in absolute terms, while lowercase methods express them
in relative terms from the most recently declared coordinates.

Here is a short list of available commands in `d`:

| Method  | Name                            | Values                                            |
|---------|---------------------------------|---------------------------------------------------|
| `M` `m` | moveto                          | `x, y [,...]`                                     |
| `Z` `z` | closepath                       | *none*                                            |
| `L` `l` | lineto                          | `x, y [,...]`                                     |
| `H` `h` | horizontal lineto               | `x [,...]`                                        |
| `V` `v` | vertical lineto                 | `y [,...]`                                        |
| `C` `c` | curveto                         | `x1, y1, x2, y2, x, y [,...]`                     |
| `S` `s` | smooth curveto                  | `x2, y2, x, y [,...]`                             |
| `Q` `q` | quadratic Bézier curveto        | `x1, y1, x, y [,...])`                            |
| `T` `t` | smooth quadratic Bézier curveto | `x, y [,...]`                                     |
| `A` `a` | arc                             | `rx, ry, rot, arc-flag, sweep-flag, x, y, [,...]` |


### In Grapper

In the SVG Grapper API we can use `.d` with methods like `.d.M()` or `.d.L()` and build the path
data step by step with these helpers. All these methods return `.d` and as a result, you can chain
calls to them.


## moveto

The moveto commands (`M x, y ` or `m x, y`) establish a new point, as if lifting the pen and
starting to draw a new sub path in a new location. The `x, y` pair and subsequent ones are treated
as path points, and a straight line is drawn between these points.

::: code-group

```svg
<svg viewBox="0 0 100 100" width="75" height="75">
    <path stroke="#0000D8" stroke-width="5" fill="none"
          d="M10,10,90,10,10,50,90,50"/>
</svg>
```

```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
const path = $.svg.add('path').fill('none').stroke('#0000D8').stroke_width(5)
              .d.M(10, 10, 90, 10, 10, 50, 90, 50);
path.fill('none');
```

:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <path stroke="#0000D8" stroke-width="5" fill="none" 
        d="M10,10,90,10,10,50,90,50"/>
</svg>

## closepath

The closepath commands (`Z(` or `z`, both are identical) end the current sub path and draw a line
from that point to the initial point.

::: code-group

```svg
<svg viewBox="0 0 100 100" width="75" height="75">
    <path stroke="#0000D8" stroke-width="5" fill="none"
          d="M10,10,90,10,10,50,90,50Z"/>
</svg>
```

```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
const path = $.svg.add('path').fill('none').stroke('#0000D8').stroke_width(5)
              .d.M(10, 10, 90, 10, 10, 50, 90, 50).Z();
path.fill('none');
```

:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <path stroke="#0000D8" stroke-width="5" fill="none" 
        d="M10,10,90,10,10,50,90,50Z"/>
</svg>

## lineto

The lineto commands (`L x, y`, `l x, y`), horizontal lineto (`H x`, `h x`), and vertical lineto
(`V y`, `v y`) draw straight lines from the current point to a new point.

::: code-group

```svg
<svg viewBox="0 0 100 100" width="75" height="75">
    <path fill="#00D800" d="M50,0L100,30v70h-100v-70Z"/>
</svg>
```

```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
const path = $.svg.add('path').fill('#00D800');
path.d
    .M(50, 0)
    .L(100, 30)
    .v(70)
    .h(-100)
    .v(-70)
    .Z();
```

:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <path fill="#00D800" d="M50,0L100,30v70h-100v-70Z"/>
</svg>

## Curve methods

There are three groups of `d` commands that draw curved paths: Cubic Bézier (`C`, `c`,
`S`, `s`), Quadratic Bézier (`Q`, `q`, `T`, `t`), and Elliptical arc (`A`, `a`).

### Cubic Bézier

The `C x1, y1, x2, y2, x, y` and `c x1, y1, x2, y2, x, y` commands draw a cubic Bézier curve from
the current point to the end point specified by `x` and `y`. The start control point is specified
by `x1` and `y1` and the end control point is specified by `x2` and `y2`.

::: code-group

```svg
<svg viewBox="0 0 100 100" width="75" height="75">
    <path fill="none" stroke="#0000D8" stroke-width="5" d="M5,5C5,95,95,95,90,5Z"/>
</svg>
```

```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
const path = $.svg.add('path').fill('none').stroke('#0000D8').stroke_width(5)
              .d.M(5, 5)
              .C(5, 95, 95, 95, 90, 5)
              .Z();
```

:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <path fill="none" stroke="#0000D8" stroke-width="5" d="M5,5C5,95,95,95,90,5Z"/>
</svg>

The `S x2, y2, x, y` and `s x2, y2, x, y` commands also draw a Cubic Bézier curve, but in this case
the start control point is a reflection of the previous curve method.

### Quadratic Bézier

Quadratic Bézier curves defined by `Q x1, y1, x, y`, `q x1, y1, x, y`, `T x, y`, `t x, y`
commands are similar to Cubic Bézier curves except that they only have one control point.

::: code-group

```svg
<svg viewBox="0 0 100 100" width="75" height="75">
    <path fill="none" stroke="#0000D8" stroke-width="5" d="M5,5Q50,95,90,5Z"/>
</svg>
```

```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
const path = $.svg.add('path').fill('none').stroke('0000D8').stroke_width(5)
              .d.M(5, 5)
              .Q(95, 95, 90, 5)
              .Z();
```

:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <path fill="none" stroke="#0000D8" stroke-width="5" d="M5,5Q50,95,90,5Z"/>
</svg>


The `T x, y` and `t x, y` commands also draw a Quadratic Bézier curve, but in this case the control
point is a reflection of the previous curve method.

### Elliptical Arc

An Elliptical Arc commands `A rx, ry, angle, large-arc-flag, sweep-flag, x, y` and
`a rx, ry, angle, large-arc-flag, sweep-flag, x, y` defines a segment of an ellipse with these
values:

- `rx` and `ry` are the two radii of the ellipse.
- `angle` is the rotation (in degrees) of the ellipse relative to the x-axis.
- `large-arc-flag` allows to chose one of the large arc (`1`) or small arc (`0`).
- `sweep-flag` allows to chose one of the clockwise turning arc (`1`) or anticlockwise turning arc
  (`0`).
- `x` and `y` becomes the new current point for the next method.

::: code-group

```svg
<svg viewBox="0 0 100 100" width="75" height="75">
    <path fill="none" stroke="#0000D8" stroke-width="5" d="M10,50a15,10,0,0,1,80,0Z"/>
</svg>
```

```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
const path = $.svg.add('path').fill('none').stroke('#0000D8').stroke_width(5)
              .d.M(10, 50)
              .a(15, 10, 0, 0, 1, 80, 0)
              .Z();
```

:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <path fill="none" stroke="#0000D8" stroke-width="5" d="M10,50a15,10,0,0,1,80,0Z"/>
</svg>
