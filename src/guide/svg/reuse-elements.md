---
outline: deep
---

# Re-use Elements

## defs

If you want to define an element, but don't need to show it directly, you can use `defs` as a group
of elements that have not been rendered in the SVG. It constitutes a group of non-visible
definitions useful for use in other locations.

::: code-group

```svg
<svg viewBox="0,0,100,20" width="200" height="40">
    <defs>
        <circle cx="5" cy="10" r="4" fill="#0000D8" id="circle2"></circle>
    </defs>
    <use href="#circle2" x="0"></use>
    <use href="#circle2" x="10"></use>
    <use href="#circle2" x="20"></use>
    <use href="#circle2" x="30"></use>
    <use href="#circle2" x="40"></use>
    <use href="#circle2" x="50"></use>
    <use href="#circle2" x="60"></use>
    <use href="#circle2" x="70"></use>
    <use href="#circle2" x="80"></use>
    <use href="#circle2" x="90"></use>
</svg>
```

```js
$.svg.viewBox(0, 0, 100, 20).width(200).height(40);
const defs = $.svg.add('defs');
const dot  = defs.add('circle').cx(5).cy(10).r(4).fill('#00D800');
for (let column = 0; column < 100; column += 10) {
  $.svg.add('use').href(dot.ref()).x(column);
}
```

:::

<svg viewBox="0,0,100,20" width="200" height="40">
  <defs>
    <circle cx="5" cy="10" r="4" fill="#0000D8" id="circle2"></circle>
  </defs>
  <use href="#circle2" x="0"></use>
  <use href="#circle2" x="10"></use>
  <use href="#circle2" x="20"></use>
  <use href="#circle2" x="30"></use>
  <use href="#circle2" x="40"></use>
  <use href="#circle2" x="50"></use>
  <use href="#circle2" x="60"></use>
  <use href="#circle2" x="70"></use>
  <use href="#circle2" x="80"></use>
  <use href="#circle2" x="90"></use>
</svg>

### In Grapper

In Grapper is widespread to use the `defs` element with `g-for` directive for duplicate the
content. All elements defined in the `defs` block are copied to each occurrence of the values
indicated in the `g-for` directive. In this way, lists of elements can be created based on the data.

```html
<grapper-view>
  <template>
    <svg viewBox="0,0,100,20" width="200" height="40">
      <g g-for="n of 10">
        <circle g-bind:cx="(n * 10) + 5" cy="10" r="4" fill="#0000D8" id="circle2"></circle>
      </g>
    </svg>
  </template>
</grapper-view>
```

<grapper-view>
  <svg viewBox="0,0,100,20" width="200" height="40">
    <g g-for="n of 10">
      <circle g-bind:cx="(n * 10) + 5" cy="10" r="4" fill="#0000D8" id="circle2"></circle>
    </g>
  </svg>
</grapper-view>


## use

The `use` element allows reusing elements into the $.svg. There are specific configuration with
attributes `x`, `y`, `width`, `height`, etc. The `href` enables the reference on the element to be
reused.

In this example, we have defined only one `circle` and nine `use` referenced to the first circle.
Each `use` has a `x` than translate the used element. When the `circle` changes, all `use`
change because those are linked.

::: code-group

```html

<svg viewBox="0 0 100 20" width="200" height="40">
  <circle id="circle-base" cx="5" cy="10" r="4" fill="#00D800"/>
  <use href="#circle-base" x="10"/>
  <use href="#circle-base" x="20"/>
  <use href="#circle-base" x="30"/>
  <use href="#circle-base" x="40"/>
  <use href="#circle-base" x="50"/>
  <use href="#circle-base" x="60"/>
  <use href="#circle-base" x="70"/>
  <use href="#circle-base" x="80"/>
  <use href="#circle-base" x="90"/>
</svg>
```

```js
$.svg.viewBox(0, 0, 100, 20).width(200).height(40);
const dot = $.svg.add('circle').cx(5).cy(10).r(4).fill('#00D800');
for (let column = 10; column < 100; column += 10) {
  $.svg.add('use').href(dot.ref()).x(column);
}
$.svg.attachTo('#example1');
```

:::

<svg viewBox="0 0 100 20" width="200" height="40">
  <circle id="circle-base" cx="5" cy="10" r="4" fill="#00D800"/>
  <use href="#circle-base" x="10"/>
  <use href="#circle-base" x="20"/>
  <use href="#circle-base" x="30"/>
  <use href="#circle-base" x="40"/>
  <use href="#circle-base" x="50"/>
  <use href="#circle-base" x="60"/>
  <use href="#circle-base" x="70"/>
  <use href="#circle-base" x="80"/>
  <use href="#circle-base" x="90"/>
</svg>

How the reference must be absolutely unique into the browser DOM and can have a collision between
two or more SVG included on the same page. Grapper Javascript Library provides an internal not
duplicated `id` for each element. This unique identification can be access with the
methods `.id()` (return the id) and `.ref()` (return `#` and the id concatenated).


## symbol

If you want to reuse a group of shapes, you can group them into a `symbol` element. It's very
similar to a `g`, but is not rende#00D800 directly and needs a `use` element to show its content.
The
`symbol` are usually created within `defs`, have own `viewBox` bound reference, and its size is
defined by `width` and `height`. Additionally, you can define the symbol's point as a reference for
positioning with `refX` and `refY`.

::: code-group

```svg

<svg viewBox="0,0,100,20" width="200" height="40">
    <defs>
        <symbol viewBox="0,0,10,10" width="10" height="10" id="symbol1">
            <circle cx="5" cy="5" r="5" fill="#00D800"/>
            <line x1="0" y1="5" x2="10" y2="5" stroke="#0000D8" stroke-width="2"/>
            <line x1="5" y1="0" x2="5" y2="10" stroke="#0000D8" stroke-width="2"/>
        </symbol>
    </defs>
    <use href="#symbol1" x="0" y="10"/>
    <use href="#symbol1" x="20" y="10"/>
    <use href="#symbol1" x="40" y="10"/>
    <use href="#symbol1" x="60" y="10"/>
    <use href="#symbol1" x="80" y="10"/>
</svg>
```

```js
$.svg.viewBox(0, 0, 100, 20).width(200).height(40);
const symbol = $.svg.add('defs').add('symbol').viewBox(0, 0, 10, 10).width(10).height(10);
const dot    = symbol.add('circle').cx(5).cy(5).r(5).fill('#00D800');
symbol.add('line').x1(0).y1(5).x2(10).y2(5).stroke('#0000D8').stroke_width(2);
symbol.add('line').x1(5).y1(0).x2(5).y2(10).stroke('#0000D8').stroke_width(2);
for (let column = 0; column < 100; column += 20) {
  $.svg.add('use').href(symbol.ref()).x(column).y(10);
}
```

:::

<svg viewBox="0,0,100,20" width="200" height="40">
  <defs>
    <symbol viewBox="0,0,10,10" width="10" height="10" id="symbol1">
      <circle cx="5" cy="5" r="5" fill="#00D800"/>
      <line x1="0" y1="5" x2="10" y2="5" stroke="#0000D8" stroke-width="2"/>
      <line x1="5" y1="0" x2="5" y2="10" stroke="#0000D8" stroke-width="2"/>
    </symbol>
  </defs>
  <use href="#symbol1" x="0" y="10"/>
  <use href="#symbol1" x="20" y="10"/>
  <use href="#symbol1" x="40" y="10"/>
  <use href="#symbol1" x="60" y="10"/>
  <use href="#symbol1" x="80" y="10"/>
</svg>

## marker

The elements `path`, `line`, `polyline`, and `polygon` accept markers at the beginning, at the end,
and vertices. These markers are commonly used to easily include dots, arrows, and other graphic
elements on the shapes.

The `markers` are usually created within `defs`, although they are not visualized by themselves.
They have their own `viewBox`, and their size is defined by `markerWidth` and `markerHeight`. It is
also possible to define with `refX`, and `refY` the marker's point will be used as a reference for
positioning into shape's points.

Finally, the `orient` attribute indicates how a marker is rotated when it is placed at its position
on the shape. It can be `'auto'`, `'auto-start-reverse'`, and an angle value.

You can define the markets into a path with the methods `marker-mid`, `marker-start`, and
`marker-end`. All these methods receive the structure `url(#id)` with the unique id defines on the
marker.

::: code-group

```svg

<svg viewBox="0,0,110,110" width="100" height="100">
    <defs>
        <marker viewBox="0,0,10,10" refX="5" refY="5" markerWidth="8" markerHeight="8"
                id="marker1">
            <circle cx="5" cy="5" r="5" fill="#00D800"/>
        </marker>
        <marker viewBox="0,0,10,10" refX="5" refY="5" markerWidth="10" markerHeight="10"
                id="marker2">
            <rect x="0" y="0" width="10" height="10" fill="#00D800"/>
        </marker>
        <marker viewBox="0,0,10,10" refX="5" refY="5" markerWidth="10" markerHeight="10"
                orient="auto-start-reverse" id="marker3">
            <path fill="#00D800" d="M0,0L10,5L0,10z"/>
        </marker>
    </defs>
    <polyline points="5,30,25,60,45,25,65,90,85,50,105,80" stroke="#0000D8" fill="none"
              marker-mid="url(#marker1)"
              marker-start="url(#marker2)"
              marker-end="url(#marker3)"/>
</svg>
```

```js
$.svg.viewBox(0, 0, 110, 110).width(100).height(100);
const defs = $.svg.add('defs');
const dot  = defs.add('marker').viewBox(0, 0, 10, 10).refX(5).refY(5)
                 .markerWidth(8).markerHeight(8);
dot.add('circle').cx(5).cy(5).r(5).fill('#00D800');

const square = defs.add('marker').viewBox(0, 0, 10, 10).refX(5).refY(5)
                   .markerWidth(10).markerHeight(10);
square.add('rect').x(0).y(0).width(10).height(10).fill('#00D800');

const arrow = defs.add('marker').viewBox(0, 0, 10, 10).refX(5).refY(5)
                  .markerWidth(10).markerHeight(10).orient('auto-start-reverse');
arrow.add('path').fill('#00D800').d.M(0, 0).L(10, 5).L(0, 10).z();

$.svg.add('polyline')
 .points([[5, 30], [25, 60], [45, 25], [65, 90], [85, 50], [105, 80]])
 .stroke('#0000D8').fill('none')
 .marker_mid(dot.url()).marker_start(square.url()).marker_end(arrow.url());
```

:::

<svg viewBox="0,0,110,110" width="100" height="100">
  <defs>
    <marker viewBox="0,0,10,10" refX="5" refY="5" markerWidth="8" markerHeight="8"
            id="marker1">
      <circle cx="5" cy="5" r="5" fill="#00D800"/>
    </marker>
    <marker viewBox="0,0,10,10" refX="5" refY="5" markerWidth="10" markerHeight="10"
            id="marker2">
      <rect x="0" y="0" width="10" height="10" fill="#00D800"/>
    </marker>
    <marker viewBox="0,0,10,10" refX="5" refY="5" markerWidth="10" markerHeight="10"
            orient="auto-start-reverse" id="marker3">
      <path fill="#00D800" d="M0,0L10,5L0,10z"/>
    </marker>
  </defs>
  <polyline points="5,30,25,60,45,25,65,90,85,50,105,80" stroke="#0000D8" fill="none"
            marker-mid="url(#marker1)" 
            marker-start="url(#marker2)"
            marker-end="url(#marker3)"/>
</svg>

The SVG Grapper API provides an internal not duplicated `id` for each element, and you can get this
with `.url()`. It returns an `url(#id)`. This method simplifies using the unique id when it is
necessary to include the `url()` pseudo-function.