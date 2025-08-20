# text

The SVG `text` element draws a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to `text`, like any other SVG graphics element.

If text is included in SVG not inside of a `text` element, it is not rendered. This is different than being hidden by default, as setting the display property won't show the text.

Usually, this element is created with:
      
```js
const text = parentElement.add('text')
```

It's possible to create it as a disconnected element with `gSVG('text')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/text) | [w3c](https://svgwg.org/svg2-draft/single-page.html#text-TextElement)

## .x()


```js
text.x( x )
```
Set the `x` coordinate of the starting point of the te`x`t baseline.

- **argument**: `{number} x` The `x` value 

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number}` 

## .y()


```js
text.y( y )
```
Set the `y` coordinate of the starting point of the text baseline.

- **argument**: `{number} y` The `y` value 

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number}` 

## .dx()


```js
text.dx( x )
```
Set shifts the text position horizontally from a previous text element.

- **argument**: `{number} x` The `x` value 

- **returns**: `{gSVGObject}` The original object


```js
const dx = element.dx();
```
Get the `dx` current value.

- **returns**: `{number}` 

## .dy()


```js
text.dy( y )
```
Set shifts the text position vertically from a previous text element.

- **argument**: `{number} y` The `y` value 

- **returns**: `{gSVGObject}` The original object


```js
const dy = element.dy();
```
Get the `dy` current value.

- **returns**: `{number}` 

## .rotate()


```js
text.rotate( angle )
```
Set rotates orientation of each individual glyph. Can rotate glyphs individually.

- **argument**: `{number|string} angle` The `angle` value 

- **returns**: `{gSVGObject}` The original object


```js
const rotate = element.rotate();
```
Get the `rotate` current value.

- **returns**: `{number|string}` 

## .lengthAdjust()


```js
text.lengthAdjust( adjust )
```
Set how the text is stretched or compressed to fit the width defined by the textLength attribute.

- **argument**: `{string} adjust` Must be `spacing` | `spacingAndGlyphs` 

- **returns**: `{gSVGObject}` The original object


```js
const lengthAdjust = element.lengthAdjust();
```
Get the `lengthAdjust` current value.

- **returns**: `{string}` 

## .textLength()


```js
text.textLength( width )
```
Set a width that the text should be scaled to fit.

- **argument**: `{number|string} width` The `width` length 

- **returns**: `{gSVGObject}` The original object


```js
const textLength = element.textLength();
```
Get the `textLength` current value.

- **returns**: `{number|string}` 

- **Parent elements**: [a](./a.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md).

- **Child elements**: [a](./a.md) | [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [desc](./desc.md) |  [metadata](./metadata.md) | [mpath](./mpath.md) | [set](./set.md) | [text](./text.md) | [textPath](./textPath.md) | [title](./title.md) | [tspan](./tspan.md).

