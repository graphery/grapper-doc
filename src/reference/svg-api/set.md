# set

The SVG `set` element provides a simple means of just setting the value of an attribute for a specified duration.

It supports all attribute types, including those that cannot reasonably be interpolated, such as string and boolean values. For attributes that can be reasonably be interpolated, the `animate` is usualy prefered.

Note: The `set` element is non-additive. The additive and accumulate attributes are not allowed, and will be ignored if specified.

Usually, this element is created with:
      
```js
const set = parentElement.add('set')
```

It's possible to create it as a disconnected element with `gSVG('set')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/set) | [w3c](https://svgwg.org/specs/animations/#SetElement)

## .to()


```js
set.to( value )
```
Set this attribute defines the value to be applied to the target attribute for the duration of the animation. The value must match the requirements of the target attribute.

- **argument**: `{number|string} value` the value for the attribute during the duration of the element

- **returns**: `{gSVGObject}` The original object


```js
const to = element.to();
```
Get the `to` current value.

- **returns**: `{number|string}` 

- **Parent elements**: [a](./a.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [ellipse](./ellipse.md) | [feBlend](./FilterPrimitives.md#feBlend.md) | [feColorMatrix](./FilterPrimitives.md#feColorMatrix.md) | [feComposite](./FilterPrimitives.md#feComposite.md) | [feConvolveMatrix](./FilterPrimitives.md#feConvolveMatrix.md) | [feDisplacementMap](./FilterPrimitives.md#feDisplacementMap.md) | [feDistantLight](./FilterPrimitives.md#feDistantLight.md) | [feDropShadow](./FilterPrimitives.md#feDropShadow.md) | [feFlood](./FilterPrimitives.md#feFlood.md) | [feFuncA](./FilterPrimitives.md#feFuncA.md) | [feFuncB](./FilterPrimitives.md#feFuncB.md) | [feFuncG](./FilterPrimitives.md#feFuncG.md) | [feFuncR](./FilterPrimitives.md#feFuncR.md) | [feGaussianBlur](./FilterPrimitives.md#feGaussianBlur.md) | [feImage](./FilterPrimitives.md#feImage.md) | [feMergeNode](./FilterPrimitives.md#feMergeNode.md) | [feMorphology](./FilterPrimitives.md#feMorphology.md) | [feOffset](./FilterPrimitives.md#feOffset.md) | [fePointLight](./FilterPrimitives.md#fePointLight.md) | [feSpotLight](./FilterPrimitives.md#feSpotLight.md) | [feTile](./FilterPrimitives.md#feTile.md) | [feTurbulence](./FilterPrimitives.md#feTurbulence.md) | [filter](./filter.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [radialGradient](./radialGradient.md) | [rect](./rect.md) | [stop](./stop.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [textPath](./textPath.md) | [tspan](./tspan.md) | [use](./use.md).

- **Child elements**: [desc](./desc.md) | [metadata](./metadata.md) | [title](./title.md).

