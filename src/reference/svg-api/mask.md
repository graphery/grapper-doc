# mask

The `mask` element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property.

Usually, this element is created with:
      
```js
const mask = parentElement.add('mask')
```

It's possible to create it as a disconnected element with `gSVG('mask')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/mask) | [w3c](https://drafts.fxtf.org/css-masking-1/#MaskElement)

## .height()


```js
mask.height( height )
```
Set this attribute defines the `height` of the masking area.

- **argument**: `{number} height` The `height` value 

- **returns**: `{gSVGObject}` The original object


```js
const height = element.height();
```
Get the `height` current value.

- **returns**: `{number}` 

## .maskContentUnits()


```js
mask.maskContentUnits( contentUnit )
```
Set this attribute defines the coordinate system for the contents of the `mask`.

- **argument**: `{string} contentUnit` Must be `userSpaceOnUse` | `objectBoundingBox` 

- **returns**: `{gSVGObject}` The original object


```js
const maskContentUnits = element.maskContentUnits();
```
Get the `maskContentUnits` current value.

- **returns**: `{string}` 

## .maskUnits()


```js
mask.maskUnits( unit )
```
Set this attribute defines defines the coordinate system for attributes x, y, width and height on the `mask`.

- **argument**: `{string} unit` Must be `userSpaceOnUse` | `objectBoundingBox`

- **returns**: `{gSVGObject}` The original object


```js
const maskUnits = element.maskUnits();
```
Get the `maskUnits` current value.

- **returns**: `{string}` 

## .x()


```js
mask.x( x )
```
Set this attribute defines the x-axis coordinate of the top-left corner of the masking area.

- **argument**: `{number} x` The `x` value 

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number}` 

## .y()


```js
mask.y( y )
```
Set this attribute defines the y-axis coordinate of the top-left corner of the masking area.

- **argument**: `{number} y` The `y` value 

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number}` 

## .width()


```js
mask.width( width )
```
Set this attribute defines the `width` of the masking area.

- **argument**: `{number} width` The `width` value 

- **returns**: `{gSVGObject}` The original object


```js
const width = element.width();
```
Get the `width` current value.

- **returns**: `{number}` 

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [symbol](./symbol.md).

- **Child elements**: [a](./a.md) | [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [desc](./desc.md) |  [ellipse](./ellipse.md) | [filter](./filter.md) | [foreignObject](./foreignObject.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [metadata](./metadata.md) | [mpath](./mpath.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [radialGradient](./radialGradient.md) | [rect](./rect.md) | [set](./set.md) | [stop](./stop.md) | [style](./style.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [title](./title.md) | [use](./use.md) | [view](./view.md).

