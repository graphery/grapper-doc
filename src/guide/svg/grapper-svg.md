# How use the SVG in Grapper

**Grapper** uses the SVG format and powers them by means of directives that allow you to define the
graphical elements and their characteristics by means of the data. 

## Template

The standard SVG format is enhanced with **attribute-based directives** that allows to generate
visualizations in an intuitive way, focusing efforts on design and data, avoiding the need for
complex development.

The directives than extend the SVG format are:

- [`g-bind`](../in-depth/templating/binding.md) (or the shorthand `:`): dynamically bind values to
  attributes and styles.
- [`g-for`](../in-depth/templating/lists.md): render the element `defs` multiple times based on the
  data.
- [`g-if`](../in-depth/templating/conditional.md): show an element conditionally.
- [`g-content`](../in-depth/templating/content.md): update the element content.
- [`g-on`](../in-depth/templating/events.md) (or the shorthand `@`): attach an event listener to the
  element.

After the `grapper-view` template engine has processed the directives the result is a fully valid SVG
that is natively displayed by the browser.

## API

Also, **Grapper** includes a powerful API to simplify the construction and manipulation of SVG
graphics from Javascript. The API is very close to the SVG structure.
You can access the **SVG Grapper API** from the methods included in the component with `$.svg`.
The `$` object is accesible from the `<script type="methods"></script>` content as a global
variable. You can also access it from outside the component with the `.svg` property that
the `grapper-view` exposes for use from external Javascript.

In **SVG Grapper API** all are methods; thus, when you want to work with SVG attributes or
properties, you must use methods. For example, set an `id` to an SVG element is
`element.id('unique_id')` and for getting this identification it is necessary to use `element.id()`.

Grapper dynamically constructs the methods, which can chain together to make successive calls. Each
call returns the original object and can include one call after another.

```js
$.svg
 .width('100%')
 .height('100%');
$.svg.add('rect')
 .x(10)
 .y(10)
 .width(90)
 .height(90)
 .fill('#f06');
```

**Note**: chained call is possible when calling setter methods. When a getter method (then returns a
value) is called, the value property is returned, amd it is impossible to do more chained calls.