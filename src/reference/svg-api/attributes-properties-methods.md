# Attributes, properties and methods

## Attributes

In Grapper the attributes are handled as methods where the hyphenated name (`-`) is replaced by the underscore (`_`).
The rest of the name stays the same.

| attribute name   | Grapper method     |
|------------------|-------------------------|
| `x`              | `.x()`                  |                               
| `viewBox`        | `.viewBox()`            |                   
| `stroke-width`   | `.stroke_width()`       |   

The call to one of these methods with parameters sets the attribute and returns the object for chained calls. The call 
without parameter returns the value of the attribute.

```js
const circle = $.svg.add('circle').cx(10).cy(10).r(5);
const radius = circle.r();
```


## Properties

In Grapper the properties are handled as methods with the original name:

| property name         | Grapper method     |
|-----------------------|-------------------------|
| `.tagName`            | `.tagName()`            |
| `.nextElementSibling` | `.nextElementSibling()` |
| `.attributes`         | `.attributes()`         | 

The call to one of these methods with parameters sets the property and returns the object for chained calls. The call
without parameter returns the value of the property.

```js
const circle = $.svg.add('circle').cx(10).cy(10).r(5);
console.log(circle.tagName());
```


## Methods

In Grapper the methods are handled without changes in its behavior, parameters, or return.

| method name           | Grapper method   |
|-----------------------|-----------------------|
| `.getScreenCTM()`     | `.getScreenCTM()`     |
| `.addEventListener()` | `.addEventListener()` |
| `.querySelector()`    | `.querySelector()`    |

These methods receive the same parameters and return the same values as the original method, except when:

- the return is `undefined`, the wrapped element is returned.
- the return is an SVG element or an array of SVG elements, those elements are converted into a Grapper wrapped object.

```js
ssvg.add('circle').cx(3).cy(3).r(1);
svg.add('circle').cx(6).cy(6).r(1);
svg.add('circle').cx(9).cy(9).r(1);
const circles = $.svg.querySelectorAll('circle'); // return an array with Grapper objects
```
