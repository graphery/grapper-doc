# style

The SVG `style` element allows style sheets to be embedded directly within SVG content.

SVG's style element has the same attributes as the corresponding element in HTML (see HTML's `style` element).

Usually, this element is created with:
      
```js
const style = parentElement.add('style')
```

It's possible to create it as a disconnected element with `gSVG('style')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/style) | [w3c](https://svgwg.org/svg2-draft/single-page.html#styling-StyleElement)

## .type()


```js
style.type( type )
```
Set this attribute defines `type` of the style sheet language to use as a media type string.

- **argument**: `{string} type` The media type string 

- **returns**: `{gSVGObject}` The original object


```js
const type = element.type();
```
Get the `type` current value.

- **returns**: `{string}` 

## .media()


```js
style.media( media )
```
Set this attribute defines to which media the style applies.

- **argument**: `{string} media` the media style

- **returns**: `{gSVGObject}` The original object


```js
const media = element.media();
```
Get the `media` current value.

- **returns**: `{string}` 

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [symbol](./symbol.md).

