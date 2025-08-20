---
outline: deep
---

# Methods

In Grapper we can include Javascript code if we need it.
In many occasions the declarative system of the templates and the data contained in `grapper-view` 
will be enough to build the graph. 
If we want to respond to user interactions by events, or we need to transform the data, we can use 
Javascript code inside Grapper.
If we want to respond to user interactions via events, or need to perform calculations or transform
data, we can use Javascript code within Grapper.

You can add Javascript code with a simple `<script type="methods"></script>`. 
All functions defined into this tag are available into the template. 
Additionally, you can define several variables or constants or global code into the script, but the 
template only can access to functions define as `function`.

<ClientOnly>
<grapper-view id="methods-example">
  <svg viewBox="0 0 100 100" width="200" height="200">
    <g g-on:click="update" 
       style="cursor: pointer">
      <rect x="1" y="1" width="98" height="90" fill="blue"/>
      <text x="24" y="48" fill="white">click me</text>
    </g>
  </svg>
  <g-script type="methods">
    function update() {
      const rect = $.svg.querySelector('rect');
      rect.fill(rect.fill() === 'blue' ? 'red' : 'blue');
    }
  </g-script>
</grapper-view>
<g-editor href="#methods-example" title="changes color when clicked" lines-highlight="11-14"></g-editor>
</ClientOnly>

In the defined functions we can access the `$` object with which we can access the SVG (`$.svg`) or
the data (`$.data`), facilitating the manipulation of both the generated graphic and the data used.


## Event handling

To associate events to functions defined within the `script type="methods"`, you can use the 
directive `g-on:`, or the shorthand `@`, follow the event name for event handling. 
In the previous example, the directive `g-on:click="update"` link the event `click` to the function
`update`.

In this other example the `click` event on all SVG content, updates the `circles` data value.

<ClientOnly>
<grapper-view id="event-example">
  <svg viewBox="0 0 100 100" g-on:click="click" style="cursor: pointer" width="200" height="200">
    <g g-for="x of circles">
      <circle cx="50" cy="50" fill="none" stroke="black" stroke-width="1"
              g-bind:r="(x + 1) * (48 / circles)"/>
    </g>
  </svg>
  <g-script type="data">
    { "circles": 5 }
  </g-script>
  <g-script type="methods">
    function click(evt) {
      evt.preventDefault();
      if (evt.ctrlKey) {
        $.data.circles--;
      } else {
        $.data.circles++;
      }
    }
  </g-script>
</grapper-view>
<g-editor href="#event-example" title="add circles with click and reduce with ctrl+click" lines-highlight="5;26-33"></g-editor>
</ClientOnly>

## Data transformation

If you create a function with the name `data` it is automatically called when data is loaded or
modified. The function receives the initial data and returns the new data values. You can include
the `data` function to perform the filtering and transformation before the template evaluation,
add calculated values, etc.

<ClientOnly>
<grapper-view id="data-example">
  <svg viewBox="0 0 200 100" width="200px" height="100px">
    <g stroke-width="10" stroke-linecap="round">
      <g g-for="(record, index) of data">
        <line
          x1="10"
          g-bind:x2="record.value"
          g-bind:y1="index * 18 + 10"
          g-bind:y2="index * 18 + 10"
          g-bind:stroke="$.config.colors[index]"
        ></line>
      </g>
    </g>
  </svg>
  <g-script type="data">
    [{ value: 100 }, { value: 150 }, { value: 70 }, { value: 50 }, { value: 90 }]
  </g-script>
  <g-script type="methods">
    function data(records) {
      return records.sort((a, b) => a.value - b.value);
    }
  </g-script>
  <g-script type="config">
    {
      colors: ["#D80000", "#8D0000", "#00008D", "#008D00", "#00D800"],
    }
  </g-script>
</grapper-view>
<g-editor href="#data-example" title="data sorting" lines-highlight="21-23"></g-editor>
</ClientOnly>