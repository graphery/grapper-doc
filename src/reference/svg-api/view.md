# view

A view is a defined way to view the image, like a zoom level or a detail view.



This element implements the SVGViewElement interface.

 

 

Usually, this element is created with:
      
```js
const view = parentElement.add('view')
```

It's possible to create it as a disconnected element with `gSVG('view')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/view) | [w3c](https://svgwg.org/svg2-draft/single-page.html#linking-ViewElement)

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

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [symbol](./symbol.md).

- **Child elements**: [desc](./desc.md) | [metadata](./metadata.md) | [title](./title.md).

