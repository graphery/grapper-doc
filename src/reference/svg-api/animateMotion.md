# animateMotion

The SVG `animateMotion` element let define how an element moves along a motion path.

Usually, this element is created with:
      
```js
const animateMotion = parentElement.add('animateMotion')
```

It's possible to create it as a disconnected element with `gSVG('animateMotion')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/animateMotion) | [w3c](https://svgwg.org/specs/animations/#AnimateMotionElement)

## .keyPoints()


```js
animateMotion.keyPoints( value )
```
Set the `keyPoints` attribute indicate, in the range [0,1], how far is the object along the path for each keyTimes associated values.

- **argument**: `{number} value` A value between 0 and 1

- **returns**: `{gSVGObject}` The original object


```js
const keyPoints = element.keyPoints();
```
Get the `keyPoints` current value.

- **returns**: `{number}` A value between 0 and 1

## .path()


```js
animateMotion.path( path )
```
Set this attribute defines the `path` of the motion, using the same syntax as the `d` attribute.

- **argument**: `{string} path` Motion path as a `d` attribute

- **returns**: `{gSVGObject}` The original object


```js
const d = element.path();
```
Get the `path` current value.

- **returns**: `{string}` Current path

## .rotate()


```js
animateMotion.rotate( rotation )
```
Set the rotation applied to the animated element along a path, usually to make it pointing in the direction of the animation.

- **argument**: `{number|string} rotation` Must be a number or 'auto' | 'auto-reverse'

- **returns**: `{gSVGObject}` The original object


```js
const rotate = element.rotate();
```
Get the `rotate` current value.

- **returns**: `{number|string}` Current rotation

- **Parent elements**: [a](./a.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [ellipse](./ellipse.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [marker](./marker.md) | [mask](./mask.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [rect](./rect.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [use](./use.md).

- **Child elements**: [desc](./desc.md) | [metadata](./metadata.md) | [mpath](./mpath.md) | [title](./title.md).

