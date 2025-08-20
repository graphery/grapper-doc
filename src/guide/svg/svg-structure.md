---
outline: deep
---

# SVG structure

## svg

The `svg` tag is the root and nest other elements, define its coordinate system, or establish other
configuration parameters. The principal characteristics are:

## viewBox

The `viewBox` attribute defines the internal position and dimensions of an `svg`. The view box need
four parameters: `min-x`, `min-y`, `width`, `height`. These numbers specify a rectangle mapped
within the internal boundaries associated with the SVG element. All measures of nested elements take
these dimensions as a reference. Calling this method without parameters returns the current view box
value.

::: code-group

```svg
<svg viewBox="0 0 100 100"></svg>
```

```js
$.svg.viewBox(0, 0, 100, 100);
```

:::

::: warning note 
The attributes in SVG are case-sensitive. In this case, the `B` is uppercase, always must be 
written as `viewBox`.
:::

## width and height

These attributes define the viewport, that is, the image's size in the HTML page where they will be
embedded. The horizontal length is defined with `width` and the vertical length is defined
with `height`.

::: code-group

```svg
<svg width="100" height="100"></svg>
```

```js
$.svg.width(100).height(100);
```

:::

It's also possible to define these values by CSS using `width` and `height`.

::: code-group

```svg
<svg style="width: 100px; height: 100px"></svg>
```

```js
$.svg
 .style.width('100px')
 .style.height('100px');
```

:::

## Nested elements

Inside the `svg` you can include other SVG tags for create the graphic.

::: code-group

```svg
<svg viewBox="0 0 100 100" width="75" height="75">
    <circle cx="50" cy="50" r="50" fill="#f06"/>
</svg>
```

```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const circle = $.svg.add('circle').cx(50).cy(50).r(50).fill('#f06');
```

:::

<svg viewBox="0,0,100,100" width="75" height="75">
  <circle cx="50" cy="50" r="50" fill="#f06"/>
</svg>

In the SVG format, some elements accept other nested elements, creating a structure of nodes that
are contained within each other.

::: code-group

```svg
<svg viewBox="0,0,100,100" width="75" height="75">
    <g fill="#f06">
        <circle cx="50" cy="50" r="50"/>
    </g>
</svg>
```

```js
$.svg.viewBox(0, 0, 100, 100).width(75).height(75);
const g      = $.svg.add('g').fill('#f06');
const circle = g.add('circle').cx(50).cy(50).r(50);
```

:::

<svg viewBox="0,0,100,100" width="75" height="75">
    <g fill="#f06">
        <circle cx="50" cy="50" r="50"/>
    </g>
</svg>
