---
outline: deep
---

# `value=""` attribute and `.value` property

When the data to be handled is a single number, string or boolean, the `value` attribute and the
`.value` value can be used directly as a shortcut of `data="value: 1"` or `.data={value: 1}`. It 
is useful with very basic visualizations.

<ClientOnly>
<div id="example-value"></div>
<g-editor href="#example-value" lines-highlight="1">
<textarea>
<grapper-view value="50" style="width: 100px;">
  <svg viewBox="0 0 100 100">
    <circle fill="red"
            cx="50"
            cy="50"
            g-bind:r="value"/>
  </svg>
</grapper-view>
</textarea>
</g-editor>
</ClientOnly>

::: warning 

Since version 1.0.0-beta.4

:::
