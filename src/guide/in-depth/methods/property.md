---
outline: deep
---

# `.methods` property

You can access and manipulate, externally to the component, the functions included into
the `.methods` property of the `grapper-view`.

<ClientOnly>
<div id="property-1">
<grapper-view style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <rect x="5" y="5" width="90" height="90" fill="red"/>
  </svg>
  <g-script type="methods">
    function change() {
      const rect = $.svg.querySelector('rect');
      if (rect.fill() === 'red') {
        rect.fill('green');
      } else {
        rect.fill('red');
      }
    }
  </g-script>
</grapper-view>
<p>
  <button onclick="document.querySelector('grapper-view').methods.change()">
    click here to change
  </button>
</p>
</div>
<g-editor href="#property-1" lines-highlight="19"></g-editor>
</ClientOnly>

You can update, add or remove methods. When a change occurs in the `.methods` object, the SVG
graphic will be automatically updated with the new data, keeping the view up-to-date at all times.

