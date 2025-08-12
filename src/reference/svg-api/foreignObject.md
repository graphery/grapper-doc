# foreignObject

The `foreignObject` SVG element includes elements from a different XML namespace. In the context of a browser, it is most likely (X)HTML.

Usually, this element is created with:
      
```js
const foreignObject = parentElement.add('foreignObject')
```

It's possible to create it as a disconnected element with `gSVG('foreignObject')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/foreignObject) | [w3c](https://svgwg.org/svg2-draft/single-page.html#embedded-ForeignObjectElement)

## .height()


```js
foreignObject.height( height )
```
Set the `height` of the foreignObject.

- **argument**: `{number|string} height` The height (length or percentage)  of the `foreignObject`

- **returns**: `{gSVGObject}` The original object


```js
const height = element.height();
```
Get the `height` current value.

- **returns**: `{number|string}` 

## .width()


```js
foreignObject.width( width )
```
Set the `width` of the foreignObject.

- **argument**: `{number|string} width` The width (length or percentage) of the `foreignObject` 

- **returns**: `{gSVGObject}` The original object


```js
const width = element.width();
```
Get the `width` current value.

- **returns**: `{number|string}` 

## .x()


```js
foreignObject.x( x )
```
Set the `x` coordinate of the foreignObject.

- **argument**: `{number|string} x` The x (length or percentage) coordinate of the `foreignObject` 

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number|string}` 

## .y()


```js
foreignObject.y( y )
```
Set the `y` coordinate of the foreignObject.

- **argument**: `{number|string} y` The y (length or percentage) coordinate of the `foreignObject`

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number|string}` 

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

