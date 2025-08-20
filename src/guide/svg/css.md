---
outline: deep
---

# Use CSS

## SVG style

Commonly, the SVG visual attributes have an equivalent CSS property, for example, `x`, `y`,
`with`, `height`, `stroke` or `fill` can be defined as style. For example, you can choose to
use  `stroke-width` SVG attribute or `stroke-width` style property.

## Inline style

You can define the style for each SVG element with the `style` attribute.

::: code-group

```svg
<svg viewBox="0,0,200,200" style="width: 75px; height:75px">
    <rect style="x: 10; y: 10; width: 180; height: 180; fill: #00D800"/>
</svg>
```

```js
$.svg.viewBox(0, 0, 200, 200).style('width: 75px; height: 75px');
$.svg.add('rect').style('x: 10px; y: 10px; width: 180px; height: 180px; fill: #00D800');
```

:::

<svg viewBox="0,0,200,200" style="width: 75px; height:75px">
  <rect style="x: 10; y: 10; width: 180; height: 180; fill: #00D800"/>
</svg>

You can define and obtain the style with the Grapper SVG API:

```js
$.svg.viewBox(0, 0, 200, 200).width(200).height(200);
$.svg.add('rect')
 .style.x('10px')
 .style.y('10px')
 .style.width('180px')
 .style.height('180px')
 .style.fill('red');
$.svg.attachTo('#example2');
```

```js
const stroke = element.style.stroke();
```

## style tag

It's possible to create it a `style` tag into the SVG and put CSS rules into this.

::: code-group

```svg
<svg viewBox="0,0,200,200" width="75" height="75">
    <style>
        #rectangle {
        fill : red;
        x : 5px;
        y : 5px;
        width : 180px;
        height : 180px;
        }
    </style>
    <rect id="rectangle"/>
</svg>
```

```js
$.svg.viewBox(0, 0, 200, 200).width(200).height(200);
$.svg.add('style').content(`
   #rectangle {
      fill   : red;
      x      : 5px;
      y      : 5px;
      width  : 180px;
      height : 180px;
   }`);
$.svg.add('rect').id('rectangle');
```

:::

::: warning Note

By default, the styles defined in the SVG affect the entire page and styles defined in the page 
affect the SVG, consequently, collisions and side effects may occur if the selectors used to match 
other elements. The `grapper-view` keep the style isolated into the `template` and avoid problems with
other styles or SVG elements.

:::


## class

You can use `class` attribute for reference to styles.

By the API, you can use the `.classList` object and its methods:

- `.classList.contains( class )` - returns true if the list contains the given class, otherwise
  false.
- `.classList.add( class )` - adds the specified class.
- `.classList.remove( class )` - removes the specified class.
- `.classList.replace( oldClass, newClass)` - replaces oldClass with newClass.
- `.classList.toggle( class )` - removes class from if it exists or adds class if it doesn't.

::: code-group

```svg
<svg viewBox="0,0,200,200" width="200" height="200">
    <style>
        .rectangle {
          cursor : pointer;
          x : 5px;
          y : 5px;
          width : 180px;
          height : 180px;
        }
        .alarm {
            fill : red;
        }
        .regular {
            fill : blue;
        }
        .message {
          font-family : monospace;
          font-size : 10px;
          fill : white;
        }
    </style>
    <rect class="rectangle alarm"></rect>
    <text x="10" y="100" class="message">Alarm</text>
</svg>
```

```js
$.svg.viewBox(0, 0, 200, 200).width(200).height(200);
$.svg.add('style').content(`
   .rectangle {
      cursor : pointer;
      x      : 5px;
      y      : 5px;
      width  : 180px;
      height : 180px;
   }
   .alarm {
     fill: red;
   }
   .regular {
     fill: blue;
   }
   .message {
     font-family : monospace;
     font-size   : 10px;
     fill        : white;
   }
   `);
const rect = $.svg.add('rect')
              .classList.add('rectangle')
              .classList.add('regular');
$.svg.add('text')
      .x(10)
      .y(100)
      .content('Alarm')
      .classList.add('message');
```

:::

