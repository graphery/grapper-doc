# marker

The `marker` element defines the graphic that is to be used for drawing arrowheads or polymarkers on a given `path`, `line`, `polyline` or `polygon` element.

Markers are attached to shapes using the marker-start, marker-mid, and marker-end properties.

Usually, this element is created with:
      
```js
const marker = parentElement.add('marker')
```

It's possible to create it as a disconnected element with `gSVG('marker')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/marker) | [w3c](https://svgwg.org/svg2-draft/single-page.html#painting-MarkerElement)

## .markerHeight()


```js
marker.markerHeight( height )
```
Set this attribute defines the height of the marker viewport.

- **argument**: `{number|string} height` The height value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const markerHeight = element.markerHeight();
```
Get the `markerHeight` current value.

- **returns**: `{number|string}` 

## .markerUnits()


```js
marker.markerUnits( unit )
```
Set this attribute defines the coordinate system for the attributes `markerWidth`, `markerHeight` and the contents of the marker.

- **argument**: `{string} unit` Must be `userSpaceOnUse` | `strokeWidth` 

- **returns**: `{gSVGObject}` The original object


```js
const markerUnits = element.markerUnits();
```
Get the `markerUnits` current value.

- **returns**: `{string}` 

## .markerWidth()


```js
marker.markerWidth( width )
```
Set this attribute defines the width of the marker viewport.

- **argument**: `{number|string} width` The width value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const markerWidth = element.markerWidth();
```
Get the `markerWidth` current value.

- **returns**: `{number|string}` 

## .orient()


```js
marker.orient( orientation )
```
Set this attribute defines the `orient`ation of the marker relative to the shape it is attached to.

- **argument**: `{string|number} orientation` Must be `auto` | `auto-start-reverse` | an angle | a number 

- **returns**: `{gSVGObject}` The original object


```js
const orient = element.orient();
```
Get the `orient` current value.

- **returns**: `{string|number}` 

## .preserveAspectRatio()


```js
element.preserveAspectRatio( align )
```
Set the `preserveAspectRatio` attribute. It indicates how an element with a `viewBox` providing a given aspect ratio must fit into a viewport with a different aspect ratio.

- **argument**: `{string} align` Must be 'none' | 'xMinYMin' | 'xMidYMin' | 'xMaxYMin' | 'xMinYMid' | 'xMidYMid' (the default) | 'xMaxYMid' | 'xMinYMax' | 'xMidYMax' | 'xMaxYMax' and can be complemented with 'meet' (the default) | 'slice'

- **returns**: `{gSVGObject}` The original object


```js
const align = element.preserveAspectRatio();
```
Get the `preserveAspectRatio` current value.

- **returns**: `{string}` Current align configuration

## .refX()


```js
marker.refX( x )
```
Set this attribute defines the `x` coordinate for the reference point of the marker.

- **argument**: `{number} x` The x value 

- **returns**: `{gSVGObject}` The original object


```js
const refX = element.refX();
```
Get the `refX` current value.

- **returns**: `{number}` 

## .refY()


```js
marker.refY( y )
```
Set this attribute defines the `y` coordinate for the reference point of the marker.

- **argument**: `{number} y` - The y value 

- **returns**: `{gSVGObject}` The original object


```js
const refY = element.refY();
```
Get the `refY` current value.

- **returns**: `{number}` 

## .viewBox()


```js
element.viewBox( minX, minY, width, height )
```
Set the `viewBox` attribute. It defines the position and dimension, in user space, of an SVG viewport. With four values specify a rectangle in user space which is mapped to the bounds of the viewport established for the SVG element.

- **argument**: `{number} minX` x-axis min value

- **argument**: `{number} minY` y-axis min value

- **argument**: `{number} width` width value

- **argument**: `{number} height` height value

- **returns**: `{gSVGObject}` The original object


```js
element.viewBox( viewBoxArray )
```
Set the `viewBox` attribute with an array with four values.

- **argument**: `{Array} viewBoxArray` Array with four numeric values

- **returns**: `{gSVGObject}` The original object


```js
element.viewBox( viewBoxString )
```
Set the `viewBox` attribute with a string.

- **argument**: `{string} viewBoxString` Four numeric values separated by coma or space

- **returns**: `{gSVGObject}` The original object


```js
const viewBox = element.viewBox();
```
Get the `viewBox` current value.

- **returns**: `{string}` four values separate by coma

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [symbol](./symbol.md).

- **Child elements**: [a](./a.md) | [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [desc](./desc.md) |  [ellipse](./ellipse.md) | [filter](./filter.md) | [foreignObject](./foreignObject.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [metadata](./metadata.md) | [mpath](./mpath.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [radialGradient](./radialGradient.md) | [rect](./rect.md) | [set](./set.md) | [stop](./stop.md) | [style](./style.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [title](./title.md) | [use](./use.md) | [view](./view.md).

