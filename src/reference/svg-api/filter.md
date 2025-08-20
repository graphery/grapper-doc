# filter

The `filter` SVG element defines a custom filter effect by grouping atomic filter primitives. It is never rendered itself, but must be used by the filter attribute on SVG elements, or the filter CSS property for SVG/HTML elements.

This element implements the SVGFilterElement interface.

Usually, this element is created with:
      
```js
const filter = parentElement.add('filter')
```

It's possible to create it as a disconnected element with `gSVG('filter')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/filter) | [w3c](https://drafts.fxtf.org/filter-effects/#FilterElement)

## .x()


```js
filter.x( x )
```
Set the `x` attribute defines a `x`-a`x`is coordinate in the user coordinate system.

- **argument**: `{number|string} x` The x value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number|string}` 

## .y()


```js
filter.y( y )
```
Set the `y` attribute defines a `y`-axis coordinate in the user coordinate s`y`stem.

- **argument**: `{number|string} y` The y value (length or percentage)` 

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number|string}` 

## .width()


```js
filter.width( width )
```
Set the `width` attribute defines the horizontal length of an element in the user coordinate system.

- **argument**: `{number|string} width` The width value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const width = element.width();
```
Get the `width` current value.

- **returns**: `{number|string}` 

## .height()


```js
filter.height( height )
```
Set the `height` attribute defines the vertical length of an element in the user coordinate system.

- **argument**: `{number|string} height` The height value (length or percentage)

- **returns**: `{gSVGObject}` The original object


```js
const height = element.height();
```
Get the `height` current value.

- **returns**: `{number|string}` 

## .filterUnits()


```js
filter.filterUnits( model )
```
Set the `filterUnits` attribute defines the coordinate system for the attributes x, y, width and height.

- **argument**: `{string} model` Must be `userSpaceOnUse` | `objectBoundingBox` 

- **returns**: `{gSVGObject}` The original object


```js
const filterUnits = element.filterUnits();
```
Get the `filterUnits` current value.

- **returns**: `{string}` 

## .primitiveUnits()


```js
filter.primitiveUnits( mode )
```
Set the `primitiveUnits` attribute specifies the coordinate system for the various length values within the filter primitives and for the attributes that define the filter primitive subregion.

- **argument**: `{string} mode` Must be `userSpaceOnUse` | `objectBoundingBox`

- **returns**: `{gSVGObject}` The original object


```js
const primitiveUnits = element.primitiveUnits();
```
Get the `primitiveUnits` current value.

- **returns**: `{string}` 

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [desc](./desc.md) | [feBlend](./FilterPrimitives.md#feBlend.md) | [feColorMatrix](./FilterPrimitives.md#feColorMatrix.md) | [feComponentTransfer](./FilterPrimitives.md#feComponentTransfer.md) | [feComposite](./FilterPrimitives.md#feComposite.md) | [feConvolveMatrix](./FilterPrimitives.md#feConvolveMatrix.md) | [feDiffuseLighting](./FilterPrimitives.md#feDiffuseLighting.md) | [feDisplacementMap](./FilterPrimitives.md#feDisplacementMap.md) | [feDropShadow](./FilterPrimitives.md#feDropShadow.md) | [feFlood](./FilterPrimitives.md#feFlood.md) | [feFuncA](./FilterPrimitives.md#feFuncA.md) | [feFuncB](./FilterPrimitives.md#feFuncB.md) | [feFuncG](./FilterPrimitives.md#feFuncG.md) | [feFuncR](./FilterPrimitives.md#feFuncR.md) | [feGaussianBlur](./FilterPrimitives.md#feGaussianBlur.md) | [feImage](./FilterPrimitives.md#feImage.md) | [feMerge](./FilterPrimitives.md#feMerge.md) | [feMergeNode](./FilterPrimitives.md#feMergeNode.md) | [feMorphology](./FilterPrimitives.md#feMorphology.md) | [feOffset](./FilterPrimitives.md#feOffset.md) | [feSpecularLighting](./FilterPrimitives.md#feSpecularLighting.md) | [feTile](./FilterPrimitives.md#feTile.md) | [feTurbulence](./FilterPrimitives.md#feTurbulence.md) | [metadata](./metadata.md) | [set](./set.md) | [title](./title.md).

