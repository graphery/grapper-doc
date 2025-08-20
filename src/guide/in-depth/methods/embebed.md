---
outline: deep
---

# Embebed methods

The `<script type="methods">` tag allow loading functions into the Grapper component. You can
include functions in the code, and these functions are available into the template.

<ClientOnly>
<grapper-view id="embebed-methods-1" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <g g-on:click="change" style="cursor: pointer;">
      <circle id="run" cx="50" cy="50" r="50" fill="red"/>
      <text x="36" y="53">click</text>
    </g>
  </svg>
  <g-script type="methods">
    const circle = $.svg.querySelector('circle');
    const text   = $.svg.querySelector('text');
    function change() {
      if (text.content() === 'click') {
        circle.fill('green');
        text.content('ok').x(44);
      } else {
        circle.fill('red');
        text.content('click').x(36);
      }
    }
  </g-script>
</grapper-view>
<g-editor href="#embebed-methods-1" lines-highlight="13-21"></g-editor>
</ClientOnly>

In this example, we define a `change()` function and use the function in the template as handler for
the event `click`. When the user clicks, the label is changed.

Only the named functions are translated to the template environment. Constants, variables, arrow
function or anonymous functions are not linked to the template.

Into the methods code `$` is a reference to the Grapper template component. As a result, you can
access to the [$.svg]($-svg) element or the [$.data](./$-data.md) object.

::: warning 
In some environments the `<script type="methods"></script>` has conflicts. In these
cases, you can use alternatively `<g-script type="methods"></g-script>`.

<ClientOnly>
<grapper-view id="g-script">
<g-script type="methods">
  // Your code
</g-script>
</grapper-view>
<g-editor href="#g-script" mode="readonly" options="g-script: true"></g-editor>
</ClientOnly>

:::

