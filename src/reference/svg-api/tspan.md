# tspan

The SVG `tspan` element defines a subtext within a `text` element or another `tspan` element. It allows for adjustment of the style and/or position of that subtext as needed.

Usually, this element is created with:
      
```js
const tspan = parentElement.add('tspan')
```

It's possible to create it as a disconnected element with `gSVG('tspan')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/tspan) | [w3c](https://svgwg.org/svg2-draft/single-page.html#text-TextElement)

## .x()


```js
tspan.x( x )
```
Set the `x` coordinate of the starting point of the text baseline.

- **argument**: `{number} x` The x value 

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number}` 

## .y()


```js
tspan.y( y )
```
Set the `y` coordinate of the starting point of the text baseline.

- **argument**: `{number} y` The y value 

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number}` 

## .dx()


```js
tspan.dx( x )
```
Set shifts the text position horizontally from a previous text element.

- **argument**: `{number} x` The x gap from the previous value 

- **returns**: `{gSVGObject}` The original object


```js
const dx = element.dx();
```
Get the `dx` current value.

- **returns**: `{number}` 

## .dy()


```js
tspan.dy( y )
```
Set shifts the text position vertically from a previous text element.

- **argument**: `{number} y` The y gap from the previous value 

- **returns**: `{gSVGObject}` The original object


```js
const dy = element.dy();
```
Get the `dy` current value.

- **returns**: `{number}` 

## .rotate()


```js
tspan.rotate( angle )
```
Set rotates orientation of each individual glyph. Can `rotate` glyphs individually.

- **argument**: `{number|string} ange` Must be `auto` | `auto-reverse` | angle value 

- **returns**: `{gSVGObject}` The original object


```js
const rotate = element.rotate();
```
Get the `rotate` current value.

- **returns**: `{number|string}` 

## .lengthAdjust()


```js
tspan.lengthAdjust( mode )
```
Set how the text is stretched or compressed to fit the width defined by the textLength attribute.

- **argument**: `{string} mode` Must be `spacing` | `spacingAndGlyphs` 

- **returns**: `{gSVGObject}` The original object


```js
const lengthAdjust = element.lengthAdjust();
```
Get the `lengthAdjust` current value.

- **returns**: `{string}` 

## .textLength()


```js
tspan.textLength( length )
```
Set a width that the text should be scaled to fit.

- **argument**: `{number|tring} length` The length value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const textLength = element.textLength();
```
Get the `textLength` current value.

- **returns**: `{number|string}` 

- **Parent elements**: [text](./text.md) | [textPath](./textPath.md) | [tspan](./tspan.md).

- **Child elements**: [a](./a.md) | [animate](./animate.md) | [desc](./desc.md) | [metadata](./metadata.md) | [set](./set.md) | [title](./title.md) | [tspan](./tspan.md).

