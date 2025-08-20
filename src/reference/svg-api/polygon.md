# polygon

The `polygon` element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point.

For open shapes, see the `polyline` element.

Usually, this element is created with:
      
```js
const polygon = parentElement.add('polygon')
```

It's possible to create it as a disconnected element with `gSVG('polygon')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/polygon) | [w3c](https://svgwg.org/svg2-draft/single-page.html#shapes-PolygonElement)

## .points()


```js
polygon.points( points )
```
Set this attribute defines the list of `points` (pairs of x,y absolute coordinates) required to draw the polygon.

- **argument**: `{Array<Array<number,number>>|string} points` An array of arrays with `[x, y]` values.  

- **returns**: `{gSVGObject}` The original object


```js
const points = element.points();
```
Get the `points` current value.

- **returns**: `{Array}` 

## .pathLength()


```js
polygon.pathLength( length )
```
Set this attribute lets specify the total length for the path, in user units.

- **argument**: `{number} length` The total length 

- **returns**: `{gSVGObject}` The original object


```js
const pathLength = element.pathLength();
```
Get the `pathLength` current value.

- **returns**: `{number}` 

- **Parent elements**: [a](./a.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [desc](./desc.md) |  [metadata](./metadata.md) | [mpath](./mpath.md) | [set](./set.md) | [title](./title.md).

