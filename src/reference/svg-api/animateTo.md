# animateTo

The method `.animateTo()` which progressively modifies attributes from the original values to destination values within 
the set time. This method use internally CSS or SMIL, the best in each case.

***`element`*`.animateTo(keyframes [, options]  [, before] [, after])`**

- `{object|array} keyframes`:

  - `{object} properties_values`: is an object with the attributes or properties names as keys and target value as
    values.

  - `{array} keyframes_array`: is an array with object with the attributes or properties names as keys and target 
    value as values.

- `{number|object} options`:

  - `{number} duration`: is a number that defines, in milliseconds, the time of the animation. The default value is 200 
    (fast animation). It must be 0 for an immediate change.

  - `{object} options_object`: is an object with serval options, includes `duration`, `delay`, etc.

- `{function} before`: a callback function called before the animation is executed.

- `{function} after`: a callback function called after the animation has finished.

```js
const $.svg = SVG().viewBox('0 0 100 100');
svg.add ('circle').cx (10).cy (10).r (0).animateTo({r: 10});
svg.add ('circle').cx (30).cy (10).r (10).animateTo([{r: 10},{r: 0}], {duration: 1000});
```