# linearGradient

The `linearGradient` element lets authors define linear gradients that can be applied to fill or stroke of graphical elements.

Usually, this element is created with:
      
```js
const linearGradient = parentElement.add('linearGradient')
```

It's possible to create it as a disconnected element with `gSVG('linearGradient')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/linearGradient) | [w3c](https://svgwg.org/svg2-draft/single-page.html#pservers-LinearGradientElement)

## .gradientUnits()


```js
linearGradient.gradientUnits( unit )
```
Set this attribute defines the coordinate system for attributes `x1`, `x2`, `y1`, `y2`.

- **argument**: `{string} unit` Must be `userSpaceOnUse` | `objectBoundingBox`

- **returns**: `{gSVGObject}` The original object


```js
const gradientUnits = element.gradientUnits();
```
Get the `gradientUnits` current value.

- **returns**: `{string}` 

## .gradientTransform()


```js
linearGradient.gradientTransform( transformFunction )
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
linearGradient.href( referenceToLinearGradient )
```
Set the `href` attribute. It defines a reference to another `linearGradient` element that will be used as a template.

- **argument**: `{string} referenceToLinearGradient` URL to another LinearGradient

- **returns**: `{gSVGObject}` The original object


```js
const href = linearGradient.href();
```
Get the `href` current value.

- **returns**: `{string}` URL to another LinearGradient

## .spreadMethod()


```js
linearGradient.spreadMethod( method )
```
Set this attribute indicates how the gradient behaves if it starts or ends inside the bounds of the shape containing the gradient.

- **argument**: `{string} method` Must be `pad` | `reflect` |  `repeat`

- **returns**: `{gSVGObject}` The original object


```js
const spreadMethod = element.spreadMethod();
```
Get the `spreadMethod` current value.

- **returns**: `{string}` 

## .x1()


```js
linearGradient.x1( x1 )
```
Set this attribute defines the x coordinate of the starting point of the vector gradient along which the linear gradient is drawn.

- **argument**: `{number|string} x1` The x1 value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const x1 = element.x1();
```
Get the `x1` current value.

- **returns**: `{number|string}` 

## .x2()


```js
linearGradient.x2( x2 )
```
Set this attribute defines the x coordinate of the ending point of the vector gradient along which the linear gradient is drawn.

- **argument**: `{number|string} x2` The x2 value (length or percentage)

- **returns**: `{gSVGObject}` The original object


```js
const x2 = element.x2();
```
Get the `x2` current value.

- **returns**: `{number|string}` 

## .y1()


```js
linearGradient.y1( y1 )
```
Set this attribute defines the y coordinate of the starting point of the vector gradient along which the linear gradient is drawn.

- **argument**: `{number|string} y1` The y1 value (length or percentage)

- **returns**: `{gSVGObject}` The original object


```js
const y1 = element.y1();
```
Get the `y1` current value.

- **returns**: `{number|string}` 

## .y2()


```js
linearGradient.y2( y2 )
```
Set this attribute defines the y coordinate of the ending point of the vector gradient along which the linear gradient is drawn.

- **argument**: `{number|string} y2` The y2 value (length or percentage) ` 

- **returns**: `{gSVGObject}` The original object


```js
const y2 = element.y2();
```
Get the `y2` current value.

- **returns**: `{number|string}` 

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [animateTransform](./animateTransform.md) | [desc](./desc.md) | [metadata](./metadata.md) | [set](./set.md) | [stop](./stop.md) | [title](./title.md).

