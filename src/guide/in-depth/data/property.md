---
outline: deep
---

# `.data` property

The `grapper-view` data is accessible through the `.data` property. This property is available to:

- external programs using the component (`document.querySelector('grapper-view').data`)
- template directives (`g-for="record of data"`).
- functions defined as methods within the component (`$.data`).

You can manipulate the `.data` object directly, and when a change occurs in this object, the SVG
graphic will be automatically updated with the new data, keeping the view up to date at all times.

<ClientOnly>
<div id="example-wrapper"></div>
<g-editor href="#example-wrapper" lines-highlight="21;31">
<textarea>
  <grapper-view data="w: 80, h: 80" style="width: 100px;" id="example">
    <svg viewBox="0 0 100 100">
      <rect x="0" y="0" fill="green"
            g-bind:width="data.w" 
            g-bind:height="data.h"/>
    </svg>
  </grapper-view>
  <p>
    <label>
      width: <input type="range" min="0" max="100" value="80"
                    oninput="document.querySelector('#example').data.w = this.value">
    </label>
    <label>
      height: <input type="range" min="0" max="100" value="80"
                     oninput="document.querySelector('#example').data.h = this.value">
    </label>
  </p>
</textarea>
</g-editor>
</ClientOnly>