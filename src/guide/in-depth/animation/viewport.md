---
outline: deep
---

# Animation in and out the viewport

In this section, you discover how to animate the SVG graph Grapper when the component is visible
into the viewport.

## Attribute `viewport-ratio`

To activate the animation when the component enters the visible area (the viewport) it is necessary
to define a `viewport-ratio` attribute in `grapper-view`. This attribute has to contain a value
between `0` and `1` that indicates the percentage of the component that must be inside the visible
area for the event to be triggered.

```html
<grapper-view intersection-ratio="0.5">
</grapper-view>
```

## Event `intersection.enter`

When the component enters the viewport at the ratio indicated in `viewport-ratio` a 
`intersection.enter` event is triggered which can be captured to launch an animation, modify SVG 
attributes, etc.

<ClientOnly>
<div id="viewport-1" style="width: 200px; height: 200px; overflow: auto; border: 1px solid grey; text-align: center">
  <grapper-view intersection-ratio="1" style="width: 100px; margin-top: 240px; margin-bottom: 240px;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" g-on:intersection.enter="enter">
        <path fill="none" 
              stroke="green" 
              stroke-width="20" 
              stroke-linecap="round" 
              stroke-linejoin="round"
              stroke-dasharray="1000"
              stroke-dashoffset="1000"
              d="M34 240L192 392L466 100"/>
    </svg>
    <g-script type="methods">
      const path = $.svg.querySelector('path');
      function enter () {
        path.animateTo({'stroke-dashoffset': 0});
      }
    </g-script>
  </grapper-view>
</div>
<g-editor href="#viewport-1" lines-highlight="21-23"></g-editor>
</ClientOnly>

## Event `intersection-exit`

Similarly, we can capture the `intersection-exit` event that is fired when the component exits the
visible area at the rate indicated in `viewport-ratio`.

<ClientOnly>
<div id="viewport-2" style="width: 200px; height: 200px; overflow-y: scroll; overflow-x: hidden; border: 1px solid grey; text-align: center">
  <grapper-view intersection-ratio="1" style="width: 100px; margin-top: 240px; margin-bottom: 240px;">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" g-on:intersection.enter="enter" g-on:intersection.exit="exit">
        <path fill="none" 
              stroke="green" 
              stroke-width="20" 
              stroke-linecap="round" 
              stroke-linejoin="round"
              stroke-dasharray="1000"
              stroke-dashoffset="1000"
              d="M34 240L192 392L466 100"/>
    </svg>
    <g-script type="methods">
      const path = $.svg.querySelector('path');
      function enter() {
        path.animateTo({'stroke-dashoffset': 0});
      }
      function exit () {
        path.animateTo({'stroke-dashoffset': 1000});
      }
    </g-script>
  </grapper-view>
</div>
<g-editor href="#viewport-2" lines-highlight="24-26"></g-editor>
</ClientOnly>

