# animateTransform

The `animateTransform` element animates a transformation attribute on its target element, thereby allowing animations to control translation, scaling, rotation, and/or skewing.

Usually, this element is created with:
      
```js
const animateTransform = parentElement.add('animateTransform')
```

It's possible to create it as a disconnected element with `gSVG('animateTransform')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/animateTransform) | [w3c](https://svgwg.org/specs/animations/#AnimateTransformElement)

## .type()


```js
animateTransform.type( transformationType )
```
Set the `type` attribute. It defines the type of transformation, whose values change over time.

- **argument**: `{string} transformationType` Must be 'translate' | 'scale' | 'rotate' | 'skewX' | 'skewY'

- **returns**: `{gSVGObject}` The original object


```js
const type = element.type();
```
Get the `type` current value.

- **returns**: `{string}` Current transformation type

- **Parent elements**: [a](./a.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [ellipse](./ellipse.md) | [feImage](./FilterPrimitives.md#feImage.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [radialGradient](./radialGradient.md) | [rect](./rect.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [use](./use.md).

- **Child elements**: [desc](./desc.md) | [metadata](./metadata.md) | [title](./title.md).

