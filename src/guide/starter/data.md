---
outline: deep
---

# Data

The Grapper goal is to display information based on data. 
Therefore, data is one of the elements that `grapper-view` integrates, allowing the `template` to 
build the graph on top of the data information.

We can create visualizations using data in CSV, JSON or JSON5 formats. 
To load the data, we need to use the `script` tag indicating that it is `type="data"`.

<ClientOnly>
<g-editor mode="readonly" lines-highlight="3-7">
<textarea><grapper-view>
  <g-script type="data">
  [
    { name: 'A', value: 1 },
    { name: 'B', value: 2 },
    { name: 'C', value: 3 }
  ]
  </g-script>
</grapper-view></textarea>
</g-editor>
</ClientOnly>

::: details Using external data source

In all our examples we will include the data directly inside `grapper-view`.
In practice, data can be obtained from an external file as a resource from a URL.
To load external data, we can use:
 
- The `data-src` attribute of `grapper-view` indicates the location of the data source.

<ClientOnly>
<g-editor mode="readonly">
<textarea><grapper-view data-src="../../data/example.json"></grapper-view></textarea>
</g-editor>
</ClientOnly>

- The `src` attribute of `script type="data"` indicates the location of the data source.

<ClientOnly>
<g-editor mode="readonly"><textarea><grapper-view>
  <g-script type="data" src="../../data/example.json"></g-script>
</grapper-view></textarea></g-editor>
</ClientOnly>

:::

## Formats

Grapper allows the use of data in different formats, without the need to identify them in advance.
The format used is automatically identified by Grapper. 

The supported formats are:

### CSV

*Comma-Separated Values* format is a simple and widely-used text format for storing tabular data. 
Each line in a CSV file represents a single record, and fields within the record are separated by 
commas or semicolon. 
The first line often contains headers that define the names of the columns. 
Grapper can use the Comma Separated Values (CSV) format in its different variants.

<ClientOnly>
<grapper-view style="width: 200px" id="data-example-2">
  <svg viewBox="0 0 100 100">
    <g g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </g>
  </svg>
  <g-script type="data">
    {{ "x,y,radix,color\n20,20,20,red\n45,45,30,blue\n80,80,10,green" }}
  </g-script>
</grapper-view>
<g-editor href="#data-example-2" title="CSV format" lines-highlight="15-18"></g-editor>
</ClientOnly>

### JSON or JSON5

*JavaScript Object Notation* is a lightweight data interchange format that is easy for humans to 
read and write and easy for machines to parse and generate. 
It represents data as key-value pairs and ordered lists using a syntax derived from JavaScript, 
though it is language-independent. 
JSON is commonly used for transmitting data in web applications, and its simplicity makes it ideal
for representing structured data. 

*JSON5* is a simplified version of JSON that aims to make the format more human-friendly and 
writable.
It allows for comments, trailing commas, single-quoted strings, and unquoted keys, among other 
enhancements. These features make JSON5 more forgiving and easier to work with, particularly during 
the development process.

We can use both as a format for the data used in `grapper-view`.

<ClientOnly>
<grapper-view style="width: 200px" id="data-example-3">
  <svg viewBox="0 0 100 100">
    <g g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </g>
  </svg>
  <g-script type="data">
    [
      {x: 20, y: 20, radix: 20, color: "red"},
      {x: 45, y: 45, radix: 30, color: "blue"},
      {x: 80, y: 80, radix: 10, color: "green"},
    ]
  </g-script>
</grapper-view>
<g-editor href="#data-example-3" title="JSON5 format" lines-highlight="15-19"></g-editor>
</ClientOnly>

## Data Structure

The data structure can be as flexible as necessary.
Normally, we will use a combination of arrays (where each record is an entry in the matrix) and 
objects (with its key-value pairs for each field).

- **Array**: The data can be a collection of data in an array. When data is loaded in CSV format it
  is always transformed into an array with objects.

- **Object**: the data can be an object with properties and attributes, and can include other nested
  objects or arrays.

## Change the data and the reactivity

You can update the data by the `g-compoposer` property `.data`.
By this property, we can access and manipulate the data of the component. 
If we modify the data, the graph is automatically updated with the new information.
It's a fully reactive system.
It observes changes in the data both at the surface level, and any changes in the
data nested in depth.

<ClientOnly>
<div id="reactivity-example-wrapper">
<grapper-view id="example">
  <svg viewBox="0 0 100 100" width="200" height="200">
    <g g-for="x of circles">
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
    {
      "circles": 5
    }
  </g-script>
</grapper-view>
<p>
  <label>.data.circles 
    <input type="range" min="0" max="50" step="1" value="5"
           oninput="document.querySelector('#example').data.circles = Number(this.value)">
  </label>
</p>
</div>
<g-editor href="#reactivity-example-wrapper" title="dynamic number of concentric circles" lines-highlight="28"></g-editor>
</ClientOnly>
