# a

The `a` SVG element creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL. It is very similar to HTML’s `a` element.

SVG's `a` element is a container, which means you can create a link around text (like in HTML) but also around any shape.

Usually, this element is created with:
      
```js
const a = parentElement.add('a')
```

It's possible to create it as a disconnected element with `gSVG('a')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/a) | [w3c](https://svgwg.org/svg2-draft/single-page.html#linking-AElement)

## .href()


```js
a.href( url )
```
Set the URL or URL fragment the hyperlink points to.

- **argument**: `{string} url` The URL to link

- **returns**: `{gSVGObject}` The original object


```js
const url = element.href();
```
Get the `href` current value.

- **returns**: `{string}` The current URL

## .target()


```js
a.target( target )
```
Set where to display the linked URL.

- **argument**: `{string} target` Some of this values: '_self' | '_parent' | '_top' | '_blank' | <window_name>

- **returns**: `{gSVGObject}` The original object


```js
const target = element.target();
```
Get the `target` current value.

- **returns**: `{string}` The `target`.

## .type()


```js
a.type( mimetype )
```
Set a MIME `type` for the linked URL.

- **argument**: `{string} mimetype` A valid MIME Type

- **returns**: `{gSVGObject}` The original object


```js
const mimetype = element.type();
```
Get the `type` current value.

- **returns**: `{string}` The mimetype value

- **Parent elements**: [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [textPath](./textPath.md) | [tspan](./tspan.md).

- **Child elements**: [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [circle](./circle.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [desc](./desc.md) |  [ellipse](./ellipse.md) | [filter](./filter.md) | [foreignObject](./foreignObject.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [metadata](./metadata.md) | [mpath](./mpath.md) | [path](./path.md) | [pattern](./pattern.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [radialGradient](./radialGradient.md) | [rect](./rect.md) | [set](./set.md) | [stop](./stop.md) | [style](./style.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md) | [text](./text.md) | [title](./title.md) | [use](./use.md) | [view](./view.md).

