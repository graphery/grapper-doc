# Manage SVG elements

To understand how Grapper SVG API hands the SVG DOM, we will cover an existing SVG and manage the 
elements easily with its specific methods. You can use `$.svg.querySelector()` with an `id` 
or other CSS selectors for getting the element and pass this to the `$.svg` constructor.

This is an example:

```xml
<svg id="example2" viewBox="0 0 250 250" width="250" height="250">
  <g>
    <g stroke-width="50">
      <g stroke="red">
        <line id="line1" x1="0" y1="250" x2="250" y2="0">
          <title>line 1</title>
        </line> 
        <g stroke-dasharray="10,2">
          <line id="line2" x1="0" y1="0" x2="250" y2="250">
            <title>line 2</title>
          </line>
        </g>
      </g>
    </g>
  </g>
</svg>
 ``` 

## children

You can get all firsts level nested elements with this method: `.children()`. This returns an
array of objects. Each object is a gySVG wrapped over the SVG element with all methods defined
in the library. 

```js
for (let elLevel1 of $.svg.children()) {
  for (let elLevel2 of elLevel1.children()) {
    //...
  }
}
```

## parent

All elements attached to the DOM have a parent, and this can be got with `.parent()` (a short 
synonym of `.parentElement()`). This returns an object created by gySVG over the original SVG 
element and has all methods defined in the library.

```js
const line = $.svg.querySelector('#line2');
const g    = line.parent();
//...
```

## sibling

The next and previous element in the same level can be taking with `.next()` (synonym
of `.nextElementSibling ()`) and `.previous()` (synonym of `.previousElementSibling ()`). These
methods, as all other library methods, return a wrapped object over the original element.

```js
const line1 = $.svg.first().first().first().first();
const g     = line1.next();
//...
```

## Search

You can get any nested element with `.querySelector()` or `.querySelectorAll()`. These methods
return an object, and an array of objects. Those objects are a Grapper wrapper over the original
elements with all library features. 

You can use all query selectors available without restrictions for searching deep elements into the
SVG structure.

```js
const lines = $.svg.querySelectorAll('line');
```

## Create elements

To add elements within the SVG we will use `.add()` passing as a parameter the name of the element
that we want to create. This method returns an object which we can use to set up all the
characteristics of the element we have created.

```js
const newLine = $.svg.add('line');
```

The SVG format nests its elements by creating a structure of elements that are contained within one
another. All objects returned by `.add()` can contain other objects by calling their `.add()` 
method. For example, we can create a `g` (group) element and include it inside a circle.

```js
const g      = $.svg.add('g').fill('#f06');
const circle = g.add('circle').cx(50).cy(50).r(25);
``` 

## Clone elements 

With the method `.cloneNode()` is possible copy an element and obtain a new un attached element. 
This new element must be attached into any SVG element with `.attachTo()`.  

```js
const line1 = $.svg.add('line');
const line2 = line1.clone();
line.attachTo(svg);
```

## Remove elements

If you need to un attach an element, you can use `.remove()` method:

```js
newLine.remove();
```

The element exists after this operation, but it is unlinked from the SVG. As a result, you can
use `.attachTo()` to add it to another element, or ignore it to delete it.