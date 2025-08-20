---
outline: deep
---

# Scoped CSS

By default, when you insert a style tag in the SVG, this style affects the entire page.
Consequently, collisions and side effects may occur if the selectors used to match other elements.

On the other hand, the styles defined in the page affect all SVG inserted in the page. In this case,
it can be useful to keep a coherent style between graphs, by can be complex to manage.

## CSS define into the template

You can define a `<style>` directly in the template or into the `<svg>` into the template, it will
be used only inside the component and will avoid collision with other styles and components.
Grapper component moves the template into its *Shandow DOM* and applies the style internally.

This is a scoped CSS:

<ClientOnly>
<div id="css-scope-1"></div>
<g-editor href="#css-scope-1" lines-highlight="4-14">
<textarea><grapper-view style="width: 200px">
  <template>
    <svg viewBox="0 0 100 100">
      <style>
        .regular {
          fill : green;
        }
        .warning {
          fill : blue;
        }
        .error {
          fill : red;
        }
      </style>
      <g g-for="value of data">
        <circle :cx="value.x"
                :cy="value.y"
                :r="value.radix"
                :class="value.class"/>
      </g>
    </svg>
  </template>
  <script type="data">    "x";"y";"radix";"class"
    20;20;20;"regular"
    45;45;30;"warning"
    80;80;10;"error"
  </script>
</grapper-view></textarea>
</g-editor>
</ClientOnly>


