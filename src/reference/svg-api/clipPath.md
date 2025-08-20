# clipPath

The `clipPath` SVG element defines a clipping path, to be used by the `clip-path` property. A clipping path restricts the region to which paint can be applied.

Usually, this element is created with:
      
```js
const clipPath = parentElement.add('clipPath')
```

It's possible to create it as a disconnected element with `gSVG('clipPath')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/clipPath) | [w3c](https://drafts.fxtf.org/css-masking-1/#ClipPathElement)

## .clipPathUnits()


```js
clipPath.clipPathUnits( unit )
```
Set the coordinate system for the contents of the `clipPath` element.

- **argument**: `{string} unit` Must be 'userSpaceOnUse' | 'objectBoundingBox'

- **returns**: `{gSVGObject}` The original object


```js
const clipPathUnits = element.clipPathUnits();
```
Get the `clipPathUnits` current value.

- **returns**: `{string}` Current unit

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [circle](./circle.md) | [desc](./desc.md) |  [ellipse](./ellipse.md) | [line](./line.md) | [metadata](./metadata.md) | [mpath](./mpath.md) | [path](./path.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [rect](./rect.md) | [set](./set.md) | [text](./text.md) | [title](./title.md) | [use](./use.md).

