---
outline: deep
---

# Attribute Class

## `g-bind`

You can be used `g-bind`, or the shorthand `:`, with the `class` attribute to dynamically bind CSS
classes to an element. You can bind a single class or an array of classes.

<ClientOnly>
<div id="attribute-class-1"></div>
<g-editor href="#attribute-class-1" lines-highlight="9">
<textarea><grapper-view style="width: 200px">
  <template>
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
    <svg viewBox="0 0 100 100">
      <g g-for="value of data">
        <circle :cx="value.x"
                :cy="value.y"
                :r="value.radix"
                :class="value.class"/>
      </g>
    </svg>
  </template>
  <g-script type="data">    "x";"y";"radix";"class"
    20;20;20;"regular"
    45;45;30;"warning"
    80;80;10;"error"
  </g-script>
</grapper-view></textarea>
</g-editor>
</ClientOnly>



## API


By the Grapper SVG API, you can use the `.classList` object and its methods:

- `.classList.contains( class )` - returns true if the list contains the given class, otherwise
  false.
- `.classList.add( class )` - adds the specified class.
- `.classList.remove( class )` - removes the specified class.
- `.classList.replace( oldClass, newClass)` - replaces oldClass with newClass.
- `.classList.toggle( class )` - removes class from if it exists or adds class if it doesn't.
