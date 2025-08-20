# Handle events

## Capture events

The preferred way to capture events in Grapper is through the `g-on:` directive.

A simple way to capture the 'click' event is this:

::: code-group
```html [g-on]
<grapper-view>
  <svg viewBox="0 0 200 200">
    <rect x="10" y="10" width="180" height="180" fill="red" style="cursor:pointer;"
          g-on:click="change"/>
  </svg>
  <g-script type="methods">
    function change() {
      this.fill(this.fill() === 'red' ? 'blue' : 'red');
    }
  </g-script>
</grapper-view>
```
```html [addEventListener()]
<grapper-view>
  <svg viewBox="0 0 200 200">
    <rect x="10" y="10" width="180" height="180" fill="red" style="cursor:pointer;"/>
  </svg>
  <g-script type="methods">
    $.svg.querySelector('rect').addEventListener('click', function () {
      this.setAttribute('fill', this.getAttribute('fill') === 'red' ? 'blue' : 'red');
    });
  </g-script>
</grapper-view>
```

<grapper-view>
  <svg viewBox="0 0 200 200">
    <rect x="10" y="10" width="180" height="180" fill="red" style="cursor:pointer;"
          g-on:click="change"/>
  </svg>
  <g-script type="methods">
    function change() {
      this.fill(this.fill() === 'red' ? 'blue' : 'red');
    }
  </g-script>
</grapper-view>


## SVG  events

The SVG has its events, some of which are shared with the HTML DOM, but others are specific or 
behave slightly differently. These events can be grouped into the following categories:

### UI Events

- `focusin`  - Fires when an element receives focus.
- `focusout` - Fires when an element loses focus.
- `activate` - Fires when an element is activated.

### Pointer events (mouse and touch)

- `click`     - Fires when the pointing device button is clicked over an element.
- `mousedown` - Fires when the pointing device button is pressed over an element.
- `mouseup`   - Fires when the pointing device button is released over an element.
- `mouseover` - Fires when the pointing device is moved onto an element.
- `mousemove` - Fires when the pointing device is moved while it is over an element.
- `mouseout`  - Fires when the pointing device is moved away from an element.

### SVG DOM events

- `load`   - Fires when the element is completely loaded and rendered. 
- `unload` - Fires when the SVG is removed from the page DOM.
- `abort`  - Fires when page loading is stopped before the element has been loaded completely.
- `error`  - Fires when an element does not load properly.
- `resize` - Fires when an SVG view is being resized.
- `scroll` - Fires when an SVG view is being shifted along X or Y or both axis. 
- `zoom`   - Fires when the zoom level of an SVG view is being changed.
 
### Animate events
 
- `beginEvent`  - Fired when the animate timeline begins to play.
- `endEvent`    - Fired when the active end of the animation is reached.
- `repeatEvent` - Fired every time the animation is repeated.
