# textPath

To render text along the shape of a `path`, enclose the text in a `textPath` element that has an href attribute with a reference to the `path` element.

Usually, this element is created with:
      
```js
const textPath = parentElement.add('textPath')
```

It's possible to create it as a disconnected element with `gSVG('textPath')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/textPath) | [w3c](https://svgwg.org/svg2-draft/single-page.html#text-TextPathElement)

## .href()


```js
textPath.href( URLPath )
```
Set the URL to the path or basic shape on which to render the text. If the `path` attribute is set, `href` has no effect.

- **argument**: `{string} URLPath` URL to a path

- **returns**: `{gSVGObject}` The original object


```js
const href = textPath.href();
```
Get the `href` current value.

- **returns**: `{string}` Current URL to a path

## .lengthAdjust()


```js
textPath.lengthAdjust( mode )
```
Set where length adjustment should be applied to the text: the space between glyphs, or both the space and the glyphs themselves.

- **argument**: `{string} mode` Must be `spacing` | `spacingAndGlyphs` 

- **returns**: `{gSVGObject}` The original object


```js
const lengthAdjust = element.lengthAdjust();
```
Get the `lengthAdjust` current value.

- **returns**: `{string}` 

## .method()


```js
textPath.method( method )
```
Set which `method` to render individual glyphs along the path.

- **argument**: `{string} method` Must be `align` | `stretch` 

- **returns**: `{gSVGObject}` The original object


```js
const method = element.method();
```
Get the `method` current value.

- **returns**: `{string}` 

## .path()


```js
textPath.path( path )
```

Set the `path` on which the values should be rendered.

- **argument**: `{Array|string} path` The `path` value 

- **returns**: `{gSVGObject}` The original object


```js
const path = element.path();
```
Get the `path` current value.

- **returns**: `{Array|string}` 

## .spacing()


```js
textPath.spacing( width )
```
Set how space between glyphs should be handled.

- **argument**: `{number} width` The `width` value 

- **returns**: `{gSVGObject}` The original object


```js
const spacing = element.spacing();
```
Get the `spacing` current value.

- **returns**: `{number}` 

## .startOffset()


```js
textPath.startOffset( offset )
```
Set how far the beginning of the text should be offset from the beginning of the path.

- **argument**: `{number} offset` The `offset` value 

- **returns**: `{gSVGObject}` The original object


```js
const startOffset = element.startOffset();
```
Get the `startOffset` current value.

- **returns**: `{number}` 

## .textLength()


```js
textPath.textLength( width )
```
Set the width of the space into which the text will render.

- **argument**: `{number} width` The `width` value 

- **returns**: `{gSVGObject}` The original object


```js
const textLength = element.textLength();
```
Get the `textLength` current value.

- **returns**: `{number}` 

- **Parent elements**: [text](./text.md).

- **Child elements**: [a](./a.md) | [animate](./animate.md) | [desc](./desc.md) | [metadata](./metadata.md) | [set](./set.md) | [title](./title.md) | [tspan](./tspan.md).

