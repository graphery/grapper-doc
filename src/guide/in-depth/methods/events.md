---
outline: deep
---

# Events

Methods can be used to respond to events, both triggered by user interaction and from `grapper-view` 
in its life cycle.

## User events

You can capture all SVG events as `click` or `mouseover` with the `g-on:` directive and execute an 
associated method.

<ClientOnly>
<grapper-view id="events-1">
  <svg viewBox="0 0 100 100" style="cursor: pointer">
    <rect x="10" 
          y="10" 
          width="80" 
          height="80" 
          fill="blue"
          g-on:click="change"/>
    <text x="18" 
          y="52" 
          fill="white"
          g-on:click="change">click here</text>
  </svg>
  <g-script type="methods">
    function change() {
      const rect = $.svg.querySelector('rect');
      if (rect.fill() === 'blue') {
        rect.fill('red')
      } else {
        rect.fill('blue')
      }
    }
  </g-script>
</grapper-view>
<g-editor href="#events-1" lines-highlight="10;12"></g-editor>
</ClientOnly>


## `load` event

The 'load' event is fired for `grapper-view` when the component and each element are loaded, and 
before the template has been processed; therefore, you can change the template. This event is 
captured with `$.addEventListener('load', ...)`.

<ClientOnly>
<grapper-view id="events-2">
  <svg viewBox="0 0 100 100">
    <rect x="10" y="10" width="80" height="80" fill="blue"/>
    <text x="18" y="52" fill="white"></text>
  </svg>
  <g-script type="methods">
    $.addEventListener('load', (e) => {
      $.svg.querySelector('text').innerHTML('loaded');
    });
  </g-script>
</grapper-view>
<g-editor href="#events-2" lines-highlight="9-11"></g-editor>
</ClientOnly>

## `render` event

The 'render' event is fired when the template has been processed; therefore, you can change the 
render process result. This event is captured with `$.addEventListener('render', ...)`.

<ClientOnly>
<grapper-view id="events-3">
  <svg viewBox="0 0 100 100">
    <rect x="10" y="10" width="80" height="80" fill="blue"></rect>
    <text x="18" y="52" fill="white"></text>
  </svg>
  <g-script type="methods">
    $.addEventListener('render', (e) => {
      $.svg.querySelector('text').innerHTML('rendered');
    });
  </g-script>
</grapper-view>
<g-editor href="#events-3" lines-highlight="9-11"></g-editor>
</ClientOnly>


## Intersection

When the `intersection-ratio` attribute is set between `0` and `1`:

- the `intersection.enter` event is emitted when that proportion of the element is visible in the 
  viewport. 
- the `intersection.exit` event is emitted when that proportion of the element is no longer visible 
  in the viewport.

<ClientOnly>
<grapper-view id="events-4" style="width: 200px;" intersection-ratio="1">
  <svg viewBox="0 0 100 100">
    <rect x="5" y="5" width="90" height="90" fill="red"/>
  </svg>
  <g-script type="methods">
    const rect = $.svg.querySelector('rect');
    $.addEventListener('intersection.enter', () => {
      rect.fill('green');
    });
    $.addEventListener('intersection.exit', () => {
      rect.fill('red');
    });
  </g-script>
</grapper-view>
<p>
  Please scroll the page to see how the background color changes.
</p>
<g-editor href="#events-4" lines-highlight="19"></g-editor>
</ClientOnly>