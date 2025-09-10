---
outline: deep
---

# Load external data

In production environments or when accessing remote servers, the `<script type="data">`
with the `src` attribute makes it straightforward to indicate the source of the data. By using these
attributes, you can seamlessly incorporate external data into their visualization.

<ClientOnly>
<grapper-view id="circles1" style="width:150px;">
  <svg viewBox="0 0 100 100">
    <g g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:fill="value.color"/>
    </g>
  </svg>
  <g-script type="data" src="/data/circles.csv"></g-script>
</grapper-view>
<g-editor href="#circles1" lines-highlight="14"></g-editor>
</ClientOnly>
