# $.svg

The svg element is a container that defines a new coordinate system and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside another SVG.

It's possible to create it as a child element with `parentElement.add('svg')`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/svg) | [w3c](https://svgwg.org/svg2-draft/single-page.html#struct-SVGElement)

## .height()


```js
svg.height( height )
```
Set the displayed `height` of the rectangular viewport. (Not the `height` of its coordinate system.)

- **argument**: `{number|string} height` The `height` dimension. 

- **returns**: `{gSVGObject}` The original object


```js
const height = element.height();
```
Get the `height` current value.

- **returns**: `{number|string}` 

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

## .width()


```js
svg.width( width )
```
Set the displayed `width` of the rectangular viewport. (Not the `width` of its coordinate system.)

- **argument**: `{number|string}` The `width` dimension 

- **returns**: `{gSVGObject}` The original object


```js
const width = element.width();
```
Get the `width` current value.

- **returns**: `{number|string` 

## .x()


```js
svg.x( x )
```
Set the displayed `x` coordinate of the $.svg container. No effect on outermost $.svg elements.

- **argument**: `{number} x` The `x` value 

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number}` 

## .y()


```js
svg.y( y )
```
Set the displa`y`ed `y` coordinate of the $.svg container. No effect on outermost $.svg elements.

- **argument**: `{number} y` The `y` value 

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number}` 

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

- **Child elements**: [a](./a.md) | [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [desc](./desc.md) |  [ellipse](./ellipse.md) | [filter](./filter.md) | [foreignObject](./foreignObject.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [metadata](./metadata.md) | [mpath](./mpath.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [radialGradient](./radialGradient.md) | [rect](./rect.md) | [set](./set.md) | [stop](./stop.md) | [style](./style.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [title](./title.md) | [use](./use.md) | [view](./view.md).

