---
outline: deep
---

# Dynamic SVG Templating

The approach of using a dynamic SVG template brings together the power of Scalable Vector Graphic 
(SVG), which is a declarative language, with the use of directives to instruct how the graphic 
should be constructed from the data. The SVG format is enhanced by way of attribute-based 
directives which create a more intuitive way of generating visual graphics. By using these 
directives, one can focus more on the design and data without the need to get into complex development.

Here are some of the main directives used:
- [`g-bind:`](#g-bind) (or its shorthand version `:`): This directive is used to bind
  values to attribute dynamically.
- [`g-for`](#g-for): This directive allows the block element to be rendered
  multiple times based on the given data.
- [`g-if`](#g-if): With this, an element can be shown conditionally.
- [`g-content`](#g-content): This directive is used to update the content of an element.

Here is an example to better understand their use. In this example, instead of creating three
separate `circle` tags, the `g-for` directive is used in a defs element to generate the three 
circles dynamically. This is a simple example demonstrating the basic operational understanding of 
the SVG template model and directives.

<ClientOnly>
<grapper-view id="example">
  <svg viewBox="0 0 100 100" width="100"  height="100">
    <g g-for="x of data.circles">
      <circle 
        cx="50" 
        cy="50" 
        g-bind:r="(x + 1) * (48 / circles)"
        fill="none" 
        stroke="black" 
        stroke-width="1"/>
    </g>
  </svg>
  <g-script type="data">
    {circles: 3}
  </g-script>
</grapper-view>
<g-editor href="#example" title="concentric circles" lines-highlight="4;8"></g-editor>
</ClientOnly>

In the following, we will describe how it works each directive:

## `g-bind:`

The `g-bind:` directive, or the abbreviation `:`, followed by an attribute name, dynamically binds 
data values to attributes. 
That is, it assigns a value to an attribute dynamically.

In this example, the circle radius (`r` attribute) is defined with `size` data value with 
`g-bind:r="size"`.
When we change the value of the slider, the `data.size` value of the component is updated and the 
change is reflected in the chart.

<ClientOnly>
<div id="circle-example">
<grapper-view id="circle">
  <svg viewBox="0 0 100 100" width="100">
    <circle
      g-bind:r="size"
      cx="50" 
      cy="50" 
      fill="red"/>
  </svg>
  <g-script type="data">
    {size: 25}
  </g-script>
</grapper-view>
<p>
<label>Change the size:
  <input type="range" max="50" value="25"
         oninput="document.querySelector('#circle').data.size = this.value">
  </label>
</p>
</div>
<g-editor href="#circle-example" title="dynamic radius" lines-highlight="4"></g-editor>
</ClientOnly>

> See more about [`g-bind`](../in-depth/templating/binding.md)

## `g-for`

Renders a block defined with the `defs` tag multiple times depending on the data. The directive
dynamically evaluates a `case of value` or `(case, index) of value` expression. Value can be a 
number or an array.

In this example, a number of `circles` is displayed.

In this example, a set of circles are displayed. 
As many circles will be shown as the `circles` value has.  

<ClientOnly>
<div id="circles-example-2">
<grapper-view id="circles">
  <svg viewBox="0 0 100 100" width="100">
    <g g-for="n of circles">
      <circle
        r="4"
        g-bind:cx="((n % 10) * 10) + 5" 
        g-bind:cy="(Math.floor(n / 10) * 10) + 5" 
        fill="red"/>
    </g>
  </svg>
  <g-script type="data">
    {circles: 40}
  </g-script>
</grapper-view>
<p>
<label>Change the number of circles:
  <input type="range" max="100" value="40"
  oninput="document.querySelector('#circles').data.circles = Number(this.value)">
  </label>
</p>
</div>
<g-editor href="#circles-example-2" title="number of items" lines-highlight="4"></g-editor>
</ClientOnly>

> See more about [`g-for`](../in-depth/templating/lists.md)

## `g-if`

Show or hide an element conditionally by an expression based on the data.

In this example, the odd and even circles are displayed if the values `odd` and `event` are true or
false.
The values are modified by two checkboxes that update the `data` property of `grapper-view`.

<ClientOnly>
<div id="odd-even-example">
  <grapper-view id="odd-even">
    <svg viewBox="0 0 100 100" width="100">
      <g g-for="n of 100">
        <circle
          g-if="((n + 1) % 2 === 0 && even) || ((n + 1) % 2 !== 0 && odd)"
          r="4"
          g-bind:cx="((n % 10) * 10) + 5" 
          g-bind:cy="(Math.floor(n / 10) * 10) + 5" 
          fill="red"/>
      </g>
    </svg>
    <g-script type="data">
      {
        odd: true,
        even: true
      }
    </g-script>
  </grapper-view>
  <p>
    <label>
      <input type="checkbox" checked
             oninput="document.querySelector('#odd-even').data.odd = this.checked">
      show odd
    </label>
    <label>
      <input type="checkbox" checked
             oninput="document.querySelector('#odd-even').data.even = this.checked">
      show even
    </label>
  </p>
</div>
<g-editor href="#odd-even-example" title="conditional items" lines-highlight="6"></g-editor>
</ClientOnly>

> See more about [`g-if`](../in-depth/templating/conditional.md).

## `g-content`

Include data values as the element content.
This attribute allows you to dynamically include text or code snippets very easily.

In this example, the text content is defined with `title` and `subtitle` data values. 
They are dynamically updated by two inputs.

<ClientOnly>
<div id="content-example">
  <grapper-view id="content">
    <svg viewBox="0 0 100 100" width="100">
      <rect x="0" y="0" width="100" height="100" fill="green"/>
      <text style="font-size:20px; fill:white"
            g-content="title"
            x="5" 
            y="40"></text>
      <text style="font-size:12px; fill:white"
            g-content="subtitle"
            x="5" 
            y="65"></text>
    </svg>
    <g-script type="data">
      {
        title: 'hello',
        subtitle: 'world'
      }
    </g-script>
  </grapper-view>
  <p>
    <label>title: 
      <input type="text" value="hello"
             oninput="document.querySelector('#content').data.title = this.value">
    </label>
  </p>
  <p>
    <label>subtitle: 
      <input type="text" value="world"
             oninput="document.querySelector('#content').data.subtitle = this.value">
    </label>
  </p>
</div>
<g-editor href="#content-example" title="dynamic content" lines-highlight="6;12"></g-editor>
</ClientOnly>

> See more about [`g-content`](../in-depth/templating/content). 
