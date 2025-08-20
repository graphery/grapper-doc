# Wrapper

## Attributes

In Grapper SVG API, the attributes are handled as methods. The call to one of these methods with 
parameter value, sets the attribute and returns the object for chained calls. The call without 
parameter returns the value of the attribute.

Where the attribute has a hyphenated name (`-`), this is replaced by the underscore (`_`). The rest
of the name stays the same.

| attribute name | Grapper method   |
|----------------|-------------------|
| `x`            | `.x()`            |                               
| `viewBox`      | `.viewBox()`      |                   
| `stroke-width` | `.stroke_width()` |   


```js
const circle = $.svg.add('circle').cx(10).cy(10).r(5).stroke('red').stroke_width(1);
const radius = circle.r();
```


## Properties

In Grapper SVG API, the properties are handled as methods with the original name. The call to one
of these methods with parameters sets the property and returns the object for chained calls. The
call without parameter returns the value of the property.

| property name         | Grapper method         |
|-----------------------|-------------------------|
| `.tagName`            | `.tagName()`            |
| `.nextElementSibling` | `.nextElementSibling()` |
| `.attributes`         | `.attributes()`         | 


```js
const circle = $.svg.add('circle').cx(10).cy(10).r(5);
console.log(circle.tagName());
```

## Methods

In Grapper SVG API, the native methods are handled without changes in its behavior and parameters.
These methods return the same values as the original method, except when:

- the original return is `undefined`, the wrapped element is returned.
- the return is an SVG element or an array of SVG elements, those elements are converted into a 
  Grapper SVG wrapped object.

| method name           | Grapper method   |
|-----------------------|-----------------------|
| `.getScreenCTM()`     | `.getScreenCTM()`     |
| `.addEventListener()` | `.addEventListener()` |
| `.querySelector()`    | `.querySelector()`    |


```js
ssvg.add('circle').cx(3).cy(3).r(1);
svg.add('circle').cx(6).cy(6).r(1);
svg.add('circle').cx(9).cy(9).r(1);
const circles = $.svg.querySelectorAll('circle'); // return an array with Grapper SVG objects
```
