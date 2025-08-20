# SVG Grapper API

**Grapper** includes a flexible API to simplify the construction and manipulation of SVG from
Javascript. The API is very close to the SVG structure, and is straightforward to understand if you
know the SVG format.

## From methods

You can access to the `$.svg` object from the `methods` functions This object is a wrapper of SVG
generated, and it is possible to query and manage the graph from Javascript with the Grapper SVG
API. The `$` object is accesible from the `<script type="methods"></script>` content as a global
variable.

## Outside the component

The SVG wrapper is also accessible from outside the component with the `.svg` property that the 
`g-component` exposes for manage the SVG generated from external Javascript.

## Goal: reduce code complexity

Why an SVG API? We have intensively created and manipulated SVG graphics from Grapper, as a 
result, we need a library small, fast, and close to the SVG format. The result is Graphery SVG API, 
a simple approach that provides an easy way to work with SVG without penalizing the project 
performance or size.

This code adds a rectangle into the SVG with vanilla Javascript:

```js
const svg = document.querySelector('svg');
const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
rect.setAttribute('x', '10');
rect.setAttribute('y', '10');
rect.setAttribute('width', '90');
rect.setAttribute('height', '90');
rect.setAttribute('fill', '#F06');
svg.appendChild(rect);
```

This is the same code with Grapper SVG API:

```js
$.svg.add('rect').x(10).y(10).width(90).height(90).fill('#f06');
```

## API style: method chaining

In **SVG Grapper API all are methods**; thus, when you want to work with SVG attributes or
properties, you must use methods. For example, set an `width` or `height` to an SVG element is
`element.width(100).height(100)`. If you need to get the value, you must call to the method 
without value, as `element.width()`.

Grapper dynamically constructs the method chain to make successive calls. When you call a setter 
method, it returns the original object and can include one call after another. Of course, chained 
call is only possible when calling setter methods. When a getter method (then returns a value) is 
called, the value property is returned.