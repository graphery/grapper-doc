# metadata

The `metadata` SVG element adds metadata to SVG content. Metadata is structured information about data. The contents of `metadata` should be elements from other XML namespaces such as RDF, FOAF, etc.

None

This element implements the SVGMetadataElement interface.



Usually, this element is created with:
      
```js
const metadata = parentElement.add('metadata')
```

It's possible to create it as a disconnected element with `gSVG('metadata')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/metadata) | [w3c](https://svgwg.org/svg2-draft/single-page.html#struct-MetadataElement)

- **Parent elements**: [a](./a.md) | [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) |  [ellipse](./ellipse.md) | [feDiffuseLighting](./FilterPrimitives.md#feDiffuseLighting.md) | [feSpecularLighting](./FilterPrimitives.md#feSpecularLighting.md) | [filter](./filter.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [mpath](./mpath.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [radialGradient](./radialGradient.md) | [rect](./rect.md) | [set](./set.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [textPath](./textPath.md) | [tspan](./tspan.md) | [use](./use.md) | [view](./view.md).

