# radialGradient

The `radialGradient` element lets authors define radial gradients that can be applied to fill or stroke of graphical elements.

Usually, this element is created with:
      
```js
const radialGradient = parentElement.add('radialGradient')
```

It's possible to create it as a disconnected element with `gSVG('radialGradient')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/radialGradient) | [w3c](https://svgwg.org/svg2-draft/single-page.html#pservers-RadialGradientElement)

## .cx()


```js
radialGradient.cx ( x )
```
Set this attribute defines the x coordinate of the end circle of the radial gradient.

- **argument**: `{number|string} x` The x value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const cx = element.cx();
```
Get the `cx` current value.

- **returns**: `{number|string}` 

## .cy()


```js
radialGradient.cy( y )
```
Set this attribute defines the y coordinate of the end circle of the radial gradient.

- **argument**: `{number|string} y` The y value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const cy = element.cy();
```
Get the `cy` current value.

- **returns**: `{number}` 

## .fr()


```js
radialGradient.fr( radius )
```
Set this attribute defines the radius of the start circle of the radial gradient. The gradient will be drawn such that the 0% `stop` is mapped to the perimeter of the start circle.

- **argument**: `{number|string} radius` The radius value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const fr = element.fr();
```
Get the `fr` current value.

- **returns**: `{number|string}` 

## .fx()


```js
radialGradient.fx( x )
```
Set this attribute defines the x coordinate of the start circle of the radial gradient.

- **argument**: `{number|string} x` The x value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const fx = element.fx();
```
Get the `fx` current value.

- **returns**: `{number|string}` 

## .fy()


```js
radialGradient.fy( y )
```
Set this attribute defines the y coordinate of the start circle of the radial gradient.

- **argument**: `{number|string} y` The y value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const fy = element.fy();
```
Get the `fy` current value.

- **returns**: `{number}` 

## .gradientUnits()


```js
radialGradient.gradientUnits( unit )
```
Set this attribute defines the coordinate system for attributes `cx`, `cy`, `r`, `fx`, `fy`, and `fr`.

- **argument**: `{string} unit` Must be `userSpaceOnUse` | `objectBoundingBox`

- **returns**: `{gSVGObject}` The original object


```js
const gradientUnits = element.gradientUnits();
```
Get the `gradientUnits` current value.

- **returns**: `{string}` 

## .gradientTransform()


```js
radialGradient.gradientTransform( transformFunction )
```
Set this attribute provides additional transformation to the gradient coordinate system.

- **argument**: `{string} transformFunction` The transform function that affects to the element

- **returns**: `{gSVGObject}` The original object


```js
const gradientTransform = element.gradientTransform();
```
Get the `gradientTransform` current value.

- **returns**: `{string}` 

## .href()


```js
radialGradient.href( url )
```
Set this attribute defines a reference to another `linearGradient` element that will be used as a template.

- **argument**: `{string} url` A reference to a different `linearGradient` or `radialGradient` element

- **returns**: `{gSVGObject}` The original object


```js
const href = element.href();
```
Get the `href` current value.

- **returns**: `{string}` 

## .r()


```js
radialGradient.r( radius )
```
Set this attribute defines the radius of the end circle of the radial gradient. The gradient will be drawn such that the 100% `stop` is mapped to the perimeter of the end circle.

- **argument**: `{number|string} radius` The radius (length or percentage) of the end circle for the radial gradient

- **returns**: `{gSVGObject}` The original object


```js
const r = element.r();
```
Get the `r` current value.

- **returns**: `{number|string}` 

## .spreadMethod()


```js
radialGradient.spreadMethod( method )
```
Set this attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.

- **argument**: `{string} method` Must be `pad` | `reflect` |  `repeat` 

- **returns**: `{gSVGObject}` The original object


```js
const spreadMethod = element.spreadMethod();
```
Get the `spreadMethod` current value.

- **returns**: `{string}` 

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [animateTransform](./animateTransform.md) | [desc](./desc.md) | [metadata](./metadata.md) | [set](./set.md) | [stop](./stop.md) | [title](./title.md).

