# use

The `use` element takes nodes from within the SVG document, and duplicates them somewhere else. The effect is the same as if the nodes were deeply cloned, and pasted where the use element is.

Usually, this element is created with:
      
```js
const use = parentElement.add('use').href('#reference')
```

It's possible to create it as a disconnected element with `gSVG('use')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/use) | [w3c](https://svgwg.org/svg2-draft/single-page.html#struct-UseElement)

## .href()


```js
use.href( ref )
```
Set the URL to an element/fragment that needs to be duplicated. Usually it is a reference to an `id` value as `#idetificator`.

- **argument**: `{string} ref` Referente the element to be duplicated

- **returns**: `{gSVGObject}` The original object


```js
const href = element.href();
```
Get the `href` current value.

- **returns**: `{string}` Reference to the duplicated element

## .x()


```js
use.x( x )
```
Set the `x` coordinate of the use element.

- **argument**: `{number} x` The `x` value 

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number}` 

## .y()


```js
use.y( y )
```
Set the `y` coordinate of the use element.

- **argument**: `{number} y` The `y` value 

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number}` 

## .width()


```js
use.width( width )
```
Set the `width` of the use element.

- **argument**: `{number} width` The `width` value 

- **returns**: `{gSVGObject}` The original object


```js
const width = element.width();
```
Get the `width` current value.

- **returns**: `{number}` 

## .height()


```js
use.height( height )
```
Set the `height` of the use element.

- **argument**: `{number} height` The `height` value 

- **returns**: `{gSVGObject}` The original object


```js
const height = element.height();
```
Get the `height` current value.

- **returns**: `{number}` 

- **Parent elements**: [a](./a.md) | [clipPath](./clipPath.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [desc](./desc.md) |  [metadata](./metadata.md) | [mpath](./mpath.md) | [set](./set.md) | [title](./title.md).

