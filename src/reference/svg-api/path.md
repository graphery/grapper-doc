# path

The `path` SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.

Usually, this element is created with:
      
```js
const path = parentElement.add('path')
```

It's possible to create it as a disconnected element with `gSVG('path')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/path) | [w3c](https://svgwg.org/svg2-draft/single-page.html#paths-PathElement)

## .d()


```js
path.d( value )
```
Set this attribute defines the shape of the path.

- **argument**: `{Array|string} value` The `d` value 

- **returns**: `{gSVGObject}` The original object


```js
const d = element.d();
```
Get the `d` current value.

- **returns**: `{Array|string}` 

## .pathLength()


```js
path.pathLength( length )
```
Set this attribute lets authors specify the total length for the path, in user units.

- **argument**: `{number} length` The path length

- **returns**: `{gSVGObject}` The original object


```js
const pathLength = element.pathLength();
```
Get the `pathLength` current value.

- **returns**: `{number}` 

- **Parent elements**: [a](./a.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [desc](./desc.md) |  [metadata](./metadata.md) | [mpath](./mpath.md) | [set](./set.md) | [title](./title.md).

