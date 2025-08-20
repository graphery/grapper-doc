# image

The `image` SVG element includes images inside SVG documents. It can display raster image files or other SVG files.

The only image formats SVG software must support are JPEG, PNG, and other SVG files. Animated GIF behavior is undefined.

SVG files displayed with `image` are treated as an image: external resources aren't loaded, :visited styles aren't applied, and they cannot be interactive. To include dynamic SVG elements, try `use` with an external URL. To include SVG files and run scripts inside them, try `object` inside of `foreignObject`.

`image` implements the SVGImageElement interface.

Basic rendering of a PNG image in SVG:



Usually, this element is created with:
      
```js
const image = parentElement.add('image')
```

It's possible to create it as a disconnected element with `gSVG('image')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/image) | [w3c](https://svgwg.org/svg2-draft/single-page.html#embedded-ImageElement)

## .class()


```js
image.class( name )
```
Set assigns a class name or set of class names to an element. You may assign the same class name or names to any number of elements, however, multiple class names must be separated by whitespace characters.

- **argument**: `{string} name` The class name 

- **returns**: `{gSVGObject}` The original object


```js
const class = element.class();
```
Get the `class` current value.

- **returns**: `{string}` 

## .style()


```js
image.style( style )
```
Set the `style` attribute allows to style an element using CSS declarations. It functions identically to the `style` attribute in HTML.

- **argument**: `{string} style` The style value 

- **returns**: `{gSVGObject}` The original object


```js
const style = element.style();
```
Get the `style` current value.

- **returns**: `{string}` 

## .transform()


```js
image.transform( transform )
```
Set the `transform` attribute defines a list of transform definitions that are applied to an element and the element's children.

- **argument**: `{string} transform` The transform definition  

- **returns**: `{gSVGObject}` The original object


```js
const transform = element.transform();
```
Get the `transform` current value.

- **returns**: `{string}` 

## .x()


```js
image.x( x )
```
Set the `x` attribute defines a `x-axis` coordinate in the user coordinate system.

- **argument**: `{number|string} x` The x value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number|string}` 

## .y()


```js
image.y( y )
```
Set the `y` attribute defines a `y-axis` coordinate in the user coordinate system.

- **argument**: `{number|string} y` The y value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number|string}` 

## .width()


```js
image.width( w )
```
Set the `width` attribute defines the horizontal length of an element in the user coordinate system.

- **argument**: `{number|string} w` The width value (length or percentage) 

- **returns**: `{gSVGObject}` The original object


```js
const width = element.width();
```
Get the `width` current value.

- **returns**: `{number|string}` 

## .height()


```js
image.height( h )
```
Set the `height` attribute defines the vertical length of an element in the user coordinate system.

- **argument**: `{number|string} h` The height value (length or percentage)

- **returns**: `{gSVGObject}` The original object


```js
const height = element.height();
```
Get the `height` current value.

- **returns**: `{number|string}` 

## .href()


```js
image.href( imageURL )
```
Set the `href` attribute. It defines a URL referring to the image to render.

- **argument**: `{string} imageURL` Image URL

- **returns**: `{gSVGObject}` The original object


```js
const imageURL = element.href();
```
Get the `href` current value.

- **returns**: `{string}` The current image URL

## .preserveAspectRatio()


```js
image.preserveAspectRatio( aspectRatio )
```
Set the `preserveAspectRatio` attribute indicates how an element with a viewBox providing a given aspect ratio must fit into a viewport with a different aspect ratio.

- **argument**: `{string} aspectRatio` The aspect ratio value 

- **returns**: `{gSVGObject}` The original object


```js
const preserveAspectRatio = element.preserveAspectRatio();
```
Get the `preserveAspectRatio` current value.

- **returns**: `{string}` 

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

- **Child elements**: [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [desc](./desc.md) |  [metadata](./metadata.md) | [mpath](./mpath.md) | [set](./set.md) | [title](./title.md).

