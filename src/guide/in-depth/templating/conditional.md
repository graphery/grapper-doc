---
outline: deep
---

# Conditional Rendering

The `g-if` directive is a feature in Grapper that allows you to conditionally display elements
based on a boolean value. It provides a simple way to toggle the visibility of SVG elements.

In this example, the `g-if` directive is applied to a `<g>` element. The `data.isVisible` is a
boolean value or expression that determines whether the element should be displayed or hidden. When
the value of `isVisible` is `true`, the circle will be displayed. If the value is `false`, the
element will be hidden and effectively removing it from view.

<ClientOnly>
<div id="conditional">
</div>
<g-editor href="#conditional" lines-highlight="4" keep-aspect><!--<grapper-view data="isVisible: true" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <g g-if="isVisible">
      <circle cx="50" 
              cy="50" 
              r="30"/>
    </g>
  </svg>
</grapper-view>
<p>
  <label>change the visibility:
    <input type="checkbox" checked 
           onchange="document.querySelector('grapper-view').data.isVisible=this.checked">
  </label>
</p>--></g-editor>
</ClientOnly>