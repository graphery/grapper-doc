## **Introduction to GRAPHANE**

**GRAPHANE** is an open-source micro-framework optimized for **data visualization** (**data-viz**),
providing a way to create interactive and responsive visual elements directly within a web
application. It allows developers to use declarative syntax similar to modern JavaScript frameworks
but focuses specifically on SVG and graphical elements.

### **Key Characteristics of GRAPHANE:**

- **Declarative Syntax**: `grapper-view` utilizes declarative attributes and directives that bind data
  and events dynamically within SVG elements.
- **Modularity**: Components are built as encapsulated units, ensuring reusability and easy
  integration with other parts of your framework.
- **Data-driven**: Designed specifically for visualizations, it provides ways to manipulate and
  transform data to generate dynamic graphics.

## **Basic Structure of a `grapper-view` Component**

A `grapper-view` component is the building block of GRAPHANE and acts as a container for all elements.
It allows the use of directives, properties, and event bindings to manage and manipulate SVG
elements dynamically.

```html

<grapper-view id="unique-id" data="value: 50" style="width: 100%">
  <template>
    <!-- SVG content goes here -->
  </template>
  <script type="data">
    <!-- Data in CSV or JSON format -->
  </script>
  <script type="methods">
    <!-- Methods to manipulate or transform data -->
  </script>
  <script type="config">
    <!-- Static or dynamic configuration -->
  </script>
  <script type="plugin" src="plugin-url.js"></script>
</grapper-view>
```

## **Template (`<template>`)**

The `<template>` section defines the main SVG structure. This section can contain SVG elements such
as `circle`, `line`, `rect`, and more, enriched with dynamic attributes and directives provided by
GRAPHANE.

## **Directives in `grapper-view`**

GRAPHANE extends SVG functionality with several directives and dynamic attributes that allow for
interactive and reactive SVG elements:

- **`g-for`**: Iterates over arrays or objects in the data to create repeated elements.
  ```html
  <defs g-for="(item, index) of data">
    <!-- Elements generated based on 'data' -->
  </defs>
  ```

- **`g-if`**: Conditionally renders elements based on a boolean expression.
  ```html
  <path g-if="item.value > 0" d="..."></path>
  ```

- **`g-bind`**: Binds SVG attributes dynamically to data values or method results.
  ```html
  <circle g-bind:cx="item.x" g-bind:cy="item.y" g-bind:r="item.radius"></circle>
  ```

- **`g-content`**: Inserts text content into an SVG element.
  ```html
  <text g-content="item.label"></text>
  ```

- **`g-on`**: Attaches event handlers (e.g., `click`, `mouseover`) to elements, linking them to
  methods defined in the `methods` section.
  ```html
  <rect g-on:click="handleClick(index)"></rect>
  ```

## **Data (`<script type="data">`)**

The `<script type="data">` section defines the dataset for the component. It supports formats like
JSON or CSV and serves as the foundation for the dynamic SVG elements.

```html

<script type="data">
  [
    { "wind": 441895, "country": "China" },
    { "wind": 148020, "country": "U.S." },
    ...
  ]
</script>
```

## **Methods (`<script type="methods">`)**

The methods section is where data transformation and event handling logic are defined. These methods
can format data, perform calculations, or handle user interactions.

```html

<script type="methods">
  function data(originalData) {
    const max = Math.max(...originalData.map(item => item.value));
    return originalData.map(item => ({
      ...item,
      normalizedValue: item.value / max * 100
    }));
  }

  function handleClick(index) {
    console.log(`Element ${index} clicked`);
    $.data[index].value += 10; // Access and update data using '$'
  }
</script>
```

## **Configuration (`<script type="config">`)**

The configuration section holds static or dynamic values that can be used across the template for
customizing the visualization.

```html

<script type="config">
  {
    "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    "colors": ["#ff0000", "#00ff00", "#0000ff"]
  }
</script>
```

## **External Plugins**

GRAPHANE supports external plugins, allowing the integration of additional functionality or shapes
beyond the built-in features.

```html

<script type="plugin" src="https://example.com/plugin.js"></script>
```

## **External handle**

`grapper-view` components can interact with external HTML controls and JavaScript to update data
dynamically.

```html
<input type="range" min="0" max="100"
       oninput="document.querySelector('grapper-view#interactive-chart').data.value = this.value"/>
```

## **Example: Simple Data-Driven Visualization**

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

### **Explanation:**

- **Dynamic Line Rendering**: The component uses the `g-for` directive to iterate over each item in
  the data and generate a line based on each record’s value and color.
- **`g-bind` Directives**: Attributes like `x2`, `y1`, and `stroke` are bound dynamically to the
  data values (`record.value` and `record.color`), ensuring that any changes in the data reflect
  immediately in the SVG.
- **Simple Data Format**: The data is structured as an array of objects, each containing a `color`
  and `value`, which makes the component flexible for different sets of values.


## **Getting Started with GRAPHANE**

To get started with GRAPHANE:

1. Install the framework using npm:
   ```bash
   npm install grapper
   ```
2. Load GRAPHANE into your project:
   ```html
   <script src="node_modules/grapper/component/composer.js"></script>
   ```

Alternatively, you can use GRAPHANE from a CDN without installing anything on your computer:

  ```html

<script src="https://cdn.graphery.online/grapper/1.0.0-beta/component/composer.js"></script>
  ```

## **Summary**

GRAPHANE and its core component, `grapper-view`, offer a **flexible micro-framework** for creating
interactive data visualizations. By combining declarative SVG structures with data manipulation
methods, GRAPHANE enables developers and designers to build complex visualizations that respond to
user input and dynamically adapt to data changes.

### **Key Advantages**

- **Declarative**: Simplifies the creation of SVG-based visualizations using clear, declarative
  syntax.
- **Data-Driven**: Integrates data seamlessly, allowing components to react and visualize changes in
  real-time.
- **Modular and Extensible**: Supports external plugins and configurations for customization and
  extension beyond built-in capabilities.

