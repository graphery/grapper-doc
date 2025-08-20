---
outline: deep
---

# Size and aspect ratio

## The SVG coordinate system

An important aspect is getting a grasp of the coordinate system to which the SVG will be mapped.
This workspace is defined into the SVG element by the dimensions of the viewport and the viewBox.

### viewBox

The `viewBox` mapped the internal boundaries associated with the SVG element. It's defined with four
values: `min-x`, `min-y`, `width`, and `height`. The `min-` values represent at what point within
the image reference coordination should start, while the `width` and `height` establish the
reference box's size.

All position and size measurements of the nested elements use these dimensions as a reference,
regardless of the SVG size.

### viewport

The SVG dimensions is set through `height` and `width` into the SVG element. If these values are not
defined, the SVG dimensions will be determined by the container width, and work as `width="100%"`.

If the viewport maintains the same `viewBox` width and height ratio, the image is resized without
deformation. If the viewport changes the ratio, the `preserveAspectRatio` defines how to display the
SVG content.

## Scale

You can define the SVG size with `height` and `width`, the SVG can be scaled without limitations, to
reduce and increase it.

This is the base image:

::: code-group

```svg
<svg viewBox="0 0 100 100" style="border: 1px dashed grey;" width="100" height="100">
    <line x1="0" y1="0" x2="100" y2="100"
          stroke-width="1" stroke-dasharray="18.5,2" stroke="grey"/>
    <line x1="100" y1="0" x2="0" y2="100"
          stroke-width="1" stroke-dasharray="18.5,2" stroke="grey"/>
</svg>
```

```js
$.svg.style.border('1px dashed grey').viewBox(0, 0, 100, 100);
$.svg.add('line')
     .x1(0).y1(0).x2(100).y2(100)
     .stroke_width(1).stroke_dasharray(18.5, 2).stroke('grey');
$.svg.add('line')
     .x1(100).y1(0).x2(0).y2(100)
     .stroke_width(1).stroke_dasharray(18.5, 2).stroke('grey');
```

:::

<svg viewBox="0 0 100 100" style="border: 1px dashed grey;" width="100" height="100">
    <line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="0" y1="0" x2="100" y2="100"/>
    <line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="100" y1="0" x2="0" y2="100"/>
</svg>

These are the same SVG with different `width` and `height` values:

| `viewBox="0 0 100 100" width="125" height="125"`                                                                                                                                                                                                                                            | `viewBox="0 0 100 100" width="100" height="100"`                                                                                                                                                                                                                                            | `viewBox="0 0 100 100" width="75" height="75"`                                                                                                                                                                                                                                            |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <svg viewBox="0,0,100,100" style="border: 1px dashed grey;" width="125" height="125"><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="0" y1="0" x2="100" y2="100"/><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="100" y1="0" x2="0" y2="100"/></svg> | <svg viewBox="0,0,100,100" style="border: 1px dashed grey;" width="100" height="100"><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="0" y1="0" x2="100" y2="100"/><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="100" y1="0" x2="0" y2="100"/></svg> | <svg viewBox="0,0,100,100" style="border: 1px dashed grey;" width="75" height="75"><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="0" y1="0" x2="100" y2="100"/><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="100" y1="0" x2="0" y2="100"/></svg> |

## preserveAspectRatio

### Non Defined

If you don't configure a `preserveAspectRatio` and the width defined with `width` has a higher ratio
than the one specified in the `viewBox`, then the SVG will be wider, and its content will be
centered. If the height defined with `height` has a greater proportion than that defined in the
`viewBox`, then the SVG will be taller, and its content will be displayed centered vertically.

With different values of `width` and `height` ratio, and without `preserveAspectRatio`
configuration, these are the results:

| `viewBox="0 0 100 100" width="125" height="125"`                                                                                                                                                                                                                                            | `viewBox="0 0 100 100" width="75" height="125"`                                                                                                                                                                                                                                            | `viewBox="0 0 100 100" width="125" height="75"`                                                                                                                                                                                                                                            |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <svg viewBox="0,0,100,100" style="border: 1px dashed grey;" width="125" height="125"><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="0" y1="0" x2="100" y2="100"/><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="100" y1="0" x2="0" y2="100"/></svg> | <svg viewBox="0,0,100,100" style="border: 1px dashed grey;" width="75" height="125"><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="0" y1="0" x2="100" y2="100"/><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="100" y1="0" x2="0" y2="100"/></svg> | <svg viewBox="0,0,100,100" style="border: 1px dashed grey;" width="125" height="75"><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="0" y1="0" x2="100" y2="100"/><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="100" y1="0" x2="0" y2="100"/></svg> |

### Non-uniform scaling

When the `preserveAspectRatio` is set to `none`, the SVG size is changed, and the content is
deformed to occupy the new SVG edge.

With different values of `width` and `height` ratio, and without `.preserveAspectRatio()` configure
as `none`, these are the results:

| `viewBox="0 0 100 100" width="125" height="125" preserveAspectRatio="none"`                                                                                                                                                                                                                                            | `viewBox="0 0 100 100" width="75" height="125" preserveAspectRatio="none"`                                                                                                                                                                                                                                            | `viewBox="0 0 100 100" width="125" height="75" preserveAspectRatio="none"`                                                                                                                                                                                                                                            |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <svg viewBox="0,0,100,100" style="border: 1px dashed grey;" width="125" height="125" preserveAspectRatio="none"><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="0" y1="0" x2="100" y2="100"/><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="100" y1="0" x2="0" y2="100"/></svg> | <svg viewBox="0,0,100,100" style="border: 1px dashed grey;" width="75" height="125" preserveAspectRatio="none"><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="0" y1="0" x2="100" y2="100"/><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="100" y1="0" x2="0" y2="100"/></svg> | <svg viewBox="0,0,100,100" style="border: 1px dashed grey;" width="125" height="75" preserveAspectRatio="none"><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="0" y1="0" x2="100" y2="100"/><line stroke-width="1" stroke-dasharray="18.5,2" stroke="grey" x1="100" y1="0" x2="0" y2="100"/></svg> |

### Uniform scaling

For forcing uniform scaling, the `preserveAspectRatio` accept a parameter with two values (separated
by space): *align* and `meet|slice`.

The *align* value takes two parts and directs the viewBox's alignment within the viewport:

- `xMin` - Align the `min-x` of the element's viewBox with the smallest X value of the viewport.
- `xMid` - Align the midpoint X value of the element's viewBox with the midpoint X value of the
  viewport.
- `xMax` - Align the `min-x + width` of the element's viewBox with the viewport's maximum X value.

- `YMin` - Align the `min-y` of the element's viewBox with the smallest Y value of the viewport.
- `YMid` - Align the midpoint Y value of the element's viewBox with the midpoint Y value of the
  viewport.
- `YMax` - Align the `min-y + height` of the element's viewBox with the viewport's maximum Y value.

The second value indicates how the aspect ratio is to be preserved:

- `meet` (by default) - the entire viewBox is visible within the viewport; thus, the area in which
  the `viewBox` will be drawn will be smaller than the viewport.

- `slice` - the viewBox covers the entire viewport; thus, the area in which the `viewBox` will be
  drawn will be larger than the viewport.

The combination of these parts define the `preserveAspectRatio` behavior in different situations
between the `width` and `height`:

<svg width="0" height="0">
  <defs>
    <g id="content">
      <line x1="0" y1="0" x2="100" y2="100" 
            stroke-width="1" stroke-dasharray="18.5,2" stroke="grey"/>
      <line x1="100" y1="0" x2="0" y2="100"
            stroke-width="1" stroke-dasharray="18.5,2" stroke="grey"/>
    </g>
  </defs>
</svg>

`viewBox="0 0 100 100" width="125" height="75"`

|                                                                   `xMinYMin meet`                                                                    |                                                                   `xMidYMin meet`                                                                    |                                                                    `xMaxYMin meet`                                                                    |
|:----------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
| <svg preserveAspectRatio="xMinYMin meet" viewBox="0,0,100,100" style="border: 1px dashed grey;" width="125" height="75"><use href="#content"/></svg> | <svg preserveAspectRatio="xMidYMin meet" viewBox="0,0,100,100" style="border: 1px dashed grey;" width="125" height="75"><use href="#content"/></svg> | <svg preserveAspectRatio="xMaxYMin meet" viewBox="0,0,100,100" style="border: 1px dashed grey;" width="125" height="75" ><use href="#content"/></svg> |

|                                                                   `xMinYMin slice`                                                                    |                                                                   `xMinYMid slice`                                                                    |                                                                   `xMimYMax slice`                                                                    |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
| <svg preserveAspectRatio="xMinYMin slice" viewBox="0,0,100,100" style="border: 1px dashed grey;" width="125" height="75"><use href="#content"/></svg> | <svg preserveAspectRatio="xMinYMid slice" viewBox="0,0,100,100" style="border: 1px dashed grey;" width="125" height="75"><use href="#content"/></svg> | <svg preserveAspectRatio="xMinYMax meet" viewBox="0,0,100,100" style="border: 1px dashed grey;" width="125" height="75" ><use href="#content"/></svg> |

`viewBox="0 0 100 100" width="75" height="125"`

|                                                                   `xMinYMin meet`                                                                    |                                                                   `xMinYMid meet`                                                                    |                                                                    `xMimYMax meet`                                                                    |
|:----------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|
| <svg preserveAspectRatio="xMinYMin meet" viewBox="0,0,100,100" style="border: 1px dashed grey;" width="75" height="125"><use href="#content"/></svg> | <svg preserveAspectRatio="xMinYMid meet" viewBox="0,0,100,100" style="border: 1px dashed grey;" width="75" height="125"><use href="#content"/></svg> | <svg preserveAspectRatio="xMimYMax meet" viewBox="0,0,100,100" style="border: 1px dashed grey;" width="75" height="125" ><use href="#content"/></svg> |

|                                                                   `xMinYMin slice`                                                                    |                                                                   `xMidYMin slice`                                                                    |                                                                    `xMaxYMin slice`                                                                    |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------------:|
| <svg preserveAspectRatio="xMinYMin slice" viewBox="0,0,100,100" style="border: 1px dashed grey;" width="75" height="125"><use href="#content"/></svg> | <svg preserveAspectRatio="xMidYMin slice" viewBox="0,0,100,100" style="border: 1px dashed grey;" width="75" height="125"><use href="#content"/></svg> | <svg preserveAspectRatio="xMaxYMin slice" viewBox="0,0,100,100" style="border: 1px dashed grey;" width="75" height="125" ><use href="#content"/></svg> |
