# stop

The SVG `stop` element defines a color and its position to use on a gradient. This element is always a child of a `linearGradient` or `radialGradient` element.

Usually, this element is created with:
      
```js
const stop = parentElement.add('stop')
```

It's possible to create it as a disconnected element with `gSVG('stop')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/stop) | [w3c](https://svgwg.org/svg2-draft/single-page.html#pservers-StopElement)

## .stop-color()


```js
stop.stop_color( color )
```
Set this attribute defines the color of the gradient stop. It can be used as a CSS property.

- **argument**: `{string} color` The color value 

- **returns**: `{gSVGObject}` The original object


```js
const stop_color = element.stop_color();
```
Get the `stop-color` current value.

- **returns**: `{string}` 

## .stop-opacity()


```js
stop.stop_opacity( opacity )
```
Set this attribute defines the opacity of the gradient stop. It can be used as a CSS property.

- **argument**: `{number|string} opacity` The opacity value 

- **returns**: `{gSVGObject}` The original object


```js
const stop_opacity = element.stop_opacity();
```
Get the `stop-opacity` current value.

- **returns**: `{number|string}` 

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [linearGradient](./linearGradient.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [radialGradient](./radialGradient.md) | [svg](./svg.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [set](./set.md).

