# title

The `title` element provides an accessible, short-text description of any SVG container element or graphics element.

Text in a `title` element is not rendered as part of the graphic, but browsers usually display it as a tooltip. If an element can be described by visible text, it is recommended to reference that text with an aria-labelledby attribute rather than using the `title` element.

Note: For backward compatibility with SVG 1.1, `title` elements should be the first child element of their parent.

This element only includes global attributes

Usually, this element is created with:
      
```js
const title = parentElement.add('title')
```

It's possible to create it as a disconnected element with `gSVG('title')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/title) | [w3c](https://svgwg.org/svg2-draft/single-page.html#struct-TitleElement)

- **Parent elements**: [a](./a.md) | [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) |  [ellipse](./ellipse.md) | [feDiffuseLighting](./FilterPrimitives.md#feDiffuseLighting.md) | [feSpecularLighting](./FilterPrimitives.md#feSpecularLighting.md) | [filter](./filter.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [mpath](./mpath.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [radialGradient](./radialGradient.md) | [rect](./rect.md) | [set](./set.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [textPath](./textPath.md) | [tspan](./tspan.md) | [use](./use.md) | [view](./view.md).

