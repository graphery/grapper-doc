---
outline: deep
---

# Reactivity: data update

The reactivity is a key feature of the Grapper microframework that enables automatic and efficient
data binding between the application's data and the visualization. It ensures that when the data
changes, the corresponding parts of the UI are automatically updated to reflect those changes.

When a `grapper-view` component is created, Grapper automatically identifies all the data properties
accessed. It then establishes a dependency relationship between the component and those data
properties.

Grapper achieves this by leveraging JavaScript's object property by Proxies. When a data property
changes, the reactive system is notified. It then triggers a process called "update"
where it re-evaluates the components that depend on the changed data property. It compares the new
and old values and updates the affected visualization accordingly.

Reactivity is managed at both surface and deep level, detecting changes in the array and dates.

<ClientOnly>
<g-editor mode="readonly">
<textarea><grapper-view>
  <svg viewBox="0 0 100 100" style="border: 1px solid grey; width: 250px; height: 250px">
    <g g-for="{x, y, color} of data">
      <circle r="5" :cx="x" :cy="y" :fill="color" style="stroke:grey; stroke-width: 0.5"/>
    </g>
  </svg>
  <script type="data">
    [
      {x: 10, y: 10, color: "#D80000"},
      {x: 15, y: 20, color: "#00D800"},
      {x: 30, y: 90, color: "#0000D8"}
    ]
  </script>
</grapper-view></textarea>
</g-editor>
</ClientOnly>

<iframe src="../../../html/reactivity.html" style="border: 0; width: 100%; height: 740px"/>