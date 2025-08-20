---
outline: deep
---

# Load Methods

In production environments or when you want to hide the code, the `<script type="methods">`
with the `src` attribute makes it straightforward to indicate the source of the functions.

<ClientOnly>
<grapper-view id="load-methods-1" style="width: 200px;">
  <svg viewBox="0 0 100 100">
    <circle id="run" cx="50" cy="50" r="50" fill="red" style="cursor: pointer;"
            g-on:click="change()"/>
    <text x="36" y="53" style="cursor: pointer;"
          g-on:click="change()">click</text>
  </svg>
  <g-script type="methods" src="/methods/circle.js"></g-script>
</grapper-view>
<g-editor href="#load-methods-1" lines-highlight="18"></g-editor>
</ClientOnly>

It is possible to directly include the `methods-src` properties within the `grapper-view` component
itself, simplifying the overall code structure by eliminating the `script` tag.

<g-editor mode="readonly" lines-highlight="3">
<textarea><grapper-view 
  svg-src="/svg/circle.svg" 
  methods-src="/methods/circle.js">
</grapper-view></textarea>
</g-editor>


