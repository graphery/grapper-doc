# g

The `g` SVG element is a container used to group other SVG elements.

Transformations applied to the `g` element are performed on its child elements, and its attributes are inherited by its children. It can also group multiple elements to be referenced later with the `use` element.

This element only includes global attributes

Usually, this element is created with:
      
```js
const g = parentElement.add('g')
```

It's possible to create it as a disconnected element with `gSVG('g')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/g) | [w3c](https://svgwg.org/svg2-draft/single-page.html#struct-GElement)

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

- **Child elements**: [a](./a.md) | [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [desc](./desc.md) |  [ellipse](./ellipse.md) | [filter](./filter.md) | [foreignObject](./foreignObject.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [metadata](./metadata.md) | [mpath](./mpath.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [radialGradient](./radialGradient.md) | [rect](./rect.md) | [set](./set.md) | [stop](./stop.md) | [style](./style.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [title](./title.md) | [use](./use.md) | [view](./view.md).

