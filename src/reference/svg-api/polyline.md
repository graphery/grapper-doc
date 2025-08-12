# polyline

The `polyline` SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the `polygon` element.

Usually, this element is created with:
      
```js
const polyline = parentElement.add('polyline')
```

It's possible to create it as a disconnected element with `gSVG('polyline')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/polyline) | [w3c](https://svgwg.org/svg2-draft/single-page.html#shapes-PolylineElement)

## .points()


```js
polyline.points( points )
```
Set this attribute that defines the list of `points` (pairs of x,y absolute coordinates) required to draw the polyline

- **argument**: `{Array|string} points` The list of points

- **returns**: `{gSVGObject}` The original object


```js
const points = element.points();
```
Get the `points` current value.

- **returns**: `{Array|string}` 

## .pathLength()


```js
polyline.pathLength( length )
```
Set this attribute lets specify the total length for the path, in user units.

- **argument**: `{number} length` The total length for the path

- **returns**: `{gSVGObject}` The original object


```js
const pathLength = element.pathLength();
```
Get the `pathLength` current value.

- **returns**: `{number}` 

- **Parent elements**: [a](./a.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [desc](./desc.md) |  [metadata](./metadata.md) | [mpath](./mpath.md) | [set](./set.md) | [title](./title.md).

