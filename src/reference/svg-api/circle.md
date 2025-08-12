# circle

The `circle` SVG element is an SVG basic shape, used to draw circles based on a center point and a radius.

Usually, this element is created with:
      
```js
const circle = parentElement.add('circle')
```

It's possible to create it as a disconnected element with `gSVG('circle')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/circle) | [w3c](https://svgwg.org/svg2-draft/single-page.html#shapes-CircleElement)

## .cx()


```js
circle.cx( x )
```
Set the x-axis coordinate of the center of the circle.

- **argument**: `{number|string} x` x-axis length or percentage

- **returns**: `{gSVGObject}` The original object


```js
const cx = element.cx();
```
Get the `cx` current value.

- **returns**: `{number|string}` Current x-axis value

## .cy()


```js
circle.cy( y )
```
Set the y-axis coordinate of the center of the circle.

- **argument**: `{number|string} y` y-axis length or percentage

- **returns**: `{gSVGObject}` The original object


```js
const cy = element.cy();
```
Get the `cy` current value.

- **returns**: `{number|string}` Current y-axis value

## .r()


```js
circle.r( radius )
```
Set the radius (`r` attribute) of the circle. A value lower or equal to zero disables rendering of the circle.

- **argument**: `{number|string} radius` radius length or percentage

- **returns**: `{gSVGObject}` The original object


```js
const radius = element.r();
```
Get the current radius value.

- **returns**: `{number|string}` current radius value

## .pathLength()


```js
const length = element.pathLength();
```
Get the total length for the circle's circumference, in user units.

- **returns**: `{number}` total length circumference

- **Parent elements**: [a](./a.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [desc](./desc.md) |  [metadata](./metadata.md) | [mpath](./mpath.md) | [set](./set.md) | [title](./title.md).

