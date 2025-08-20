---
outline: deep
---

# Text Element

## Create a new text element

The element `text` defines a scalable text element into the graphic internal dimensions. This method
is required when you want to create text element inside the SVG component, as it won't be rendered
otherwise even if the display property is set.

The text element admits several attributes:

- `x` and `y` define the starting point of the text baseline.
- `dx` and `dy` change the element position from a previous element.

In SVG source the text is include into the tag body:

```svg

<text x="10" y="10">hello</text>
```

In the SVG Grapper API we can use the method `.content("hello")` to includes the content text in
the element.

::: code-group

```svg

<svg viewBox="0 0 100 100" width="75" height="75">
    <text x="0" y="40" style="font-family: sans-serif; font-size: 18px;">Hello, word</text>
</svg>
```

```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
const text = $.svg.add('text')
              .x(0).y(40).content('Hello, word')
              .style.fontFamily('sans-serif').style.fontSize(18);
```

:::

<svg viewBox="0 0 100 100" width="75" height="75">
  <text x="0" y="40" style="font-family: sans-serif; font-size: 18px;">Hello, word</text>
</svg>

## Size and color

Aside from the basic attributes, the element `text` accepts several other attributes that allows you
to change its appearance. These include elements such as `style`, `class` with all of its values, as
well as some others like `fill`, `stroke` or `stroke-width`.

::: code-group

```svg

<svg viewBox="0 0 100 100" width="75" height="75">
    <text x="0" y="40" fill="none" stroke="#0000D8" stroke-width="1"
          style="font-family: sans-serif; font-size: 50px;">A
    </text>
</svg>
```

```js
$.svg.viewBox('0 0 100 100').width(75).height(75);
const text = $.svg.add('text')
              .x(0).y(40).content('A')
              .style.fontFamily('sans-serif').style.fontSize(50)
              .fill('none').stroke('#0000D8').stroke_width(1);
```

:::

<svg viewBox="0 0 100 100" width="75" height="75">
 <text x="0" y="40" fill="none" stroke="#0000D8" stroke-width="1" 
       style="font-family: sans-serif; font-size: 50px;">A</text>
</svg>

## Position

The position of the text is defined by the width `x` and `y`. By default, this is the start and
baseline text position, but you can adjust the exact position with these attributes:
`dominant-baseline`, and `text-anchor`.

::: code-group

```svg

<svg viewBox="0,0,500,100" width="500" height="100">
    <line x1="0" x2="250" y1="50" y2="50" stroke="grey" stroke-dasharray="5"/>
    <line x1="400" x2="400" y1="0" y2="100" stroke="grey" stroke-dasharray="5"/>
    <g font-size="15" font-family="sans-serif">
        <text x="2" y="50">baseline</text>
        <text x="100" y="50" dominant-baseline="middle">middle</text>
        <text x="190" y="50" dominant-baseline="hanging">hanging</text>
        <text x="400" y="15">start</text>
        <text x="400" y="50" text-anchor="middle">middle</text>
        <text x="400" y="85" text-anchor="end">end</text>
    </g>
</svg>
```

```js
$.svg.viewBox(0, 0, 500, 100).width(500).height(100);

$.svg.add('line').x1(0).x2(250).y1(50).y2(50).stroke('grey').stroke_dasharray(5);
$.svg.add('line').x1(400).x2(400).y1(0).y2(100).stroke('grey').stroke_dasharray(5);

const g = $.svg.add('g').font_size(15).font_family('sans-serif');

g.add('text').x(2).y(50).content('baseline');
g.add('text').x(100).y(50).content('middle').dominant_baseline('middle');
g.add('text').x(190).y(50).content('hanging').dominant_baseline('hanging');

g.add('text').x(400).y(15).content('anchor');
g.add('text').x(400).y(50).content('middle').text_anchor('middle');
g.add('text').x(400).y(85).content('end').text_anchor('end');
```

:::

<svg viewBox="0,0,500,100" width="500" height="100">
    <line x1="0" x2="250" y1="50" y2="50" stroke="grey" stroke-dasharray="5"/>
    <line x1="400" x2="400" y1="0" y2="100" stroke="grey" stroke-dasharray="5"/>
    <g font-size="15" font-family="sans-serif">
        <text x="2" y="50">baseline</text>
        <text x="100" y="50" dominant-baseline="middle">middle</text>
        <text x="190" y="50" dominant-baseline="hanging">hanging</text>
        <text x="400" y="15">start</text>
        <text x="400" y="50" text-anchor="middle">middle</text>
        <text x="400" y="85" text-anchor="end">end</text>
    </g>
</svg>

## tspan

`tspan` defines a subtext within a text element or another tspan element. It allows for adjustment
of the style only in a part of the text content.

::: code-group

```svg

<svg viewBox="0 0 100 100" width="100" height="100">
    <text x="10" y="50">
        <tspan style="fill: red; font-size: 20px;">&lt;</tspan>
        tag
        <tspan style="fill: red; font-size: 20px;">&gt;</tspan>
    </text>
</svg>
```

```js
$.svg.viewBox('0 0 100 100').width(100).height(100);
const text = $.svg.add('text').x(10).y(50);
text.add('tspan').style.fill('red').style.fontSize(20).content('&lt;');
text.content(text.content() + 'tag');
text.add('tspan').style.fill('red').style.fontSize(20).content('&gt;');
```

:::

<svg viewBox="0 0 100 100" width="100" height="100">
    <text x="10" y="50">
        <tspan style="fill: red; font-size: 20px;">&lt;</tspan>
        tag
        <tspan style="fill: red; font-size: 20px;">&gt;</tspan>
    </text>
</svg>

### In Grapper

In Grapper is widespread to use the `g-content` directive for add text to `span` and `text`
elements. Also, we can use the SVG Grapper API and use the method `.content()`.
