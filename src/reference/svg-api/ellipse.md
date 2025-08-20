# ellipse

The `ellipse` element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.

Usually, this element is created with:
      
```js
const ellipse = parentElement.add('ellipse')
```

It's possible to create it as a disconnected element with `gSVG('ellipse')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/ellipse) | [w3c](https://svgwg.org/svg2-draft/single-page.html#shapes-EllipseElement)

## .cx()


```js
ellipse.cx( x )
```
Set the x-axis position of the ellipse.

- **argument**: `{number|string} x` x-axis length or percentage

- **returns**: `{gSVGObject}` The original object


```js
const x = element.cx();
```
Get the `cx` current value.

- **returns**: `{number|string}` current x-axis value

## .cy()


```js
ellipse.cy( y )
```
Set the y-axis position of the ellipse.

- **argument**: `{number|string} y` y-axis length or percentage

- **returns**: `{gSVGObject}` The original object


```js
const y = element.cy();
```
Get the `cy` current value.

- **returns**: `{number|string}` current y-axis value

## .rx()


```js
ellipse.rx( x )
```
Set the radius of the ellipse on the x-axis.

- **argument**: `{number|string} x` x-axis radius length or percentage

- **returns**: `{gSVGObject}` The original object


```js
const x = element.rx();
```
Get the `rx` current value.

- **returns**: `{number|string}` current x-axis radius value

## .ry()


```js
ellipse.ry( y )
```
Set the radius of the ellipse on the y-axis.

- **argument**: `{number|percentage} y` y-axis radius length or percentage

- **returns**: `{gSVGObject}` The original object


```js
const ry = element.ry();
```
Get the `ry` current value.

- **returns**: `{number|string}` current y-axis radius value

## .pathLength()


```js
const length = element.pathLength();
```
Get the total length for the path of this figure, in user units.

- **returns**: `{number}` total path length

- **Parent elements**: [a](./a.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [desc](./desc.md) |  [metadata](./metadata.md) | [mpath](./mpath.md) | [set](./set.md) | [title](./title.md).

