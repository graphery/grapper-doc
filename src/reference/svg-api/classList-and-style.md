# classList and style

Some properties such as `style` or `classList`  are objects and in these cases you can access to deep properties as 
methods.

## `.classList`

| property / method name             | description                                                                                                                                                                |
|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| *`element`*`.classList.length()`   | Returns an integer representing the number of objects stored in the object..                                                                                               |
| *`element`*`.classList.value()`    | Returns or defines a string with the value of the list.                                                                                                                    |
| *`element`*`.classList.item()`     | Returns the item in the list by its index<br/> or null if the index is greater than or equal to the list's length.                                                             |
| *`element`*`.classList.contains()` | Returns true if the list contains the given token<br/> otherwise false.                                                                                                        |
 | *`element`*`.classList.add()`      | Adds the specified tokens to the list.                                                                                                                                     |
 | *`element`*`.classList.remove()`   | Removes the specified tokens from the list.                                                                                                                                |
 | *`element`*`.classList.replace()`  | Replaces the token with another one.                                                                                                                                       |
 | *`element`*`.classList.supports()` | Returns true if the given token is in the associated attribute's supported tokens.                                                                                         |
 | *`element`*`.classList.toggle()`   | Removes the token from the list if it exists<br/> or adds it to the list if it doesn't. Returns a boolean indicating whether the token is in the list after the operation.     |
 | *`element`*`.classList.entries()`  | Returns an iterator<br/> allowing you to go through all key/value pairs contained in this object.                                                                              |
 | *`element`*`.classList.forEach()`  | Executes a provided callback function once for each `.classList` element.                                                                                                  |
 | *`element`*`.classList.keys()`     | Returns an iterator<br/> allowing you to go through all keys of the key/value pairs contained in this object.                                                                  |
 | *`element`*`.classList.values()`   | Returns an iterator<br/> allowing you to go through all values of the key/value pairs contained in this object.                                                                |

```js
const $.svg = SVG().viewBox('0 0 100 100');
svg.classList.add('test')
```

## `.style`

`style` is a special element
because is an attribute and an object with properties. In this case you can use 
`.style()` to access as attribute and `.style.` to access its child properties.

The properties of the `.style` object are wrapped and its properties are now methods, but they cannot be chained, and 
you have to use `.style` explicitly in each call, since these methods return the main object and not the `style` object.

```js
const $.svg = SVG().viewBox('0 0 100 100');
svg.style.strokeWidth('10px').style.stroke('#000000');
```

::: tip Note
Many SVG attributes are visuals and can also be used as properties CSS
so in Grapper you can choose to use  
`.stroke_width()` or `.style.strokeWidth()`.
:::

| style property                        | SVG attribute                     | element                                                                                                                         |
|---------------------------------------|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `.style.cx()`                         | `.cx()`                           | [circle](./circle.md) [ellipse](./ellipse.md)                                                                                   |
| `.style.cy()`                         | `.cy()`                           | [circle](./circle.md) [ellipse](./ellipse.md)                                                                                   |
| `.style.height()`                     | `.height()`                       | [foreignObject](./foreignObject.md) [image](./image.md) [rect](./rect.md) [svg](./svg.md) [symbol](./symbol.md) [use](./use.md) |
| `.style.width()`                      | `.width()`                        | [foreignObject](./foreignObject.md) [image](./image.md) [rect](./rect.md) [svg](./svg.md) [symbol](./symbol.md) [use](./use.md) |
| `.style.x()`                          | `.x()`                            | [foreignObject](./foreignObject.md) [image](./image.md) [rect](./rect.md) [svg](./svg.md) [symbol](./symbol.md) [use](./use.md) |
| `.style.y()`                          | `.y()`                            | [foreignObject](./foreignObject.md) [image](./image.md) [rect](./rect.md) [svg](./svg.md) [symbol](./symbol.md) [use](./use.md) |
| `.style.r()`                          | `.r()`                            | [circle](./circle.md)                                                                                                           |
| `.style.rx()`                         | `.rx()`                           | [ellipse](./ellipse.md) [rect](./rect.md)                                                                                       |
| `.style.ry()`                         | `.ry()`                           | [ellipse](./ellipse.md) [rect](./rect.md)                                                                                       |
| `.style.d()`                          | `.d()`                            | [path](./path.md) (with different syntax between style and property)                                                            |
| `.style.fill()`                       | `.fill()`                         | Any element except for [animate](./animate.md)<br/> which have a different fill attribute.                                      |
| `.style.transform()`                  | `.transform()`                    | The CSS transform and the SVG transform have different format                                                                   |
| `.style.alignmentBaseline()`          | `.alignment_baseline()`           | Any element                                                                                                                     |
| `.style.baselineShift()`              | `.baseline_shift()`               | Any element                                                                                                                     |
| `.style.clipPath()`                   | `.clip_path()`                    | Any element                                                                                                                     |
| `.style.clipRule()`                   | `.clip_rule()`                    | Any element                                                                                                                     |
| `.style.color()`                      | `.color()`                        | Any element                                                                                                                     |
| `.style.colorInterpolation()`         | `.color_interpolation()`          | Any element                                                                                                                     |
| `.style.colorInterpolationFilters()`  | `.color_interpolation_filters()`  | Any element                                                                                                                     |
| `.style.cursor()`                     | `.cursor()`                       | Any element                                                                                                                     |
| `.style.direction()`                  | `.direction()`                    | Any element                                                                                                                     |
| `.style.display()`                    | `.display()`                      | Any element                                                                                                                     |
| `.style.dominantBaseline()`           | `.dominant_baseline()`            | Any element                                                                                                                     |
| `.style.fillOpacity()`                | `.fill_opacity()`                 | Any element                                                                                                                     |
| `.style.fillRule()`                   | `.fill_rule()`                    | Any element                                                                                                                     |
| `.style.filter()`                     | `.filter()`                       | Any element                                                                                                                     |
| `.style.floodColor()`                 | `.flood_color()`                  | Any element                                                                                                                     |
| `.style.floodOpacity()`               | `.flood_opacity()`                | Any element                                                                                                                     |
| `.style.fontFamily()`                 | `.font_family()`                  | Any element                                                                                                                     |
| `.style.fontSize()`                   | `.font_size()`                    | Any element                                                                                                                     |
| `.style.fontSizeAdjust()`             | `.font_size_adjust()`             | Any element                                                                                                                     |
| `.style.fontStretch()`                | `.font_stretch()`                 | Any element                                                                                                                     |
| `.style.fontStyle()`                  | `.font_style()`                   | Any element                                                                                                                     |
| `.style.fontVariant()`                | `.font_variant()`                 | Any element                                                                                                                     |
| `.style.fontWeight()`                 | `.font_weight()`                  | Any element                                                                                                                     |
| `.style.glyphOrientationHorizontal()` | `.glyph_orientation_horizontal()` | Any element                                                                                                                     |
| `.style.glyphOrientationVertical()`   | `.glyph_orientation_vertical()`   | Any element                                                                                                                     |
| `.style.imageRendering()`             | `.image_rendering()`              | Any element                                                                                                                     |
| `.style.letterSpacing()`              | `.letter_spacing()`               | Any element                                                                                                                     |
| `.style.lightingColor()`              | `.lighting_color()`               | Any element                                                                                                                     |
| `.style.markerEnd()`                  | `.marker_end()`                   | Any element                                                                                                                     |
| `.style.markerMid()`                  | `.marker_mid()`                   | Any element                                                                                                                     |
| `.style.markerStart()`                | `.marker_start()`                 | Any element                                                                                                                     |
| `.style.mask()`                       | `.mask()`                         | Any element                                                                                                                     |
| `.style.maskType()`                   | `.mask_type()`                    | Any element                                                                                                                     |
| `.style.opacity()`                    | `.opacity()`                      | Any element                                                                                                                     |
| `.style.overflow()`                   | `.overflow()`                     | Any element                                                                                                                     |
| `.style.paintOrder()`                 | `.paint_order()`                  | Any element                                                                                                                     |
| `.style.pointerEvents()`              | `.pointer_events()`               | Any element                                                                                                                     |
| `.style.shapeRendering()`             | `.shape_rendering()`              | Any element                                                                                                                     |
| `.style.stopColor()`                  | `.stop_color()`                   | Any element                                                                                                                     |
| `.style.stopOpacity()`                | `.stop_opacity()`                 | Any element                                                                                                                     |
| `.style.stroke()`                     | `.stroke()`                       | Any element                                                                                                                     |
| `.style.strokeDasharray()`            | `.stroke_dasharray()`             | Any element                                                                                                                     |
| `.style.strokeDashoffset()`           | `.stroke_dashoffset()`            | Any element                                                                                                                     |
| `.style.strokeLinecap()`              | `.stroke_linecap()`               | Any element                                                                                                                     |
| `.style.strokeLinejoin()`             | `.stroke_linejoin()`              | Any element                                                                                                                     |
| `.style.strokeMiterlimit()`           | `.stroke_miterlimit()`            | Any element                                                                                                                     |
| `.style.strokeOpacity()`              | `.stroke_opacity()`               | Any element                                                                                                                     |
| `.style.strokeWidth()`                | `.stroke_width()`                 | Any element                                                                                                                     |
| `.style.textAnchor()`                 | `.text_anchor()`                  | Any element                                                                                                                     |
| `.style.textDecoration()`             | `.text_decoration()`              | Any element                                                                                                                     |
| `.style.textOverflow()`               | `.text_overflow()`                | Any element                                                                                                                     |
| `.style.textRendering()`              | `.text_rendering()`               | Any element                                                                                                                     |
| `.style.transformOrigin()`            | `.transform_origin()`             | Any element                                                                                                                     |
| `.style.unicodeBidi()`                | `.unicode_bidi()`                 | Any element                                                                                                                     |
| `.style.vectorEffect()`               | `.vector_effect()`                | Any element                                                                                                                     |
| `.style.visibility()`                 | `.visibility()`                   | Any element                                                                                                                     |
| `.style.whiteSpace()`                 | `.white_space()`                  | Any element                                                                                                                     |
| `.style.wordSpacing()`                | `.word_spacing()`                 | Any element                                                                                                                     |
| `.style.writingMode()`                | `.writing_mode()`                 | Any element                                                                                                                     |




