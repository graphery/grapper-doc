# pattern

The `pattern` element defines a graphics object which can be redrawn at repeated x- and y-coordinate intervals ("tiled") to cover an area.

The `pattern` is referenced by the fill and/or stroke attributes on other graphics elements to fill or stroke those elements with the referenced pattern.

Usually, this element is created with:
      
```js
const pattern = parentElement.add('pattern')
```

It's possible to create it as a disconnected element with `gSVG('pattern')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/pattern) | [w3c](https://svgwg.org/svg2-draft/single-page.html#pservers-PatternElement)

## .height()


```js
pattern.height( height )
```
Set this attribute determines the `height` of the pattern tile.

- **argument**: `{number} height` The `height` value 

- **returns**: `{gSVGObject}` The original object


```js
const height = element.height();
```
Get the `height` current value.

- **returns**: `{number}` 

## .href()


```js
pattern.href( URLPattern )
```
Set the href attribute. It defines a URL referencing to a template pattern that provides default values for this `pattern`.

- **argument**: `{string} URLPattern` URL to a pattern

- **returns**: `{gSVGObject}` The original object


```js
const href = pattern.href();
```
Get the `href` current value.

- **returns**: `{string}` Current URL to a pattern

## .patternContentUnits()


```js
pattern.patternContentUnits( contentUnit )
```
Set this attribute defines the coordinate system for the contents of the `pattern`.

- **argument**: `{string} contentUnit` Must be `userSpaceOnUse` | `objectBoundingBox`

- **returns**: `{gSVGObject}` The original object


```js
const patternContentUnits = element.patternContentUnits();
```
Get the `patternContentUnits` current value.

- **returns**: `{string}` 

## .patternTransform()


```js
pattern.patternTransform( transform )
```
Set this attribute contains the definition of an optional additional transformation from the pattern coordinate system onto the target coordinate system.

- **argument**: `{string} transform` The transform functions list 

- **returns**: `{gSVGObject}` The original object


```js
const patternTransform = element.patternTransform();
```
Get the `patternTransform` current value.

- **returns**: `{string}` 

## .patternUnits()


```js
pattern.patternUnits( unit )
```
Set this attribute defines the coordinate system for attributes `x`, `y`, `width`, and  `height`.

- **argument**: `{string} unit` Must be `userSpaceOnUse` | `objectBoundingBox` 

- **returns**: `{gSVGObject}` The original object


```js
const patternUnits = element.patternUnits();
```
Get the `patternUnits` current value.

- **returns**: `{string}` 

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
pattern.width( width )
```
Set this attribute determines the `width` of the pattern tile.

- **argument**: `{number} width` The `width` value 

- **returns**: `{gSVGObject}` The original object


```js
const width = element.width();
```
Get the `width` current value.

- **returns**: `{number}` 

## .x()


```js
pattern.x( x )
```
Set this attribute determines the `x` coordinate shift of the pattern tile.

- **argument**: `{number} x` The `x` value 

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number}` 

## .y()


```js
pattern.y( y )
```
Set this attribute determines the `y` coordinate shift of the pattern tile.

- **argument**: `{number} y` The `y` value 

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number}` 

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [symbol](./symbol.md).

- **Child elements**: [a](./a.md) | [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [desc](./desc.md) |  [ellipse](./ellipse.md) | [filter](./filter.md) | [foreignObject](./foreignObject.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [metadata](./metadata.md) | [mpath](./mpath.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [radialGradient](./radialGradient.md) | [rect](./rect.md) | [set](./set.md) | [stop](./stop.md) | [style](./style.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [title](./title.md) | [use](./use.md) | [view](./view.md).

