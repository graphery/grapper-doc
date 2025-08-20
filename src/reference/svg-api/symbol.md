# symbol

The `symbol` element is used to define graphical template objects which can be instantiated by a `use` element.

The use of symbol elements for graphics that are used multiple times in the same document adds structure and semantics. Documents that are rich in structure may be rendered graphically, as speech, or as Braille, and thus promote accessibility.

Note: A `symbol` element itself is not meant to be rendered. Only instances of a `symbol` element (i.e., a reference to a `symbol` by a `use` element) are rendered. That means that some browsers could refuse to directly display a `symbol` element even if the CSS display property tells otherwise.

Usually, this element is created with:
      
```js
const symbol = parentElement.add('symbol')
```

It's possible to create it as a disconnected element with `gSVG('symbol')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/symbol) | [w3c](https://svgwg.org/svg2-draft/single-page.html#struct-SymbolElement)

## .height()


```js
symbol.height( height )
```
Set this attribute determines the `height` of the symbol.

- **argument**: `{number} height` The `height` value 

- **returns**: `{gSVGObject}` The original object


```js
const height = element.height();
```
Get the `height` current value.

- **returns**: `{number}` 

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
symbol.refX( x )
```
Set this attribute determines the `x` coordinate of the reference point of the symbol.

- **argument**: `{number} x` The `x` value 

- **returns**: `{gSVGObject}` The original object


```js
const refX = element.refX();
```
Get the `refX` current value.

- **returns**: `{number}` 

## .refY()


```js
symbol.refY( y )
```
Set this attribute determines the `y` coordinate of the reference point of the symbol.

- **argument**: `{number} y` The `y` value 

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

## .width()


```js
symbol.width( width )
```
Set this attribute determines the `width` of the symbol.

- **argument**: `{number} width` The `width` value 

- **returns**: `{gSVGObject}` The original object


```js
const width = element.width();
```
Get the `width` current value.

- **returns**: `{number}` 

## .x()


```js
symbol.x( x )
```
Set this attribute determines the `x` coordinate of the symbol.

- **argument**: `{number} x` The `x` value 

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number}` 

## .y()


```js
symbol.y( y )
```
Set this attribute determines the `y` coordinate of the s`y`mbol.

- **argument**: `{number} y` The `y` value 

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number` 

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [symbol](./symbol.md).

- **Child elements**: [a](./a.md) | [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [desc](./desc.md) |  [ellipse](./ellipse.md) | [filter](./filter.md) | [foreignObject](./foreignObject.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [metadata](./metadata.md) | [mpath](./mpath.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [radialGradient](./radialGradient.md) | [rect](./rect.md) | [set](./set.md) | [stop](./stop.md) | [style](./style.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [title](./title.md) | [use](./use.md) | [view](./view.md).

