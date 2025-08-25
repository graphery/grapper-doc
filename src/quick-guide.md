# Grapper Quick Guide

## 1. What is Grapper?

**Grapper** is an **open-source web component** optimized for **data visualization** (**data-viz**),
providing a way to create interactive and adaptive visual elements directly within a web
application. Built as a true micro-framework, it allows developers and designers to use a
declarative syntax focused specifically on the construction and dynamic manipulation of graphics.

### Core principles

- **Microframework**: Designed to be straightforward and easy to use, it has a minimal footprint yet
  offers powerful features in a tiny package.

- **Data visualization**: Optimized for data-viz, the rendering engine automatically and quickly
  updates graphics when data changes.

- **Native**: Built as a web component on top of the native SVG element, includes powerful
  directives for dynamic graph construction without compilation or transpilation processes.

### Main use cases

Grapper can be used in any type of project, from prototypes to complete web applications. It allows
you to create fully customized and data-adaptive visualizations. It is therefore a low-level
solution that maximizes the creativity and productivity of developers and designers to build:

- personalized visualizations
- dashboard components
- fast prototypes
- data art


## 2. Installation & Quick Start

### Import via NPM or CDN

To get started with **Grapper**:

1. Install the framework using npm:

 ```bash
 npm install grapper
 ```

2. Load **Grapper** into your project with:

 ```html
<script src="node_modules/grapper/dist/view.js"></script>
 ```

Also, you can use **Grapper** from a CDN without installing anything on your computer:

```html
<script src="https://cdn.jsdelivr.net/npm/grapper/dist/view.js"></script>
 ```

### Create your first `<grapper-view>`

The following example demonstrates how to create a simple bar chart visualization using
`grapper-view`. The chart dynamically renders lines based on the values and colors specified in the
data.

```html
<grapper-view id="example-starter">
  <template>
    <svg viewBox="0 0 200 100" width="200px" height="100px">
      <g stroke-width="12" stroke-linecap="round">
        <defs g-for="(record, index) of data">
          <line
            x1="22"
            g-bind:x2="record.value"
            g-bind:y1="index * 20 + 30"
            g-bind:y2="index * 20 + 30"
            g-bind:stroke="record.color"
          ></line>
        </defs>
      </g>
    </svg>
  </template>
  <script type="data">
    [
      { color: "#D80000", value: 130 },
      { color: "#00D800", value: 170 },
      { color: "#0000D8", value: 100 }
    ]
  </script>
</grapper-view>
```


## 3. Core Concepts

### Web component

A `grapper-view` web component is the building block of **Grapper** and acts as a container for all
elements. It allows you to use directives, properties, and event bindings to manage and
manipulate SVG elements dynamically.

```html
<grapper-view id="unique-id" data="value: 50" style="width: 100%">
  <template>
    <!-- SVG with directives  -->
  </template>
  <script type="data">
    <!-- Data in CSV or JSON format -->
  </script>
  <script type="methods">
    <!-- Methods to handle events or transform data -->
  </script>
  <script type="config">
    <!-- Static or dynamic configuration -->
  </script>
  <script type="plugin" src="plugin-url.js"></script> <!-- External plugin -->
</grapper-view>
```

### SVG directives, data, and methods

The `<template>` section defines the main **SVG** structure. This section can contain SVG elements
such as `circle`, `line`, `rect`, and more, **enriched with dynamic directives** provided by
**Grapper**.

Expressions contained in directives have access to:

- **data** defined in the `<script type="data">`
- **functions** defined in the `<script type="methods">`

By directives, data, and methods, the graphs are built dynamically. If the data changes, the
affected directives are re-evaluated and the visualization is quickly and efficiently updated.


## 4. Visualization

### Using `<template>` to define the SVG structure

The SVG template is a way to define the structure of an SVG document combined with **Grapper**
directives into the `<grapper-view>` component.

On the one hand, we have the power of the **SVG standard** with its declarative description of
vector graphic elements. Browsers know the SVG syntax and process them efficiently.

On the other hand, **Grapper extends the standard** with a series of additional attributes called 
**directives** that make it easy to **link data to graphics**.

### Directives

**Grapper** provides several directives and dynamic attributes that allow for interactive and
reactive SVG elements:

#### `g-for`

Iterates over arrays or objects in the data to create repeated elements.

```html
<g g-for="(item, index) of data">
  <!-- Elements generated based on 'data' -->
</g>
```

When the data is an array, you can use `g-for` to iterate over each element of the array. When the
data is an object, `g-for` can be used to iterate over each property of the object.

#### `g-if`

Conditionally renders elements based on a boolean expression.

```html
<path g-if="item.value > 0" d="..."></path>
```

#### `g-bind:[attribute]`

Binds SVG attributes dynamically to data values or method results.

```html
<circle g-bind:cx="item.x" g-bind:cy="item.y" g-bind:r="item.radius"></circle>
```

It is possible to use `:[attribute]` as an abbreviation for `g-bind:[attribute]`:

```html
<circle :cx="item.x" :cy="item.y" :r="item.radius"></circle>
```

When the SVG element attribute must contain a comma-separated or space-separated list of values, an
array of values can be used with `g-bind`.

#### `g-content`

Inserts text content into an SVG element.

```html
<text g-content="item.label"></text>
```

#### `g-on:[event]`

Attaches event handlers (e.g., `click`, `mouseover`) to elements, linking them to methods defined in
the `methods` section.

```html
<rect g-on:click="handleClick(index)"></rect>
```

It is possible to use `@[event]` as an abbreviation for `g-on:[event]`:

```html
<rect @click="handleClick(index)"></rect>
```

### Directives expressions

It's possible to use JavaScript expressions in directives. The expressions in directives are
evaluated in the context of the current element. The following variables are available:

- `data`: The data array or object.
- `$.grapperView`: The `grapper-view` instance.
- `$.data`: The data array or object. (?)
- `$.methods`: The methods functions object.
- `$.config`: The configuration object.
- `$.svg`: The SVG wrapper.

If the data is an object, all its properties are directly accessible.

In addition, some directives provide an additional variable `$` with specific helpers.

### Special binding with `style` and `class`

The behavior of `g-bind` with the `style` and `class` attributes are additive; that is, it adds the
new values to the existing values, rather than replacing them.

When using `g-bind` with the `style` attribute, you can dynamically bind an object containing CSS
styles to an element. The keys of the object represent the CSS properties, and the values represent
the corresponding values for those properties: `g-bind:style="{fill: value.color}"`.

When using `g-bind` with the `class` attribute, you can dynamically bind:

- a string with a single class name: `g-bind:class="data.class"`.
- an array of classes: `g-bind:class="['active', 'selected]"`.
- an object with classes with values `true` to add or `false` to remove the class name: 
  `g-bind:class="{active: true, disabled: false}"`.


### `g-bind` helpers

- `$.attribute` is the name of the attribute in which the `g-bind` directive has been applied.

- `$.currentValue()` returns the current value of the attribute.

- `$.element` refers to the wrapper of the element where the `g-bind` directive has been included.
  With this reference it is possible to query other attributes of the element, i.e.,
  `g-bind:y="$.element.x() * 2"`

- `$.dynamic(<value>, [<duration> = 200], [<delay> = 0])` progressively applies the value to the
  attribute, from the current value to the indicated value, with the possibility of defining the
  duration and delay, i.e., `g-bind:x="$.dynamic(item.x, 1000, 500)"`.`.

### Path helpers: `g-bind:d=""`

Basic path helpers:

- `$.M(<x>, <y>)` `$.m(<x>, <y>)` move to absolute and relative point.
- `$.Z()` `$z()` close path.
- `$.L(<x>, <y>)` `$.l(<x>, <y>)` line to absolute and relative point.
- `$.H(<x>)` `$.h(<x>)` horizontal line to absolute and relative x point.
- `$.V(<y>)` `$.v(<y>)` vertical line to absolute and relative y point.
- `$.C(<x1>, <y1>, <x2>, <y2>, <x>, <y>)` `$.c(<x1>, <y1>, <x2>, <y2>, <x>, <y>)` absolute and
  relative cubic Bézier curve.
- `$.S(<x1>, <y1>, <x2>, <y2>)` `$.s(<x1>, <y1>, <x2>, <y2>)` absolute and relative smooth cubic
  Bézier curve.
- `$.Q(<x1>, <y1>, <x>, <y>)` `$.q(<x1>, <y1>, <x>, <y>)` absolute and relative quadratic Bézier
  curve.
- `$.T(<x>, <y>)` `$.t(<x>, <y>)` absolute and relative smooth quadratic Bézier curve.
- `$.A(<rx>, <ry>, <rot>, <arc-flag>, <sweep-flag>, <x>, <y>)`
  `$.a(<rx>, <ry>, <rot>, <arc-flag>, <sweep-flag>, <x>, <y>)` absolute and relative arc curve.

Advanced path helpers:

- `$.arc(cx, cy, r, grades, [start = 0] )` creates an arc (section of the circumference) based on a
  center (`cx` and `cy`), a radius (`r`), positive or negative number of grades (`grades`), and
  optionally a `start` angle (in degrees).
- `$.barArc(cx, cy, r, width, grades, [start = 0] )` creates a bar with an arc form (section of the
  donut) based on a center (`cx` and `cy`), a radius (`r`), and width (`width`), positive or
  negative number of grades (`grades`), and optionally a `start` angle (in degrees).
- `$.circleSlice(cx, cy, r, grades, [start = 0] )` creates a circle slice (section of the circle)
  based on a center (`cx` and `cy`), a radius (`r`), positive or negative number of grades (
  `grades`), and optionally a `start` angle (in degrees).

You can concatenate the calls as `$.M(10, 20).L(30, 40).L(60, 80).Z()`.

### Transform helpers: `g-bind:transform=""`.

- `$.translate(<x>, [<y>])` move the object.
- `$.rotate(<angle>, [<x>, <y>])`  rotate the `angles` defined from `x` and `y`.
- `$.scale(<x>, [<y>])` scale the size.
- `$.skewX(<angle>)` `$.skewY(<angle>)` skew transformation along the `x` and y `axes`,
  respectively.
- `$.matrix(<a>, <b>, <c>, <d>, <e>, <f>)` transformation matrix.

### `g-content` helpers

- `$.element` refers to the wrapper of the element where the `g-content` directive has been
  included. With this reference it is possible to query attributes of the element.

- `$.currentContent()` returns the content of the element. It can be useful to add elements instead
  of replacing them or to check the content before modifying it.

- `$.fromURL()` gets an external resource via a URL and inserts it as element content.


## 5. Data

### Using `<script type="data">`

The `<script type="data">` section defines the dataset for the component.

```html
<script type="data">
  [
    { "wind": 441895, "country": "China" },
    { "wind": 148020, "country": "U.S." },
    ...
  ]
</script>
```

Also, you can use `<script type="data" src="url">` to load data from a remote source.

### Supported formats: JSON/JSON5, CSV

*JavaScript Object Notation*, or **JSON**, is commonly used for transmitting data in web
applications. **JSON5** is a simplified version of JSON that allows comments, trailing commas,
single-quoted strings, and unquoted keys.

*Comma Separated Values*, or **CSV**, is a simple and widely-used text format for storing tabular
data. Each line in a CSV file represents a single record, and fields within the record are separated
by commas or semicolons.

```html
<script type="data">
  "wind";"country"
  441895;"China"
  148020;"U.S."
  ...
</script>
```

**Grapper** supports both JSON/JSON5 and CSV and detects the format automatically. The data is then
parsed and converted to an array of objects or an object, depending on the structure.

### Accessing data: `data`, `$.data`.

#### From template

In directives, data can be accessed with `data`, for example: `g-for="(item, index) of data"` or
`g-bind:x="data.x"`. As you can see,`data` can be an array of objects or an object.

If the data is in CSV format, it will always be an array of objects, where each row is an element of
the array and each column is a property of the object.

If the data is in JSON/JSON5 format, depending on how it is defined, it will be an array or an
object. If the data is an object, its properties can be accessed directly without using `data`.

```html
<script type="data">
  {
    title: 'Incomes', 
    values: [123, 456, 789]
  }
</script>
<template>
  <svg viewBox="0 0 200 100">
    <text x="10" y="20" g-content="title"></text>
    <g g-for="(item, index) of values">
      <text :y="20 * index + 40" x="20" g-content="item"></text>
    </g>
</template>
```

#### From `<script type="methods">`

From the methods you can access the data with `$.data`.

```html
<script type="methods">
  function handleClick(index) {
    $.data[index].value += 10; // Access and update data using '$.data'
  }
</script>
```

### Data array manipulation

Like any array in JavaScript, you can query and manipulate its data by these functions, which are
available in the directives and methods of `grapper-view`.

| Method               | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `data.push()`        | Adds one or more elements to the end of an array                            |
| `data.pop()`         | Removes the last element from an array                                      |
| `data.shift()`       | Removes the first element from an array                                     |
| `data.unshift()`     | Adds one or more elements to the beginning of an array                      |
| `data.concat()`      | Joins two or more arrays and returns a new array                            |
| `data.slice()`       | Returns a shallow copy of a portion of an array                             |
| `data.splice()`      | Adds, removes, or replaces elements in an array                             |
| `data.indexOf()`     | Returns the first index of a given element                                  |
| `data.lastIndexOf()` | Returns the last index of a given element                                   |
| `data.includes()`    | Checks if an array contains a certain element                               |
| `data.find()`        | Returns the first element that satisfies a condition                        |
| `data.findIndex()`   | Returns the index of the first element that satisfies a condition           |
| `data.filter()`      | Creates a new array with elements that satisfy a condition                  |
| `data.map()`         | Creates a new array with the results of calling a function on every element |
| `data.forEach()`     | Executes a function once for each array element                             |
| `data.reduce()`      | Reduces array to a single value using an accumulator function               |
| `data.reduceRight()` | Same as reduce(), but works from right to left                              |
| `data.sort()`        | Sorts the elements of an array                                              |
| `data.reverse()`     | Reverses the order of the elements in an array                              |
| `data.flat()`        | Flattens nested arrays into a single array                                  |
| `data.flatMap()`     | Maps and flattens the result into a new array                               |
| `data.join()`        | Joins all elements into a string                                            |
| `data.toString()`    | Converts an array to a string of comma-separated values                     |
| `data.every()`       | Checks if all elements satisfy a condition                                  |
| `data.some()`        | Checks if at least one element satisfies a condition                        |

**Note:** The `data` in the directives is not reactive, you don't change the original data. If you
want to update the data, you need to use `$.data` instead.

### Data array helpers: `$sum`, `$avg`, `$count`, `$min`, `$max`, `$distinct`.

When data is a matrix, we may need auxiliary functions to get the maximum, minimum, average, unique
values, etc. **Grapper** offers a series of helpers that allow us to collect this information
efficiently. To access these auxiliary functions, we will use `data.$min()`, `data.$max()`, etc.

| Method                  | Description                             |
|-------------------------|-----------------------------------------|
| `data.$min([key])`      | Retrieve the minimum value of the array |
| `data.$max([key])`      | Obtain the maximum value of the array   |
| `data.$count([key])`    | Get the number of values in the array   |
| `data.$sum([key])`      | Calculate the sum of the array values   |
| `data.$avg([key])`      | Compute the average value of the array  |
| `data.$distinct([key])` | Retrieve the unique values of the array |

If the helper does not receive a key, it assumes that the array contents are numeric. If it does
receive a key, it uses this key to get the value of each object in the array. The key can include
dots to access values in nested objects, e.g., `key.subkey.subkey`.

### Transformations with `function data() {}` in `<script type="methods">`.

The methods section can include a function with the name `data` that receives the original data and
returns the transformed data. This function allows complex data transformations and validations.

```html
<script type="methods">
  function data(originalData) {
    const max = Math.max(...originalData.map(item => item.value));
    const transformedData = originalData.map(item => ({
      ...item,
      normalizedValue: item.value / max * 100
    }));
    return transformedData;
  }
</script>
```

### Manage simple datum with `value`

When the value to be used is a simple number, string, or boolean value, you can simplify its access
by means of the `value` attribute of `grapper-view`. This is useful in single-value-based graphs.

```html
<grapper-view value="50">
  <template>
    <svg viewBox="0 0 100 100">
      <circle fill="red" cx="50" cy="50" g-bind:r="value"></circle>
    </svg>
  </template>
</grapper-view>
```

From the methods or from outside the component, the `$.data.value` property can be accessed.

### Auto-updates when data changes

Reactivity is a core feature of **Grapper**. It ensures that any change in the data automatically
updates the visualization, keeping the UI perfectly synchronized. **Grapper** tracks the
dependencies and triggers updates only where needed. Changes are detected at both surface and deep
levels, including arrays and dates.

### Dynamic attributes and directives.

With directives like `g-bind`, `g-if`, and g-for, attributes and elements respond directly to data
changes. This allows you to dynamically update values, toggle visibility, or generate elements,
making the visualization both reactive and interactive without extra code.

Aquí te dejo la **sección 6 completa** con una redacción homogénea con el resto de la guía:


## 6. Methods

### Using `<script type="methods">`

In **Grapper** we can include **JavaScript code** whenever the declarative system of templates and
the data provided in `grapper-view` are not enough. Typical use cases are:

* Responding to user interactions via events
* Transforming or preprocessing data
* Performing complex calculations or dynamic logic for directives

You can add JavaScript code inside `<script type="methods"></script>`. This code is evaluated in 
**script mode** (not module mode). Imports are **not allowed**, but all global variables, browser
APIs, and any libraries loaded as globals are available.

This environment is **sandboxed** and isolated per component, ensuring that code execution remains
safe and predictable.

### Access from directives

The functions defined in `<script type="methods"></script>` are automatically available in the
template directives.

You can also declare variables, constants, or other code inside the script, but only **top-level
`function` declarations** are accessible from the template.

```html
<script type="methods">
  const double = 2; // not accessible from template
  
  function doubleValue(x) {
    return x * double;
  }
</script>

<template>
  <circle cx="50" cy="50" g-bind:r="doubleValue(value)"></circle>
</template>
```

### Event handling

You can handle user interactions by linking events in the template to methods.

```html
<script type="methods">
  function handleClick(index) {
    alert("Clicked bar " + index);
  }
</script>

<template>
  <rect g-for="(item, index) of data"
        :x="index * 30"
        y="20"
        width="20"
        :height="item.value"
        @click="handleClick(index)"></rect>
</template>
```

The method receives any arguments passed from the template, plus it has access to the full component
API (`$.svg`, `$.data`, `$.config`, etc.).

### Data transformation

The methods section can also include a special function called `data (originalData)`. This function
receives the raw data defined in `<script type="data">` and returns a transformed dataset.

```html
<script type="methods">
  function data(originalData) {
    const max = Math.max(...originalData.map(d => d.value));
    return originalData.map(d => ({
      ...d,
      normalized: d.value / max
    }));
  }
</script>
```

This allows you to prepare or validate data before it is used in the template.

### Access the SVG with `$.svg`

The `$.svg` object exposes the **SVG wrapper** of the component, allowing you to query and
manipulate elements programmatically.

```html
<script type="methods">
  function highlightCircle() {
    const circle = $.svg.querySelector("circle");
    circle.fill("orange").stroke("red"); // wrapper methods
  }
</script>
```

Wrapper methods mirror SVG attributes as functions (`.fill()`, `.id()`, `.stroke()`, etc.), and can 
be chained.

### Access the Configuration with `$.config`

The `$.config` object contains the configuration defined in `<script type="config">`. This is useful
for separating styling or constants from logic.

```html
<script type="config">
  {
    "colors": ["red", "green", "blue"],
    "radius": 20
  }
</script>

<script type="methods">
  function colorByIndex(i) {
    return $.config.colors[i % $.config.colors.length];
  }
</script>
```

### Access the Data with `$.data`

From methods, you can access and even modify the **reactive dataset** through `$.data`. Any change
here will automatically update the visualization.

```html
<script type="methods">
  function increase(index) {
    $.data[index].value += 10;
  }
</script>
```

Updating `$.data` triggers re-rendering of only the affected elements, keeping the visualization
efficient.

¡Bien visto! 👍
Tienes razón: en las **directivas** también debe usarse `$.config` (no `config` a secas).
Aquí te dejo la **sección 7 corregida** con ese detalle ajustado:

---


## 7. Configuration

### Using `<script type="config">`

The `<script type="config">` section allows you to define a **configuration object** for the
component. This is useful for storing constants, styles, thresholds, scales, or any parameter that
should be separated from the data or logic.

You can write the configuration inline, or load it from an external file with `src`.

```html
<script type="config">
  {
    "radius": 50,
    "colors": ["#ff0000", "#00ff00", "#0000ff"]
  }
</script>
```

### Config structure (JSON/JSON5)

The configuration is expressed in **JSON** or **JSON5**.

* **JSON** is strict and requires quoted keys and values.
* **JSON5** is more flexible: it allows comments, unquoted keys, trailing commas, and single-quoted
  strings.

Both formats are supported by **Grapper**.

#### Static configuration

Static configuration is defined once and does not change during component execution. It is ideal for
fixed constants such as margins, colors, or maximum values.

```html
<script type="config">
  {
    "margin": 10,
    "width": 300,
    "height": 200
  }
</script>
```

#### Dynamic configuration

You can also define dynamic configuration values by **binding them to directives** or **modifying
them via methods**.

```html
<script type="config">
  {
    "barWidth": 20,
    "highlightColor": "orange"
  }
</script>

<script type="methods">
  function toggleHighlight(on) {
    $.config.highlightColor = on ? "orange" : "gray";
  }
</script>
```

Changing `$.config` from methods will immediately update any directive that depends on it.

### Accessing config from directives

In template directives, configuration is accessed through `$.config`.

```html
<rect :width="$.config.barWidth"
      :height="value"
      :fill="$.config.highlightColor"></rect>
```

### Accessing config from methods

Inside `<script type="methods">`, configuration is also accessed with `$.config`.

```html
<script type="methods">
  function getColor(index) {
    return $.config.colors[index % $.config.colors.length];
  }
</script>
```

### Example with colors and sizes

```html
<grapper-view>
  <template>
    <svg viewBox="0 0 300 100">
      <rect g-for="(item, index) of data"
            :x="index * ($.config.barWidth + $.config.margin)"
            :y="100 - item.value"
            :width="$.config.barWidth"
            :height="item.value"
            :fill="$.config.colors[index % $.config.colors.length]"></rect>
    </svg>
  </template>

  <script type="data">
    [
      { "value": 40 },
      { "value": 70 },
      { "value": 50 }
    ]
  </script>

  <script type="config">
    {
      "barWidth": 30,
      "margin": 10,
      "colors": ["#ff5555", "#55ff55", "#5555ff"]
    }
  </script>
</grapper-view>
```

This example defines a reusable **configuration object** that controls bar width, margin, and color
palette, keeping style and layout parameters cleanly separated from data and methods.


## 8. Animations

**Grapper** maintains full access to SVG, CSS, and JavaScript functionality. Therefore, it is 
possible to use SMIL in SVG, CSS animations, and the Web Animation API or the 
`window.requestAnimationFrame()` function from JavaScript.

Grouping all these functionalities and saving some small problems that each of them has with some 
SVG elements, **Grapper** offers two ways to animate elements:

- `g-bind:<attribute>="$.dynamic(<value>, [<duration> = 200], [<delay> = 0])"` is a helper of the 
  `g-bind` directive that allows assigning a value progressively.

- `<element>.animateTo()` is a wrapper that allows animating any SVG element without problems.

### `element`*`.animateTo(keyframes [, options]  [, before] [, after])`

- `{object|array} keyframes`:

  - `{object} properties_values`: is an object with the attributes or properties names as keys and
    target value as values.

  - `{array} keyframes_array`: is an array with objects with the attribute names as keys and target
    value as values. You can also include an offset attribute of type number between 0 and 1.

- `{number|object} options`:

  - `{number} duration`: is a number that defines, in milliseconds, the time of the animation. The
    default value is 200 (fast animation). It must be zero (`0`) for an immediate change.

  - `{object} options_object`: is an object with several options, includes `duration`, `delay`, etc.

- `{function} before`: a callback function called before the animation is executed.

- `{function} after`: a callback function called after the animation has finished.

```js
$.svg.querySelector('#circle').animateTo({r: 10});
$.svg.querySelector('rect').animateTo([
  {offset: 0.00, x: 40, y: 40, width: 20, height: 20},
  {offset: 0.95, x: 0, y: 0, width: 100, height: 100},
  {offset: 1.00, x: 5, y: 5, width: 90, height: 90}
], {duration: 1000, delay: 500});
```


## 9. Manage From External JavaScript

### Data

From outside the component, the data can be accessed with `[component].data`.

```js
const component = document.querySelector('grapper-view#example');
component.data.value = 10;
```

If the data is changed, the component will automatically update.

### Config

From outside the component, the configuration can be accessed with `[component].config`

```js
const component = document.querySelector('grapper-view#example');
component.config.radius = 100;
```

If the config object is changed, the component will automatically update.

### SVG

From outside the component, the SVG generated by the directives can be accessed with 
`[component].svg` as a wrapper around the SVG elements.

```js
const component = document.querySelector('grapper-view#example');
component.svg.querySelector('circle').fill('red');
```

### Methods

From outside the component, the methods can be accessed with `[component].methods`.

```js
const component = document.querySelector('grapper-view#example');
component.methods.increase(0);
```


## 10. Use External Resources

- `<template src="...">`
  Loads the template from an external file. The file must be an **SVG with Grapper directives**.

- `<script type="data" src="...">`
  Loads data from an external file. The file must be in **CSV**, **JSON** or **JSON5** format.

- `<script type="methods" src="...">`
  Loads methods from an external file. The file must be **JavaScript**.

- `<script type="config" src="...">`
  Loads configuration from an external file. The file must be in **JSON** or **JSON5** format.

- `<script type="plugin" src="...">`
  Loads a plugin from an external file.

- `$.fromURL(<url>)` helper in `g-content` directive.
  Loads external resources and includes them in the template.


## 11. Migration From Graphane

The previous version of **Grapper** was called **Graphane**.
The renaming was done to avoid conflicts with other products and to improve search visibility.

### Version mapping

- **Graphane 1.0.x → Grapper 1.1.x**
  Both share the same foundation, but **Grapper** includes bug fixes, performance improvements, and 
  a clearer API.

### Main changes

- **Component rename**:
  `g-composer` → `grapper-view`. 
  *Backward compatibility is maintained:* existing projects using `g-composer` will still work, but 
  it is **deprecated**.

- **Helper access simplified**:
  In **Graphane**, some helpers were in `$.` and others in `$$.`.
  In **Grapper**, all helpers are now accessed through `$.`.
  The `$$.` namespace still exists for compatibility, but is **deprecated**.

- **Importing**:
  Graphane 1.0.x packages will continue to be available on **NPM** and **CDN**, but new projects are 
  encouraged to migrate to **Grapper 1.1.x**.

### Migration strategy

1. Replace `<g-composer>` with `<grapper-view>`.
2. Update helper calls from `$$.` to `$.` when possible.
3. Test components — deprecated syntax will still work but gradually move to the new conventions.


## 12. Best Practices

### `$.data` vs `$.config`

Although both are accessible from directives and methods, their **purpose** is different:

| Use case               | `$.data` (data)                                     | `$.config` (parameters)                                               |
|------------------------|-----------------------------------------------------|-----------------------------------------------------------------------|
| **Nature**             | Dynamic, changes with user interaction or app flow  | Static or semi-static, defines adjustments and constants              |
| **Origin**             | `<script type="data">` (JSON/JSON5 or CSV)          | `<script type="config">` (JSON/JSON5)                                 |
| **Typical structure**  | Business records, metrics, states                   | Palettes, sizes, margins, limits, style/feature flags                 |
| **When to modify**     | Often: filtering, sorting, adding/removing elements | Occasionally: theme change, layout or user preferences                |
| **Who changes it**     | The app or the user (events, animations, fetches)   | The developer (or user if preferences are exposed)                    |
| **Expected impact**    | Updates trigger re-rendering of dependent elements  | Updates reconfigure the render (without altering the meaning of data) |
| **Examples**           | Chart series, points, active/selected states        | `barWidth`, `margin`, `colors`, `yMax`, `tooltip.format`, `locale`    |
| **External source**    | Usually comes from API or storage                   | Usually defined in the component or a shared theme                    |

#### Recommended patterns

- **Use `$.data` for data**  
  Content being visualized: values, labels, selection states, filtered results.

```html
  <rect g-for="(d,i) of data" :height="d.value"></rect>
````

- **Use `$.config` for parameters**
  Things that configure the view: sizes, palettes, margins, limits, formats.

  ```html
  <rect :width="$.config.barWidth" 
        :fill="$.config.colors[i % $.config.colors.length]"></rect>
  ```

- **Controlled changes**

  * If the user changes the **theme** → update `$.config`.
  * If the user filters data or zooms in a range → update `$.data`.

#### Anti-patterns (avoid)

- ❌ Storing real data inside `$.config` (e.g., a full dataset).
- ❌ Using `$.data` for style constants (e.g., colors, margins).


### Reuse SVG components

Sometimes you need to **repeat the same graphic element** multiple times in a visualization.
Instead of duplicating SVG code, you can define the element once with `<defs>` and then reuse it 
with `<use>`. This improves readability and reduces the amount of markup.

#### Basic example

```html
<svg viewBox="0 0 200 100">
  <defs>
    <circle id="myCircle" cx="0" cy="0" r="10" fill="blue"></circle>
  </defs>
  <use href="#myCircle" x="30" y="30"></use>
  <use href="#myCircle" x="70" y="30"></use>
  <use href="#myCircle" x="110" y="30"></use>
</svg>
```

Here, the circle is defined once inside `<defs>` and reused multiple times at different positions.

#### With Grapper directives

Because `<use>` supports attributes like `x`, `y`, `transform`, and `fill`, you can combine it 
with **Grapper directives** for dynamic repetition.

```html
<grapper-view>
  <template>
    <svg viewBox="0 0 200 100">
      <defs>
        <circle id="point" cx="0" cy="0" r="6"></circle>
      </defs>
      <use g-for="(item, index) of data"
           href="#point"
           :x="item.x"
           :y="item.y"
           :fill="item.color"></use>
    </svg>
  </template>
  <script type="data">
    [
      { "x": 30, "y": 40, "color": "red" },
      { "x": 80, "y": 60, "color": "green" },
      { "x": 130, "y": 20, "color": "blue" }
    ]
  </script>
</grapper-view>
```

This pattern reduces repetition and keeps your **Grapper templates** clean and efficient.

### Aliases for `<script>` in CMS

If you want to include `<grapper-view>` in a CMS, you can use an alias for `<script type="">` so
that the file type is not rewritten or an exception is thrown because it is a disallowed tag. In
these cases you can use `<g-script type="data">` or `<g-script type="methods">` to indicate the
content type without problems with HTML sanitation processes.


## Additional Resources

- [Grapper documentation](https://grapper.io/).
- [Grapper Playground](https://playground.grapper.io)
- [Grapper on GitHub](https://github.com/graphery/grapper)
- [Grapper on NPM](https://www.npmjs.com/package/grapper)

./