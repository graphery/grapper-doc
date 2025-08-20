---
outline: deep
---

# `$.svg`

You can access the **SVG Grapper Object** from the methods with `$.svg`. The `$` object is
accesible from the `<script type="methods"></script>` content as a global variable.

In **SVG Grapper Object** all are methods; thus, when you want to work with SVG attributes or
properties, you must use methods. For example, set an `id` to an SVG element is
`element.id('unique_id')` and for getting this identification it is necessary to use `element.id()`.

Grapper dynamically constructs the methods, which can chain together to make successive calls. Each
call returns the original object and can include one call after another.

<ClientOnly>
<grapper-view style="width: 200px;">
<svg g-on:init="create"></svg>
<g-script type="methods">
  function create() {
    $.svg
     .viewBox(0,0,100,100)
     .width('100%')
     .height('100%');
    $.svg.add('rect')
     .x(10)
     .y(10)
     .width(90)
     .height(90)
     .fill('#f06');
  }
</g-script>
</grapper-view>
<g-editor href="grapper-view"></g-editor>
</ClientOnly>

**Note**: chained call is possible when calling setter methods. When a getter method (then returns a
value) is called, the value property is returned, amd it is impossible to do more chained calls.

