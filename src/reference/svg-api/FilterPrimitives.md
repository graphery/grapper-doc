# Filter Primitives

## feBlend

The `feBlend` SVG filter primitive composes two objects together ruled by a certain blending mode. This is similar to what is known from image editing software when blending two layers. The mode is defined by the `mode` attribute.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feBlend) | [w3c](https://drafts.fxtf.org/filter-effects/#feBlendElement)

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

### .in2()


```js
fe.in2( filterPrimitive )
```
Set the `in2` attribute identifies the second input for the given filter primitive. It works exactly like the `.in()` method.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in2();
```
Get the `in2` current value.

- **returns**: `{string}` Current filter primitive input

### .mode()


```js
feBlend.mode( mode )
```
Set the `mode` attribute defines the blending `mode` on the `feBlend` filter primitive.

- **argument**: `{string} mode` A blend mode

- **returns**: `{gSVGObject}` The original object


```js
const mode = element.mode();
```
Get the `mode` current value.

- **returns**: `{string}` Current blend mode

## feColorMatrix

The `feColorMatrix` SVG filter element changes colors based on a transformation matrix. Every pixel's color value  `[R,G,B,A]` is matrix multiplied by a 5 by 5 color matrix to create new color `[R',G',B',A']`.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feColorMatrix) | [w3c](https://drafts.fxtf.org/filter-effects/#feColorMatrixElement)

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

### .type()


```js
feColorMatrix.type( type )
```
Set the `type` attribute is a generic attribute, and it has different meaning based on the context in which it's used.

- **argument**: `{Array|string} type` A full 5x4 matrix of values or a shortcuts

- **returns**: `{gSVGObject}` The original object


```js
const type = element.type();
```
Get the `type` current value.

- **returns**: `{Array|string}` 

### .values()


```js
feColorMatrix.values( values )
```
Set the `values` attribute has different meanings, depending upon the context where it is used, either it defines an Array of `values` used over the course of an animation, or it is an Array of numbers for a color matrix, which is interpreted differently depending on the type of color change to be performed.

- **argument**: `{Array<number>|number} values` The value is an Array of numbers or a number, which is interpreted differently depending on the value of the `type` attribute: For `.type("matrix"), `values` is an Array of 20 values. For `.type("saturate")`, `values` is a single number value (0 to 1). For `type("hueRotate")`, `values` is a number value (degrees). For `type("luminanceToAlpha"), `values` is not applicable.

- **returns**: `{gSVGObject}` The original object


```js
const values = element.values();
```
Get the `values` current value.

- **returns**: `{String}` Current values separated by coma

## feComponentTransfer

The `feComponentTransfer` SVG filter primitive performs color-component-wise remapping of data for each pixel. It allows operations like brightness adjustment, contrast adjustment, color balance or thresholding.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feComponentTransfer) | [w3c](https://drafts.fxtf.org/filter-effects/#feComponentTransferElement)

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

## feComposite

The `feComposite` SVG filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor, and lighter. Additionally, a component-wise arithmetic operation (with the result clamped between [0..1]) can be applied.

The arithmetic operation is useful for combining the output from the `feDiffuseLighting` and `feSpecularLighting` filters with texture data. If the arithmetic operation is chosen, each result pixel is computed using the following formula:

where:

This element implements the SVGFECompositeElement interface.

This image shows just the desired effect.



*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feComposite) | [w3c](https://drafts.fxtf.org/filter-effects/#feCompositeElement)

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

### .in2()


```js
fe.in2( filterPrimitive )
```
Set the `in2` attribute identifies the second input for the given filter primitive. It works exactly like the `.in()` method.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in2();
```
Get the `in2` current value.

- **returns**: `{string}` Current filter primitive input

### .operator()


```js
feComposite.operator( operator )
```
Set the `operator` attribute that defines the compositing  operation to be performed.

- **argument**: `{string} operator` Must be `over` | `in` | `out` | `atop` | `xor` | `lighter` | `arithmetic` 

- **returns**: `{gSVGObject}` The original object


```js
const operator = element.operator();
```
Get the `operator` current value.

- **returns**: `{string}` 

### .k1()


```js
feComposite.k1( k1 )
```
Set the `k1` attribute defines one of the values to be used within the arithmetic operation of the `feComposite` filter primitive.

- **argument**: `{number} k1` Value used for calculating the composition 

- **returns**: `{gSVGObject}` The original object


```js
const k1 = element.k1();
```
Get the `k1` current value.

- **returns**: `{number}` 

### .k2()


```js
feComposite.k2( k3 )
```
Set the `k2` attribute defines one of the values to be used within the arithmetic operation of the `feComposite` filter primitive.

- **argument**: `{number} k2` Value used for calculating the composition 

- **returns**: `{gSVGObject}` The original object


```js
const k2 = element.k2();
```
Get the `k2` current value.

- **returns**: `{number}` 

### .k3()


```js
feComposite.k3( k4 )
```
Set the `k3` attribute defines one of the values to be used within the arithmetic operation of the `feComposite` filter primitive.

- **argument**: `{number} k3` Value used for calculating the composition 

- **returns**: `{gSVGObject}` The original object


```js
const k3 = element.k3();
```
Get the `k3` current value.

- **returns**: `{number}` 

### .k4()


```js
feComposite.k4( k4 )
```
Set the `k4` attribute defines one of the values to be used within the arithmetic operation of the `feComposite` filter primitive.

- **argument**: `{number} k4` Value used for calculating the composition 

- **returns**: `{gSVGObject}` The original object


```js
const k4 = element.k4();
```
Get the `k4` current value.

- **returns**: `{number}` 

## feConvolveMatrix

The `feConvolveMatrix` SVG filter primitive applies a matrix convolution filter effect. A convolution combines pixels in the input image with neighboring pixels to produce a resulting image. A wide variety of imaging operations can be achieved through convolutions, including blurring, edge detection, sharpening, embossing and beveling.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feConvolveMatrix) | [w3c](https://drafts.fxtf.org/filter-effects/#feConvolveMatrixElement)

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

### .order()


```js
feConvolveMatrix.order( order )
```
Set the `order` attribute indicates the size of the matrix to be used by a `feConvolveMatrix` element.

- **argument**: `{number} order` The order value 

- **returns**: `{gSVGObject}` The original object


```js
const order = element.order();
```
Get the `order` current value.

- **returns**: `{number}` 

### .kernelMatrix()


```js
feConvolveMatrix.kernelMatrix( list )
```
Set the `kernelMatrix` attribute defines the list of numbers that make up the kernel matrix for the `feConvolveMatrix` element.

- **argument**: `{Array|string} list` The list of values 

- **returns**: `{gSVGObject}` The original object


```js
const kernelMatrix = element.kernelMatrix();
```
Get the `kernelMatrix` current value.

- **returns**: `{Array|string}` 

### .divisor()


```js
feConvolveMatrix.divisor( divisor )
```
Set the `divisor` attribute specifies the value by which the resulting number of applying the `kernelMatrix` of a `feConvolveMatrix` element to the input image color value is divided to yield the destination color value. A `divisor` that is the sum of all the matrix values tends to have an evening effect on the overall color intensity of the result.

- **argument**: `{number} divisor` The divisor to apply to the `kernelMatrix`

- **returns**: `{gSVGObject}` The original object


```js
const divisor = element.divisor();
```
Get the `divisor` current value.

- **returns**: `{number}` 

### .bias()


```js
feConvolveMatrix.bias( bias )
```
Set the `bias` attribute shifts the range of the filter. After applying the `kernelMatrix` of the `feConvolveMatrix` element to the input image to yield a number and applied the divisor attribute, the `bias` attribute is added to each component. This allows representation of values that would otherwise be clamped to 0 or 1.

- **argument**: `{number} bias` The bias value to add 

- **returns**: `{gSVGObject}` The original object


```js
const bias = element.bias();
```
Get the `bias` current value.

- **returns**: `{number}` 

### .targetX()


```js
feConvolveMatrix.targetX( x )
```
Set the `targetX` attribute determines the positioning in horizontal direction of the convolution matrix relative to a given target pixel in the input image. The leftmost column of the matrix is column number zero. The value must be such that: `0 <= `targetX` < orderX`.

- **argument**: `{number} x` This value indicates the positioning in horizontal direction of the convolution matrix relative to a given target pixel in the input image

- **returns**: `{gSVGObject}` The original object


```js
const targetX = element.targetX();
```
Get the `targetX` current value.

- **returns**: `{number}` 

### .targetY()


```js
feConvolveMatrix.targetY( Y )
```
Set the `targetY` attribute determines the positioning in vertical direction of the convolution matrix relative to a given target pixel in the input image. The topmost row of the matrix is row number zero. The value must be such that: `0 <= `targetY` < orderY`.

- **argument**: `{number} Y` This value indicates the positioning in vertical direction of the convolution matrix relative to a given target pixel in the input image.

- **returns**: `{gSVGObject}` The original object


```js
const targetY = element.targetY();
```
Get the `targetY` current value.

- **returns**: `{number}` 

### .edgeMode()


```js
feConvolveMatrix.edgeMode( mode )
```
Set the `edgeMode` attribute determines how to extend the input image as necessary with color values so that the matrix operations can be applied when the kernel is positioned at or near the edge of the input image.

- **argument**: `{string} mode` Must be `duplicate` | `wrap` | `none`

- **returns**: `{gSVGObject}` The original object


```js
const edgeMode = element.edgeMode();
```
Get the `edgeMode` current value.

- **returns**: `{string}` 

### .preserveAlpha()


```js
feConvolveMatrix.preserveAlpha( alpha )
```
Set the `preserveAlpha` attribute indicates how a `feConvolveMatrix` element handled alpha transparency.

- **argument**: `{boolean} alpha` `true` indicates that the convolution will only apply to the color channels, `false` indicates that the convolution will apply to all channels

- **returns**: `{gSVGObject}` The original object


```js
const preserveAlpha = element.preserveAlpha();
```
Get the `preserveAlpha` current value.

- **returns**: `{boolean}` 

## feDiffuseLighting

The `feDiffuseLighting` SVG filter primitive lights an image using the alpha channel as a bump map. The resulting image, which is an RGBA opaque image, depends on the light color, light position and surface geometry of the input bump map.

The light map produced by this filter primitive can be combined with a texture image using the multiply term of the arithmetic operator of the `feComposite` filter primitive. Multiple light sources can be simulated by adding several of these light maps together before applying it to the texture image.

This element implements the SVGFEDiffuseLightingElement interface.

The following example show the effect of the `feDiffuseLighting` element on a circle with each light source available. Each time, the light comes from the upper left corner.

Expected rendering:



Live rendering:



*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feDiffuseLighting) | [w3c](https://drafts.fxtf.org/filter-effects/#feDiffuseLightingElement)

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

### .surfaceScale()


```js
feDiffuseLighting.surfaceScale( surface )
```
Set the `surfaceScale` attribute represents the height of the surface for a light filter primitive.

- **argument**: `{number} surface` This value defines the height of the surface 

- **returns**: `{gSVGObject}` The original object


```js
const surfaceScale = element.surfaceScale();
```
Get the `surfaceScale` current value.

- **returns**: `{number}` 

### .diffuseConstant()


```js
feDiffuseLighting.diffuseConstant( constant )
```
Set the `diffuseConstant` attribute represents the k<sub>d</sub> value in the Phong lighting model. In SVG, this can be any non-negative number.

- **argument**: `{number} constant` 

- **returns**: `{gSVGObject}` The original object


```js
const diffuseConstant = element.diffuseConstant();
```
Get the `diffuseConstant` current value.

- **returns**: `{number}` 

## feDisplacementMap

The `feDisplacementMap` SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.

The formula for the transformation looks like this:

P'(x,y) ← P( x + scale * (XC(x,y) - 0.5), y + scale * (YC(x,y) - 0.5))

where P(x,y) is the input image, in, and P'(x,y) is the destination. XC(x,y) and YC(x,y) are the component values of the channel designated by xChannelSelector and yChannelSelector.

This element implements the SVGFEDisplacementMapElement interface.



*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feDisplacementMap) | [w3c](https://drafts.fxtf.org/filter-effects/#feDisplacementMapElement)

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

### .in2()


```js
fe.in2( filterPrimitive )
```
Set the `in2` attribute identifies the second input for the given filter primitive. It works exactly like the `.in()` method.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in2();
```
Get the `in2` current value.

- **returns**: `{string}` Current filter primitive input

### .scale()


```js
feDisplacementMap.scale( scale )
```
Set the `scale` attribute defines the displacement scale factor to be used on a `feDisplacementMap` filter primitive. The amount is expressed in the coordinate system established by the primitiveUnits attribute on the `filter` element.

- **argument**: `{number} scale`  The scale factor for the displacement.

- **returns**: `{gSVGObject}` The original object


```js
const scale = element.scale();
```
Get the `scale` current value.

- **returns**: `{number}` 

### .xChannelSelector()


```js
feDisplacementMap.xChannelSelector( selector )
```
Set the `xChannelSelector` attribute indicates which color channel from `in2` to use to displace the pixels in `in` along the x-axis.

- **argument**: `{string} selector` Must be `R` | `G` | `B` | `A` 

- **returns**: `{gSVGObject}` The original object


```js
const xChannelSelector = element.xChannelSelector();
```
Get the `xChannelSelector` current value.

- **returns**: `{string}` 

### .yChannelSelector()


```js
feDisplacementMap.yChannelSelector( selector )
```
Set the `yChannelSelector` attribute indicates which color channel from `in2` to use to displace the pixels in `in` along the y-axis.

- **argument**: `{string} selector` Must be `R` | `G` | `B` | `A`

- **returns**: `{gSVGObject}` The original object


```js
const yChannelSelector = element.yChannelSelector();
```
Get the `yChannelSelector` current value.

- **returns**: `{string}` 

## feDistantLight

The `feDistantLight` filter primitive defines a distant light source that can be used within a lighting filter primitive: `feDiffuseLighting` or `feSpecularLighting`.

This element implements the SVGFEDistantLightElement interface.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feDistantLight) | [w3c](https://drafts.fxtf.org/filter-effects/#feDistantLightElement)

### .azimuth()


```js
feDistantLight.azimuth( azimuth )
```
Set the `azimuth` attribute specifies the direction angle for the light source on the XY plane (clockwise), in degrees from the `x` axis.

- **argument**: `{number} azimuth` The direction angle for the light source 

- **returns**: `{gSVGObject}` The original object


```js
const azimuth = element.azimuth();
```
Get the `azimuth` current value.

- **returns**: `{number}` 

### .elevation()


```js
feDistantLight.elevation( elevation )
```
Set the `elevation` attribute specifies the direction angle for the light source from the XY plane towards the Z-axis, in degrees. Note that the positive Z-axis points towards the viewer of the content.

- **argument**: `{number} elevation` The direction angle for the light source 

- **returns**: `{gSVGObject}` The original object


```js
const elevation = element.elevation();
```
Get the `elevation` current value.

- **returns**: `{number}` 

## feDropShadow

The SVG `feDropShadow` filter primitive creates a drop shadow of the input image. It can only be used inside a `filter` element.

The drop shadow color and opacity can be changed by using the flood-color and flood-opacity presentation attributes.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feDropShadow) | [w3c](https://drafts.fxtf.org/filter-effects/#feDropShadowElement)

### .dx()


```js
feDropShadow.dx( x )
```
Set this attribute defines the x offset of the drop shadow.

- **argument**: `{number} x` The direction angle for the light source 

- **returns**: `{gSVGObject}` The original object


```js
const dx = element.dx();
```
Get the `dx` current value.

- **returns**: `{number}` 

### .dy()


```js
feDropShadow.dy( y )
```
Set this attribute defines the y offset of the drop shadow.

- **argument**: `{number} y` The direction angle for the light source 

- **returns**: `{gSVGObject}` The original object


```js
const dy = element.dy();
```
Get the `dy` current value.

- **returns**: `{number}` 

### .stdDeviation()


```js
feDropShadow.stdDeviation( deviation )
```
Set this attribute defines the standard deviation for the blur operation in the drop shadow.

- **argument**: `{number} deviation` The standard deviation for the blur

- **returns**: `{gSVGObject}` The original object


```js
const stdDeviation = element.stdDeviation();
```
Get the `stdDeviation` current value.

- **returns**: `{number}` 

## feFlood

The `feFlood` SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.

This element implements the SVGFEFloodElement interface.



 

 

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feFlood) | [w3c](https://drafts.fxtf.org/filter-effects/#feFloodElement)

### .flood-color()


```js
feFlood.flood_color( color )
```
Set the `flood-color` attribute indicates what color to use to flood the current filter primitive subregion.

- **argument**: `{string} color` The color value 

- **returns**: `{gSVGObject}` The original object


```js
const flood_color = element.flood_color();
```
Get the `flood-color` current value.

- **returns**: `{string}` 

### .flood-opacity()


```js
feFlood.flood_opacity( alpha )
```
Set the `flood-opacity` attribute indicates the opacity value to use across the current filter primitive subregion.

- **argument**: `{number|string} alpha` The value must be a number of `0` or a percentage 

- **returns**: `{gSVGObject}` The original object


```js
const flood_opacity = element.flood_opacity();
```
Get the `flood-opacity` current value.

- **returns**: `{number|string}}` 

## feFuncA

The `feFuncA` SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent `feComponentTransfer` element.

None

This element implements the SVGFEFuncAElement interface.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feFuncA) | [w3c](https://drafts.fxtf.org/filter-effects/#feFuncAElement)

## feFuncB

The `feFuncB` SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent `feComponentTransfer` element.

None

This element implements the SVGFEFuncBElement interface.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feFuncB) | [w3c](https://drafts.fxtf.org/filter-effects/#feFuncBElement)

## feFuncG

The `feFuncG` SVG filter primitive defines the transfer function for the green component of the input graphic of its parent `feComponentTransfer` element.

None

This element implements the SVGFEFuncGElement interface.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feFuncG) | [w3c](https://drafts.fxtf.org/filter-effects/#feFuncGElement)

## feFuncR

The `feFuncR` SVG filter primitive defines the transfer function for the red component of the input graphic of its parent `feComponentTransfer` element.

None

This element implements the SVGFEFuncRElement interface.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feFuncR) | [w3c](https://drafts.fxtf.org/filter-effects/#feFuncRElement)

## feGaussianBlur

The `feGaussianBlur` SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.

This element implements the SVGFEGaussianBlurElement interface.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feGaussianBlur) | [w3c](https://drafts.fxtf.org/filter-effects/#feGaussianBlurElement)

### .class()


```js
feGaussianBlur.class( name )
```
Set assigns a `class` name or set of `class` names to an element. You may assign the same `class` name or names to any number of elements, however, multiple `class` names must be separated by whitespace characters.

- **argument**: `{string} name` The class name 

- **returns**: `{gSVGObject}` The original object


```js
const klass = element.class();
```
Get the `class` current value.

- **returns**: `{string}` 

### .style()

```js
const style = element.style();
```
Get the `style` current value.

- **returns**: `{string}` 

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

### .stdDeviation()


```js
feGaussianBlur.stdDeviation( deviation )
```
Set the `stdDeviation` attribute defines the standard deviation for the blur operation.

- **argument**: `{number} deviation` The standard deviation for the blur

- **returns**: `{gSVGObject}` The original object


```js
const stdDeviation = element.stdDeviation();
```
Get the `stdDeviation` current value.

- **returns**: `{number}` 

### .edgeMode()


```js
feGaussianBlur.edgeMode( mode )
```
Set the `edgeMode` attribute determines how to extend the input image as necessary with color values so that the matrix operations can be applied when the kernel is positioned at or near the edge of the input image.

- **argument**: `{string} mode` Must be `duplicate` | `wrap` | `none` 

- **returns**: `{gSVGObject}` The original object


```js
const edgeMode = element.edgeMode();
```
Get the `edgeMode` current value.

- **returns**: `{string}` 

## feImage

The `feImage` SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)

This element implements the SVGFEImageElement interface.



*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feImage) | [w3c](https://drafts.fxtf.org/filter-effects/#feImageElement)

### .preserveAspectRatio()


```js
feImage.preserveAspectRatio( ratio )
```
Set the `preserveAspectRatio` attribute indicates how an element with a viewBox providing a given aspect ratio must fit into a viewport with a different aspect ratio.

- **argument**: `{string} ratio` Must be `none` or a combination of these values: `xMin`, `xMax`, `YMin` and `YMax`

- **returns**: `{gSVGObject}` The original object


```js
const preserveAspectRatio = element.preserveAspectRatio();
```
Get the `preserveAspectRatio` current value.

- **returns**: `{string}` 

## feMerge

The `feMerge` SVG element allows filter effects to be applied concurrently instead of sequentially. This is achieved by other filters storing their output via the result attribute and then accessing it in a `feMergeNode` child.



None

This element implements the SVGFEMergeElement interface.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feMerge) | [w3c](https://drafts.fxtf.org/filter-effects/#feMergeElement)

## feMergeNode

The feMergeNode takes the result of another filter to be processed by its parent `feMerge`.



This element implements the SVGFEMergeNodeElement interface.

*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feMergeNode) | [w3c](https://drafts.fxtf.org/filter-effects/#feMergeElement)

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

## feMorphology

The `feMorphology` SVG filter primitive is used to erode or dilate the input image. Its usefulness lies especially in fattening or thinning effects.

This element implements the SVGFEMorphologyElement interface.





*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feMorphology) | [w3c](https://drafts.fxtf.org/filter-effects/#feMorphologyElement)

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

### .operator()


```js
feMorphology.operator( operator )
```
Set the `operator` attribute as two meanings based on the context it is used in. Either it defines the compositing or morphing operation to be performed.

- **argument**: `{string} operator` Must be `erode` | `dilate`

- **returns**: `{gSVGObject}` The original object


```js
const operator = element.operator();
```
Get the `operator` current value.

- **returns**: `{string}` 

### .radius()


```js
feMorphology.radius( radius )
```
Set the `radius` attribute represents the `radius` (or radii) for the operation on a given `feMorphology` filter primitive.

- **argument**: `{number} radius` The radius value 

- **returns**: `{gSVGObject}` The original object


```js
const radius = element.radius();
```
Get the `radius` current value.

- **returns**: `{number}` 

## feOffset

The `feOffset` SVG filter primitive allows to offset the input image. The input image as a whole is offset by the values specified in the dx and dy attributes.

This element implements the SVGFEOffsetElement interface.



*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feOffset) | [w3c](https://drafts.fxtf.org/filter-effects/#feOffsetElement)

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

### .dx()


```js
feOffset.dx( x )
```
Set the `dx` attribute indicates a shift along the x-axis on the position of an element or its content.

- **argument**: `{number} x` The x value 

- **returns**: `{gSVGObject}` The original object


```js
const dx = element.dx();
```
Get the `dx` current value.

- **returns**: `{number}` 

### .dy()


```js
feOffset.dy( y )
```
Set the `dy` attribute indicates a shift along the y-axis on the position of an element or its content.

- **argument**: `{number} y` The y value 

- **returns**: `{gSVGObject}` The original object


```js
const dy = element.dy();
```
Get the `dy` current value.

- **returns**: `{number}` 

## fePointLight

The `fePointLight` filter primitive defines a light source which allows to create a point light effect. It that can be used within a lighting filter primitive: `feDiffuseLighting` or `feSpecularLighting`.

This element implements the SVGFEPointLightElement interface.



*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/fePointLight) | [w3c](https://drafts.fxtf.org/filter-effects/#fePointLightElement)

### .x()


```js
fePointLight.x( x )
```
Set the `x` attribute defines a `x-axis` coordinate in the user coordinate system.

- **argument**: `{number} x` The x value 

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number}` 

### .y()


```js
fePointLight.y( y )
```
Set the `y` attribute defines a `y`-axis coordinate in the user coordinate s`y`stem.

- **argument**: `{number} y` The y value 

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number}` 

### .z()


```js
fePointLight.z( z )
```
Set the `z` attribute defines the location along the `z`-axis for a light source in the coordinate system established by the primitiveUnits attribute on the `filter` element, assuming that, in the initial coordinate system, the positive `z`-axis comes out towards the person viewing the content and assuming that one unit along the `z`-axis equals one unit in x and y.

- **argument**: `{number} z` The z value 

- **returns**: `{gSVGObject}` The original object


```js
const z = element.z();
```
Get the `z` current value.

- **returns**: `{number}` 

## feSpecularLighting

The `feSpecularLighting` SVG filter primitive lights a source graphic using the alpha channel as a bump map. The resulting image is an RGBA image based on the light color. The lighting calculation follows the standard specular component of the Phong lighting model. The resulting image depends on the light color, light position and surface geometry of the input bump map. The result of the lighting calculation is added. The filter primitive assumes that the viewer is at infinity in the z direction.

This filter primitive produces an image which contains the specular reflection part of the lighting calculation. Such a map is intended to be combined with a texture using the add term of the arithmetic `feComposite` method. Multiple light sources can be simulated by adding several of these light maps before applying it to the texture image.

This element implements the SVGFESpecularLightingElement interface.



*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feSpecularLighting) | [w3c](https://drafts.fxtf.org/filter-effects/#feSpecularLightingElement)

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

### .surfaceScale()


```js
feSpecularLighting.surfaceScale( surface )
```
Set the `surfaceScale` attribute represents the height of the surface for a light filter primitive.

- **argument**: `{number} surface`  This value defines the height of the surface

- **returns**: `{gSVGObject}` The original object


```js
const surfaceScale = element.surfaceScale();
```
Get the `surfaceScale` current value.

- **returns**: `{number}` 

### .specularConstant()


```js
feSpecularLighting.specularConstant( reflection )
```
Set the `specularConstant` attribute controls the ratio of reflection of the specular lighting. It represents the ks value in the Phong lighting model. The bigger the value the stronger the reflection.

- **argument**: `{number} reflection` The ratio of reflection

- **returns**: `{gSVGObject}` The original object


```js
const specularConstant = element.specularConstant();
```
Get the `specularConstant` current value.

- **returns**: `{number}` 

### .specularExponent()


```js
feSpecularLighting.specularExponent( exponent  )
```
Set the `specularExponent` attribute controls the focus for the light source. The bigger the value the brighter the light.

- **argument**: `{number} exponent` The value for the specular term

- **returns**: `{gSVGObject}` The original object


```js
const specularExponent = element.specularExponent();
```
Get the `specularExponent` current value.

- **returns**: `{number}` 

## feSpotLight

The `feSpotLight` SVG filter primitive defines a light source which allows to create a spotlight effect. It that can be used within a lighting filter primitive: `feDiffuseLighting` or `feSpecularLighting`.

 

This element implements the SVGFESpotLightElement interface.



*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feSpotLight) | [w3c](https://drafts.fxtf.org/filter-effects/#feSpotLightElement)

### .x()


```js
feSpotLight.x( x )
```
Set the `x` attribute defines a `x`-a`x`is coordinate in the user coordinate system.

- **argument**: `{number} x` The x location for the light source

- **returns**: `{gSVGObject}` The original object


```js
const x = element.x();
```
Get the `x` current value.

- **returns**: `{number}` 

### .y()


```js
feSpotLight.y( y )
```
Set the `y` attribute defines a `y`-axis coordinate in the user coordinate s`y`stem.

- **argument**: `{number} y` The y location for the light source 

- **returns**: `{gSVGObject}` The original object


```js
const y = element.y();
```
Get the `y` current value.

- **returns**: `{number}` 

### .z()


```js
feSpotLight.z( z )
```
Set the `z` attribute defines the location along the `z`-axis for a light source in the coordinate system established by the primitiveUnits attribute on the `filter` element, assuming that, in the initial coordinate system, the positive `z`-axis comes out towards the person viewing the content and assuming that one unit along the `z`-axis equals one unit in x and y.

- **argument**: `{number} z` The z location for the light source 

- **returns**: `{gSVGObject}` The original object


```js
const z = element.z();
```
Get the `z` current value.

- **returns**: `{number}` 

### .pointsAtX()


```js
feSpotLight.pointsAtX( x )
```
Set the `pointsAtX` attribute represents the `x` location in the coordinate system established by attribute primitiveUnits on the `filter` element of the point at which the light source is pointing.

- **argument**: `{number} x` The x value 

- **returns**: `{gSVGObject}` The original object


```js
const pointsAtX = element.pointsAtX();
```
Get the `pointsAtX` current value.

- **returns**: `{number}` 

### .pointsAtY()


```js
feSpotLight.pointsAtY( y )
```
Set the `pointsAtY` attribute represents the y location in the coordinate system established by attribute primitiveUnits on the `filter` element of the point at which the light source is pointing.

- **argument**: `{number} y` The y value 

- **returns**: `{gSVGObject}` The original object


```js
const pointsAtY = element.pointsAtY();
```
Get the `pointsAtY` current value.

- **returns**: `{number}` 

### .pointsAtZ()


```js
feSpotLight.pointsAtZ( z )
```
Set the `pointsAtZ` attribute represents the y location in the coordinate system established by attribute primitiveUnits on the `filter` element of the point at which the light source is pointing, assuming that, in the initial local coordinate system, the positive z-axis comes out towards the person viewing the content and assuming that one unit along the z-axis equals one unit in x and y.

- **argument**: `{number} z` The z value 

- **returns**: `{gSVGObject}` The original object


```js
const pointsAtZ = element.pointsAtZ();
```
Get the `pointsAtZ` current value.

- **returns**: `{number}` 

### .specularExponent()


```js
feSpotLight.specularExponent( exponent )
```
Set the `specularExponent` attribute controls the focus for the light source. The bigger the value the brighter the light.

- **argument**: `{number} exponent` The exponent value 

- **returns**: `{gSVGObject}` The original object


```js
const specularExponent = element.specularExponent();
```
Get the `specularExponent` current value.

- **returns**: `{number}` 

### .limitingConeAngle()


```js
feSpotLight.limitingConeAngle( angle )
```
Set the `limitingConeAngle` attribute represents the angle in degrees between the spotlight axis (i.e. the axis between the light source and the point to which it is pointing at) and the spotlight cone. So it defines a limiting cone which restricts the region where the light is projected. No light is projected outside the cone.

- **argument**: `{number} angle` The angle value 

- **returns**: `{gSVGObject}` The original object


```js
const limitingConeAngle = element.limitingConeAngle();
```
Get the `limitingConeAngle` current value.

- **returns**: `{number}` 

## feTile

The `feTile` SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image. The effect is similar to the one of a `pattern`.

This element implements the SVGFETileElement interface.



*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feTile) | [w3c](https://drafts.fxtf.org/filter-effects/#feTileElement)

### .in()


```js
fe.in( filterPrimitive )
```
Set the `in` attribute. This attribute identifies input for the given filter primitive.

- **argument**: `{string} filterPrimitive` must be 'SourceGraphic' | 'SourceAlpha' | 'BackgroundImage' | 'BackgroundAlpha' | 'FillPaint' | 'StrokePaint' | filter_primitive_reference

- **returns**: `{gSVGObject}` The original object


```js
const inFe = fe.in();
```
Get the `in` current value.

- **returns**: `{string}` Current filter primitive input

## feTurbulence

The `feTurbulence` SVG filter primitive creates an image using the Perlin turbulence function. It allows the synthesis of artificial textures like clouds or marble. The resulting image will fill the entire filter primitive subregion.

This element implements the SVGFETurbulenceElement interface.



*More info*:
      [mdn](https://developer.mozilla.org//en-US/docs/Web/SVG/Element/feTurbulence) | [w3c](https://drafts.fxtf.org/filter-effects/#feTurbulenceElement)

### .baseFrequency()


```js
feTurbulence.baseFrequency( frequency  )
```
Set the `baseFrequency` attribute represents the base frequency parameter for the noise function of the `feTurbulence` filter primitive.

- **argument**: `{number} frequency` The frequency value 

- **returns**: `{gSVGObject}` The original object


```js
const baseFrequency = element.baseFrequency();
```
Get the `baseFrequency` current value.

- **returns**: `{number}` 

### .numOctaves()


```js
feTurbulence.numOctaves( octaves )
```
Set the `numOctaves` attribute defines the number of octaves for the noise function of the `feTurbulence` primitive.

- **argument**: `{number} octaves` The octaves value 

- **returns**: `{gSVGObject}` The original object


```js
const numOctaves = element.numOctaves();
```
Get the `numOctaves` current value.

- **returns**: `{number}` 

### .seed()


```js
feTurbulence.seed( seed )
```
Set the `seed` attribute represents the starting number for the pseudo random number generator of the `feTurbulence` filter primitive.

- **argument**: `{number} seed` The seed value 

- **returns**: `{gSVGObject}` The original object


```js
const seed = element.seed();
```
Get the `seed` current value.

- **returns**: `{number}` 

### .stitchTiles()


```js
feTurbulence.stitchTiles( stitch )
```
Set the `stitchTiles` attribute defines how the Perlin Noise tiles behave at the border.

- **argument**: `{string} stitch` Must be `noStitch` | `stitch`

- **returns**: `{gSVGObject}` The original object


```js
const stitchTiles = element.stitchTiles();
```
Get the `stitchTiles` current value.

- **returns**: `{string}` 

### .type()


```js
feTurbulence.type( type )
```
Set the `type` attribute is a generic attribute, and it has different meaning based on the context in which it's used.

- **argument**: `{string} type` Must be `fractalNoise` | `turbulence`

- **returns**: `{gSVGObject}` The original object


```js
const type = element.type();
```
Get the `type` current value.

- **returns**: `{string}` 

