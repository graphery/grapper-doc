---
outline: deep
---

# Animation

Natively SVG animations can be achieved through various methods, each with its own approach and
potential problems. We recommend using [Grapper Animation](../in-depth/animation/) functionality rather than using 
the native animations directly, although they will always be available for use.


## Native animation

Here are some native ways to create SVG animations:

- CSS Animation: SVG elements can be animated using CSS animation properties, similar to animating
  HTML elements.

- Web Animation API: we can use `.animate()` that exposes a Javascript API for CSS animations.

- SMIL Animation (Synchronized Multimedia Integration Language): allows you to define animations
  directly within the SVG markup by `animate`, `animateTransform` and`animateMotion`, using
  declarative syntax.

- Request Animation Frame: we can use `window.requestAnimationFrame()` for complete custom
  animation.

### CSS animation

CSS animations allow you to animate an SVG with transitions from one CSS style setting to another.
CSS animations have two components, a style that describes the CSS animation and a set of keyframes
that indicate the start and end values, as well as possible intermediate points.

We can add or remove the animation with `.classList` object.

```html
<style>
  .cssAnimation {
    animation : 1s linear circle forwards;
  }

  @keyframes circle {
    from {
      r : 10px;
    }
    to {
      r : 40px;
    }
  }
</style>
```

::: warning Limitations

CSS animation may not be applied on attributes that do not have an equivalent CSS property, among
others, these common SVG attributes:

| attribute | element              |
|-----------|----------------------|
| dx        | text                 |
| dy        | text                 |
| fr        | radialGradient       |
| fx        | radialGradient       |
| fy        | radialGradient       |
| points    | polyline and polygon |
| x1        | line                 |
| x2        | line                 |
| y1        | line                 |
| y2        | line                 |

If you need to animate any of these attributes, use `.animateTo()` or SMIL animations.

:::

### Web Animation API

Related to CSS animation, we can use the new Web Animation API that exposes a Javascript way for CSS
animation. Specially straightforward is the `.animate()` method.

::: warning Limitations

The Web Animation API is an imperative mode for CSS animation, and as a result, it cannot animate
SVG attributes not supported by CSS animations.

If you need to animate any of these attributes, use `.animateTo()` with a programming interface very
similar to `animate()`, but with support for those attributes.

:::

### SMIL

::: warning Not deprecated

On the Internet, we can find documents indicating that SMIL is deprecated. The Chrome team announced
this deprecation, but finally backed down. **SMIL IS NOT DEPRECATED** and some animations are only
possible by this way.

:::

#### animate element

We can add `animate` SVG element that provides a way to animate an element's attribute. Usually,
the `animate` is created nested to the element to which the animation is applied.

With `attributeName` we define the attribute to animate; the attributes `from`and `to` must be used
for defining the initial and finish values of this attribute. `dur` defines the animation 
duration ('1s' or '1000ms' are valid values).

Other important attribute is `fill`. In this case, it defines the final state of the animation. If
the value is `'freeze'`, the state of the last animation frame is kept, but by default
is `'remove'`, and as a result, after the last animation frame, the attribute value returns to the
first.

For control about when the animation is running, we can configure the animate element 
`begin="indefinite"` and call to `.beginElement()` for execute the animation.

```html
<grapper-view>
  <svg viewBox="0 0 100 100" width="100" height="100" g-on:click="run" style="cursor: pointer">
    <circle cx="50" cy="50" r="10" fill="red">
      <animate attributeName="r" from="10" to="40" dur="1.5s" fill="freeze" begin="indefinite"/>
    </circle>
    <text x="20" y="90" font-size="14">click to run</text>
  </svg>
  <g-script type="methods">
    function run() {
      $.svg.querySelector('animate').beginElement();
      $.svg.querySelector('text').remove();
    }
  </g-script>
</grapper-view>
```

<grapper-view>
  <svg viewBox="0 0 100 100" width="100" height="100" g-on:click="run" style="cursor: pointer">
    <circle cx="50" cy="50" r="10" fill="red">
      <animate attributeName="r" from="10" to="40" dur="1.5s" fill="freeze" begin="indefinite"/>
    </circle>
    <text x="20" y="90" font-size="14">click to run</text>
  </svg>
  <g-script type="methods">
    function run() {
      $.svg.querySelector('animate').beginElement();
      $.svg.querySelector('text').remove();
    }
  </g-script>
</grapper-view>


With `values` and `keyTimes` you can define with more precision the animation, establishing the
values that the property has to have in each moment.

#### animate points

With `animate` element we can animate points of `polylinee` or `poligon` elements. This kind of
animation is not possible with CSS or Web Animation API:

```html
<grapper-view>
  <svg viewBox="0,0,50,100" width="100px" height="200px" g-on:click="run" style="cursor: pointer">
    <polyline fill="none" stroke="black" stroke-width="10" 
              points="45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95">
      <animate dur="10s" attributeName="points" begin="indefinite" values="
       45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95; 45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95;
        5,45  5, 5 45, 5 45,45  5,45  5,95 45,95 45,45;  5,45  5, 5 45, 5 45,45  5,45  5,95 45,95 45,45;
        5, 5 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;  5, 5 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;
       45, 5  5, 5  5,45 45,45 45,95  5,95  5,45  5,45; 45, 5  5, 5  5,45 45,45 45,95  5,95  5,45  5,45;
       45, 5  5, 5  5,45 45,45 45,45 45,95  5,95  5,95; 45, 5  5, 5  5,45 45,45 45,45 45,95  5,95  5,95;
        0,45 45, 5 45,45  0,45 45,45 45,45 45,95 45,95;  0,45 45, 5 45,45  0,45 45,45 45,45 45,95 45,95;
        5, 5 45, 5 45,45  5,45 45,45 45,95  5,95  5,95;  5, 5 45, 5 45,45  5,45 45,45 45,95  5,95  5,95;
        5, 5 45, 5 45,45 45,45  5,45  5,95 45,95 45,95;  5, 5 45, 5 45,45 45,45  5,45  5,95 45,95 45,95;
        5,45 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;  5,45 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;
        5, 5 45, 5 45,45 45,45 45,95  5,95  5,45  5, 0;  5, 5 45, 5 45,45 45,45 45,95  5,95  5,45  5, 0;">
      </animate>
    </polyline>
  </svg>
  <script type="methods">
    function run() {
      $.svg.querySelector('animate').beginElement();
    }
  </script>
</grapper-view>
```

<grapper-view>
  <svg viewBox="0,0,50,100" width="100px" height="200px" g-on:click="run" style="cursor: pointer">
    <polyline fill="none" stroke="black" stroke-width="10"
      points="45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95">
      <animate dur="10s" attributeName="points" begin="indefinite" values="
         45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95; 45,45  5,45  5, 5 45, 5 45,45 45,45 45,95 45,95;
          5,45  5, 5 45, 5 45,45  5,45  5,95 45,95 45,45;  5,45  5, 5 45, 5 45,45  5,45  5,95 45,95 45,45;
          5, 5 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;  5, 5 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;
         45, 5  5, 5  5,45 45,45 45,95  5,95  5,45  5,45; 45, 5  5, 5  5,45 45,45 45,95  5,95  5,45  5,45;
         45, 5  5, 5  5,45 45,45 45,45 45,95  5,95  5,95; 45, 5  5, 5  5,45 45,45 45,45 45,95  5,95  5,95;
          0,45 45, 5 45,45  0,45 45,45 45,45 45,95 45,95;  0,45 45, 5 45,45  0,45 45,45 45,45 45,95 45,95;
          5, 5 45, 5 45,45  5,45 45,45 45,95  5,95  5,95;  5, 5 45, 5 45,45  5,45 45,45 45,95  5,95  5,95;
          5, 5 45, 5 45,45 45,45  5,45  5,95 45,95 45,95;  5, 5 45, 5 45,45 45,45  5,45  5,95 45,95 45,95;
          5,45 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;  5,45 45, 5 45,45 45,45 45,45 45,45 45,95 45,95;
          5, 5 45, 5 45,45 45,45 45,95  5,95  5,45  5, 0;  5, 5 45, 5 45,45 45,45 45,95  5,95  5,45  5, 0;">
      </animate>
    </polyline>
  </svg>
  <g-script type="methods">
    function run() {
      $.svg.querySelector('animate').beginElement();
    }
  </g-script>
</grapper-view>

::: warning Limitations

The `animate` element cannot animate CSS property without an SVG attribute equivalence; especially
important are CSS properties related to text styling such
as `text-decoration-color`, `text-decoration-thickness`, `text-emphasis`,
`text-emphasis-color`, `text-indent`, `text-shadow`, `text-underline-offset`.

If you need to animate any of these properties, use `.animateTo()`, CSS animations or Web Animation
API.

:::

#### animateTransform element

With `.add('animateTransform')`, we can animate an element with a transformation. Usually,
the `animateTransform` is created nested to the element to which the animation is applied.

In this case, method `.attributeName()` must be called with `'transform'` value, and the methods
`.from()` and `.to()` can be used for defining the initial and finish transformation values or use
`.values()` to determine the values into elapse animation time. As in other cases, `.dur()` defines
the animation duration, and `.repeatCount()` establishes the number of animation, or if this is
`'indefinite`. If you need to add more than one `animationTransform`, you need to call
`.additional('sum')`.


```js
<grapper-view>
  <svg viewBox="0,0,100,100" width="200" height="200">
    <rect width="60" height="60" fill="red">
      <animateTransform attributeName="transform" type="rotate" dur="2s"
                        from="0,50,50" to="360,50,50"
                        repeatCount="indefinite" additive="sum"/>
      <animateTransform attributeName="transform" type="translate" dur="1s"
                        values="20,20;35,35;20,20"
                        repeatCount="indefinite" additive="sum"/>
      <animateTransform attributeName="transform" type="scale" dur="1s"
                        values="1;0.5;1"
                        repeatCount="indefinite" additive="sum"/>
    </rect>
  </svg>
</grapper-view>
```

<grapper-view>
  <svg viewBox="0,0,100,100" width="200" height="200">
    <rect width="60" height="60" fill="red">
      <animateTransform attributeName="transform" type="rotate" dur="2s" 
                        from="0,50,50" to="360,50,50"
                        repeatCount="indefinite" additive="sum"/>
      <animateTransform attributeName="transform" type="translate" dur="1s" 
                        values="20,20;35,35;20,20"
                        repeatCount="indefinite" additive="sum"/>
      <animateTransform attributeName="transform" type="scale" dur="1s" 
                        values="1;0.5;1"
                        repeatCount="indefinite" additive="sum"/>
    </rect>
  </svg>
</grapper-view>

#### animateMotion element

`.add('animateMotion')` create an element can animate the movement of a shape along a motion path.
You can define the path directly on this element (`.path()`) or reuse a previous path with
`animateMotion.add('mpath').href()`.

A handy attribute is `.rotate()`, then define the shape orientation into the motion. It can be
a `number`, `'auto'`, or `'auto-reverse'`. As in other animations, you can use `.dur()`,
`.repeatCount()` and other method to config the behavior.


```js
<grapper-view>
  <svg viewBox="0,0,100,100" width="200" height="200">
    <defs>
      <path d="M15,50a15,15,0,1,1,75,0a15,15,0,1,1,-75,0" id="path1"></path>
    </defs>
    <polygon points="10,0,0,-4,0,4">
      <animateMotion dur="1500ms" repeatCount="indefinite" rotate="auto">
        <mpath href="#path1"></mpath>
      </animateMotion>
    </polygon>
  </svg>
</grapper-view>
```

<grapper-view>
  <svg viewBox="0,0,100,100" width="200" height="200">
    <defs>
      <path d="M15,50a15,15,0,1,1,75,0a15,15,0,1,1,-75,0" id="path1"></path>
    </defs>
    <polygon points="10,0,0,-4,0,4">
      <animateMotion dur="1500ms" repeatCount="indefinite" rotate="auto">
        <mpath href="#path1"></mpath>
      </animateMotion>
    </polygon>
  </svg>
</grapper-view>

### requestAnimationFrame()

We can use Javascript and the method `requestAnimationFrame()` for complete custom animation.

```html
<grapper-view>
  <svg viewBox="0 0 100 100" style="cursor: pointer"
    g-on:click="window.requestAnimationFrame(step)">
    <circle cx="50" cy="50" r="10" fill="red"/>
  </svg>
  <script type="methods">
    const circle = $.svg.querySelector('circle');
    const from   = 10;
    const to     = 40;
    let duration = 1000;
    let start    = 0;
    function step (timestamp) {
      if (!start) {
        start = timestamp;
      }
      const progress = (to - from) * ((timestamp - start) / duration) + from;
      circle.r(Math.min(progress, to));
      if (progress <= to) {
        window.requestAnimationFrame(step);
      }
    }
  </script>
</grapper-view>

```

<grapper-view>
  <svg viewBox="0 0 100 100" style="cursor: pointer"
    g-on:click="window.requestAnimationFrame(step)">
    <circle cx="50" cy="50" r="10" fill="red"/>
  </svg>
  <g-script type="methods">
    const circle = $.svg.querySelector('circle');
    const from   = 10;
    const to     = 40;
    let duration = 1000;
    let start    = 0;
    function step (timestamp) {
      if (!start) {
        start = timestamp;
      }
      const progress = (to - from) * ((timestamp - start) / duration) + from;
      circle.r(Math.min(progress, to));
      if (Math.max(progress, to) === to) {
        window.requestAnimationFrame(step);
      }
    }
  </g-script>
</grapper-view>

