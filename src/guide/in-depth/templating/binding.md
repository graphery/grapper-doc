---
outline: deep
---

# Binding Attribute Values

The `g-bind` directive, also known as the shorthand `:` syntax, is a fundamental directive in
Grapper that enables you to bind values or expressions to SVG attributes, styles and classes in
your templates. This directive must include the name of the attribute to which you want to assign a
value, for example, `g-bind:r="expression"` or simply `:r="expression"`.

## Attributes

The `g-bind` directive allows you to dynamically associate data to the SVG attributes. This enables
you to update the values and update the attributes automatically.

Here is an example of using the `g-bind` directive to bind the `r` attribute of a circle element to
a dynamic value:

<ClientOnly><g-editor mode="readonly">
<textarea><circle g-bind:r="size"/></textarea></g-editor></ClientOnly>

In this case, `size` refers to a data property that holds the radius value. The `g-bind` directive
binds the `r` attribute of the circle element to that value. When `size` changes in the Grapper
component, the radius attribute will be automatically updated.


<ClientOnly>
  <div id="binding-1">
  <grapper-view data="size: 25;" id="circle" style="width: 200px;">
    <svg viewBox="0 0 100 100">
      <circle g-bind:r="size"
              cx="50" 
              cy="50" 
              fill="red"></circle>
    </svg>
  </grapper-view>
  <p>
    <label>Change the size:
    <input type="range" max="50" value="25"
    oninput="document.querySelector('#circle').data.size = this.value">
    </label>
  </p>
</div>
<g-editor href="#binding-1" lines-highlight="4"></g-editor>
</ClientOnly>

If you need to query the current value of an attribute in the expression that has the `g-bind` 
directive, you can use the `$.curentVale()` helper to get the value before executing the 
expression.

## Style

When using `g-bind` with the `style` attribute, you can dynamically bind an object containing CSS
styles to an element. The keys of the object represent the CSS properties, and the values represent
the corresponding values for those properties.

<ClientOnly>
<grapper-view id="binding-2" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <g g-for="value of data">
      <circle g-bind:cx="value.x"
              g-bind:cy="value.y"
              g-bind:r="value.radix"
              g-bind:style="{fill: value.color}"/>
    </g>
  </svg>
  <g-script type="data">[
    {x: 20, y: 20, radix: 20, color: "red"},
    {x: 45, y: 45, radix: 30, color: "blue"},
    {x: 80, y: 80, radix: 10, color: "green"}
  ]</g-script>
</grapper-view>
<g-editor href="#binding-2" lines-highlight="9"></g-editor>
</ClientOnly>

The behavior of `g-bind` with the `style` attribute is additive, that is, it adds the new values to
the existing style.

## Class

Similarly, `g-bind`, or the shorthand `:`, can be used with the class attribute to dynamically bind
CSS classes to an element based on the values in the `<grapper-view>` component data. You can bind a 
single class, an array of classes, an object with classes an values `true` for add or `false` for 
remove, and a mix of array and objects.

<ClientOnly>
<div id="binding-3"></div>
<g-editor href="#binding-3" lines-highlight="4-14;20">
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
  <script type="data">[
    {x: 20, y: 20, radix: 20, class: "regular"},
    {x: 45, y: 45, radix: 30, class: "warning"},
    {x: 80, y: 80, radix: 10, class: "error"}
  ]</script>
</grapper-view></textarea>
</g-editor>
</ClientOnly>

With strings or an array with strings, the behavior of `g-bind` with the `class` attribute is 
additive, that is, it adds the new values to the existing classes and does not replace them. 

Using an object with class names as keys and boolean values as conditions allows adding or removing 
classes dynamically.

- `true` means the class is added.
- `false` means the class is not added (and if previously present, it is effectively removed).
