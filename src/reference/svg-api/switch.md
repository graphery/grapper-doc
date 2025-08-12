# switch

The `switch` SVG element evaluates any requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then renders the first child where these attributes evaluate to true. Other direct children will be bypassed and therefore not rendered. If a child element is a container element, like `g`, then its subtree is also processed/rendered or bypassed/not rendered.

This element implements the SVGSwitchElement interface.

This example demonstrates showing different text content depending on the browser's language settings. The switch element will display the first of its child elements whose systemLanguage attribute matches the user's language, or the fallback element with no systemLanguage attribute if none of them match.



Usually, this element is created with:
      
```js
const switcher = parentElement.add('switch')
```

It's possible to create it as a disconnected element with `gSVG('switch')` and attach it to the SVG document with `.attachTo()`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/switch) | [w3c](https://svgwg.org/svg2-draft/single-page.html#struct-SwitchElement)

## .class()


```js
switch.class( name )
```
Set assigns a class name or set of class names to an element. You may assign the same class name or names to any number of elements, however, multiple class names must be separated by whitespace characters.

- **argument**: `{string} name` The CSS class name 

- **returns**: `{gSVGObject}` The original object


```js
const class = element.class();
```
Get the `class` current value.

- **returns**: `{string}` 

## .style()


```js
switch.style( style )
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
switch.transform( definition )
```
Set the `transform` attribute defines a list of transform definitions that are applied to an element and the element's children.

- **argument**: `{string} defintion` The transform definition 

- **returns**: `{gSVGObject}` The original object


```js
const transform = element.transform();
```
Get the `transform` current value.

- **returns**: `{string}` 

- **Parent elements**: [a](./a.md) | [defs](./defs.md) | [g](./g.md) | [marker](./marker.md) | [mask](./mask.md) | [pattern](./pattern.md) | [svg](./svg.md) | [switch](./switch.md) | [symbol](./symbol.md).

- **Child elements**: [a](./a.md) | [animate](./animate.md) | [animateMotion](./animateMotion.md) | [animateTransform](./animateTransform.md) | [circle](./circle.md) | [desc](./desc.md) |  [ellipse](./ellipse.md) | [foreignObject](./foreignObject.md) | [g](./g.md) | [image](./image.md) | [line](./line.md) | [metadata](./metadata.md) | [mpath](./mpath.md) | [path](./path.md) | [polygon](./polygon.md) | [polyline](./polyline.md) | [rect](./rect.md) | [set](./set.md) | [svg](./svg.md) | [switch](./switch.md) | [text](./text.md) | [title](./title.md) | [use](./use.md).

