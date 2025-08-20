# line

The `line` element is an SVG basic shape used to create a line connecting two points.

Usually, this element is created with:
      
```js
const line = parentElement.add('line')
```

It's possible to create it as a disconnected element with `gSVG('line')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/line) | [w3c](https://svgwg.org/svg2-draft/single-page.html#shapes-LineElement)

## .x1()


```js
line.x1( x1 )
```
Set defines the `x-axis` coordinate of the line starting point.

- **argument**: `{number|string} x1` The `x1` value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const x1 = element.x1();
```
Get the `x1` current value.

- **returns**: `{number|string}` 

## .x2()


```js
line.x2( x2 )
```
Set defines the x-axis coordinate of the line ending point.

- **argument**: `{number|string} x2` The `x2` value (length or percentage)

- **returns**: `{gSVGObject}` The original object


```js
const x2 = element.x2();
```
Get the `x2` current value.

- **returns**: `{number|string}` 

## .y1()


```js
line.y1( y1 )
```
Set defines the y-axis coordinate of the line starting point.

- **argument**: `{number|string} y1` The `y1` value (length or percentage)

- **returns**: `{gSVGObject}` The original object


```js
const y1 = element.y1();
```
Get the `y1` current value.

- **returns**: `{number|string}` 

## .y2()


```js
line.y2( y2 )
```
Set defines the y-axis coordinate of the line ending point.

- **argument**: `{number|string} y2` The `y2` value (length or percentage)

- **returns**: `{gSVGObject}` The original object


```js
const y2 = element.y2();
```
Get the `y2` current value.

- **returns**: `{number|string}` 

## .pathLength()


```js
line.pathLength( length )
```
Set defines the total path length in user units.

- **argument**: `{number|string} length` The path length value 

- **returns**: `{gSVGObject}` The original object


```js
const pathLength = element.pathLength();
```
Get the `pathLength` current value.

- **returns**: `{number|string}` 

- **Parent elements**: [a](./a.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [desc](./desc.md) |  [metadata](./metadata.md) | [mpath](./mpath.md) | [set](./set.md) | [title](./title.md).

