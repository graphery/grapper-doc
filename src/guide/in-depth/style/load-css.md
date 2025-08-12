---
outline: deep
---

# Load External CSS

You can define load an external CSS file in the template with
a `<link rel="stylesheet" href="file.css">` tag.

<ClientOnly>
<div id="load-css-1"></div>
<g-editor href="#load-css-1" lines-highlight="3" keep-format>
<textarea><grapper-view style="width: 200px;">
  <template>
    <link rel="stylesheet" href="/css/style.css">
    <svg viewBox="0 0 100 100">
      <g g-for="value of data">
        <circle :cx="value.x"
                :cy="value.y"
                :r="value.radix"
                :class="value.class"/>
      </g>
    </svg>
  </template>
  <g-script type="data">
    "x";"y";"radix";"class"
    20;20;20;"regular"
    45;45;30;"warning"
    80;80;10;"error"
  </g-script>
</grapper-view></textarea>
</g-editor>
</ClientOnly>


