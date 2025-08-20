# rect

The `rect` element is a basic SVG shape that draws rectangles, defined by their position, width, and height. The rectangles may have their corners rounded.

Usually, this element is created with:
      
```js
const rect = parentElement.add('rect')
```

It's possible to create it as a disconnected element with `gSVG('rect')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/rect) | [w3c](https://svgwg.org/svg2-draft/single-page.html#shapes-RectElement)

## .x()


```js
rect.x( value )
```
Set the `x` coordinate of the rect.

- **argument**: `{number|string} value` The x (length or percentage) coordinate of the rect

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number|string}` 

## .y()


```js
rect.y( value )
```
Set the `y` coordinate of the rect.

- **argument**: `{number|string} value` The y (length or percentage) coordinate of the rect 

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number|string}` 

## .width()


```js
rect.width( value )
```
Set the `width` of the rect.

- **argument**: `{number|string} value` The width (length or percentage) of the rect 

- **returns**: `{gSVGObject}` The original object


```js
const width = element.width();
```
Get the `width` current value.

- **returns**: `{number|string}` 

## .height()


```js
rect.height( value )
```
Set the `height` of the rect.

- **argument**: `{number|string} value` The height (length or percentage) of the rect

- **returns**: `{gSVGObject}` The original object


```js
const height = element.height();
```
Get the `height` current value.

- **returns**: `{number|string}` 

## .rx()


```js
rect.rx( value )
```
Set the horizontal corner radius of the rect. Defaults to `ry` if it is specified.

- **argument**: `{number|string} value` - The horizontal corner radius (length or percentage) of the rect 

- **returns**: `{gSVGObject}` The original object


```js
const rx = element.rx();
```
Get the `rx` current value.

- **returns**: `{number|string}` 

## .ry()


```js
rect.ry( value )
```
Set the vertical corner radius of the rect. Defaults to rx if it is specified.

- **argument**: `{number|string} value` - The vertical corner radius (length or percentage) of the rect

- **returns**: `{gSVGObject}` The original object


```js
const ry = element.ry();
```
Get the `ry` current value.

- **returns**: `{number|string}` 

## .pathLength()


```js
rect.pathLength( value )
```
Set the total length of the rectangle's perimeter, in user units.

- **argument**: `{number} value` The total length of the rectangle's perimeter 

- **returns**: `{gSVGObject}` The original object


```js
const pathLength = element.pathLength();
```
Get the `pathLength` current value.

- **returns**: `{number}` 

- **Parent elements**: [a](./a.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [desc](./desc.md) |  [metadata](./metadata.md) | [mpath](./mpath.md) | [set](./set.md) | [title](./title.md).

