# desc

The `desc` element provides an accessible, long-text description of any SVG container element or graphics element. Text in a `desc` element is not rendered as part of the graphic. If the element can be described by visible text, it is possible to reference that text with the `aria-describedby` attribute.

Usually, this element is created with:
      
```js
const desc = parentElement.add('desc')
```

It's possible to create it as a disconnected element with `gSVG('desc')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/desc) | [w3c](https://svgwg.org/svg2-draft/single-page.html#struct-DescElement)

- **Parent elements**: [a](./a.md) | [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) |  [ellipse](./ellipse.md) | [feDiffuseLighting](./FilterPrimitives.md#feDiffuseLighting.md) | [feSpecularLighting](./FilterPrimitives.md#feSpecularLighting.md) | [filter](./filter.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [mpath](./mpath.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [radialGradient](./radialGradient.md) | [rect](./rect.md) | [set](./set.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [textPath](./textPath.md) | [tspan](./tspan.md) | [use](./use.md) | [view](./view.md).

