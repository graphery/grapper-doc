---
outline: deep
---

# Handle Events

The Grapper templating would enable the creation of interactive SVG graphics by supporting event
handling. Developers could attach event listeners to SVG elements and respond to user interactions,
such as clicks, hovers, or touches. `g-on` (or the shorthand `@`): attach an event listener to the 
element.

The `g-on` expression must be a function reference, a function call or a direct expression. In this
example displays a message when the rectangle is clicked.

<ClientOnly>
<grapper-view id="events-1">
  <svg viewBox="0 0 100 100" style="cursor: pointer">
    <rect x="10" y="10" width="80" height="80" fill="blue"
          g-on:click="alert(`hello`)"/>
    <text x="18" y="52" fill="white"
          g-on:click="alert(`hello`)">click here</text>
  </svg>
</grapper-view>
<g-editor href="#events-1" lines-highlight="10;12"></g-editor>
</ClientOnly>


Commonly we use `<script type="method"></script>` for add methods to the template component. This
script includes functions than can be used as expressions in `g-on` directive. Please see
the [methods](../methods/index.md) section for more information.

<ClientOnly>
<grapper-view id="events-2">
  <svg viewBox="0 0 100 100" style="cursor: pointer">
    <rect x="10" y="10" width="80" height="80" fill="blue"
          g-on:click="showAlert()"/>
    <text x="18" y="52" fill="white"
          g-on:click="showAlert()">click here</text>
  </svg>
  <g-script type="methods">
    function showAlert() {
      alert(`hello`);
    }
  </g-script>
</grapper-view>
<g-editor href="#events-2" lines-highlight="10;12;18-20"></g-editor>
</ClientOnly>

In the SVG format, the text is not included inside other elements, is displayed over other 
elements. For this reason, in this example, the event handler is created in the `rect` and `text`
elements.