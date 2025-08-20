# mpath

The `mpath` sub-element for the `animateMotion` element provides the ability to reference an external `path` element as the definition of a motion path.

This element implements the SVGMPathElement interface.



Usually, this element is created with:
      
```js
const mpath = parentElement.add('mpath')
```

It's possible to create it as a disconnected element with `gSVG('mpath')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/mpath) | [w3c](https://svgwg.org/specs/animations/#MPathElement)

## .href()


```js
pattern.href( URLPath )
```
Set the `href` attribute. It defines a URL referring to the `path` element or basic shape which defines the motion path.

- **argument**: `{string} URLPath` URL to a path or other basic shape

- **returns**: `{gSVGObject}` The original object


```js
const href = pattern.href();
```
Get the `href` current value.

- **returns**: `{string}` Current URL to a path or other basic shape

- **Parent elements**: [a](./a.md) | [animateMotion](./animateMotion.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [ellipse](./ellipse.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [marker](./marker.md) | [mask](./mask.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [rect](./rect.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [use](./use.md).

- **Child elements**: [desc](./desc.md) | [metadata](./metadata.md) | [title](./title.md).

