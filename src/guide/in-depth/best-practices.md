## Best Practices

### `$.data` vs `$.config`

Although both are accessible from directives and methods, their **purpose** is different:

| Use case               | `$.data` (data)                                     | `$.config` (parameters)                                               |
|------------------------|-----------------------------------------------------|-----------------------------------------------------------------------|
| **Nature**             | Dynamic, changes with user interaction or app flow  | Static or semi-static, defines adjustments and constants              |
| **Origin**             | `<script type="data">` (JSON/JSON5 or CSV)          | `<script type="config">` (JSON/JSON5)                                 |
| **Typical structure**  | Business records, metrics, states                   | Palettes, sizes, margins, limits, style/feature flags                 |
| **When to modify**     | Often: filtering, sorting, adding/removing elements | Occasionally: theme change, layout or user preferences                |
| **Who changes it**     | The app or the user (events, animations, fetches)   | The developer (or user if preferences are exposed)                    |
| **Expected impact**    | Updates trigger re-rendering of dependent elements  | Updates reconfigure the render (without altering the meaning of data) |
| **Examples**           | Chart series, points, active/selected states        | `barWidth`, `margin`, `colors`, `yMax`, `tooltip.format`, `locale`    |
| **External source**    | Usually comes from API or storage                   | Usually defined in the component or a shared theme                    |

#### Recommended patterns

- **Use `$.data` for data**  
  Content being visualized: values, labels, selection states, filtered results.

```html
  <rect g-for="(d,i) of data" :height="d.value"></rect>
````

- **Use `$.config` for parameters**
  Things that configure the view: sizes, palettes, margins, limits, formats.

  ```html
  <rect :width="$.config.barWidth" 
        :fill="$.config.colors[i % $.config.colors.length]"></rect>
  ```

- **Controlled changes**

  * If the user changes the **theme** → update `$.config`.
  * If the user filters data or zooms in a range → update `$.data`.

#### Anti-patterns (avoid)

- ❌ Storing real data inside `$.config` (e.g., a full dataset).
- ❌ Using `$.data` for style constants (e.g., colors, margins).


### Reuse SVG components

Sometimes you need to **repeat the same graphic element** multiple times in a visualization.
Instead of duplicating SVG code, you can define the element once with `<defs>` and then reuse it
with `<use>`. This improves readability and reduces the amount of markup.

#### Basic example

```html
<svg viewBox="0 0 200 100">
  <defs>
    <circle id="myCircle" cx="0" cy="0" r="10" fill="blue"></circle>
  </defs>
  <use href="#myCircle" x="30" y="30"></use>
  <use href="#myCircle" x="70" y="30"></use>
  <use href="#myCircle" x="110" y="30"></use>
</svg>
```

Here, the circle is defined once inside `<defs>` and reused multiple times at different positions.

#### With Grapper directives

Because `<use>` supports attributes like `x`, `y`, `transform`, and `fill`, you can combine it
with **Grapper directives** for dynamic repetition.

```html
<grapper-view>
  <template>
    <svg viewBox="0 0 200 100">
      <defs>
        <circle id="point" cx="0" cy="0" r="6"></circle>
      </defs>
      <use g-for="(item, index) of data"
           href="#point"
           :x="item.x"
           :y="item.y"
           :fill="item.color"></use>
    </svg>
  </template>
  <script type="data">
    [
      { "x": 30, "y": 40, "color": "red" },
      { "x": 80, "y": 60, "color": "green" },
      { "x": 130, "y": 20, "color": "blue" }
    ]
  </script>
</grapper-view>
```

This pattern reduces repetition and keeps your **Grapper templates** clean and efficient.

### Aliases for `<script>` in CMS

If you want to include `<grapper-view>` in a CMS, you can use an alias for `<script type="">` so
that the file type is not rewritten or an exception is thrown because it is a disallowed tag. In
these cases you can use `<g-script type="data">` or `<g-script type="methods">` to indicate the
content type without problems with HTML sanitation processes.

