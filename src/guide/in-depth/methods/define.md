---
outline: deep
---

# Define Functions

## Functions

The functions defined as `function <name>()` at the top level in the `methods` script will be
accessible from the template by the name. Functions to define into other functions, for example, as
inline callback, are not accessible from the template directives.

```js{4}
const circle = $.svg.querySelector('circle');
const text   = $.svg.querySelector('text');

function change() {
  if (text.content() === 'click') {
    circle.fill('green');
    text.content('ok').x(44);
  } else {
    circle.fill('red');
    text.content('click').x(36);
  }
}
```

In this example, `change()` is accesible from the template.

## Variables & Constants

If we define variables or constants in the body of functions, they will be - as usual - local to
each function. If we define variables or constants at the first level, outside the functions, they
will be accessible from all functions, but not from the template.

```js{1-2}
const circle = $.svg.querySelector('circle');
const text   = $.svg.querySelector('text');

function change() {
  if (text.content() === 'click') {
    circle.fill('green');
    text.content('ok').x(44);
  } else {
    circle.fill('red');
    text.content('click').x(36);
  }
}
```

In this example, `circle` y `text` are accesible from all functions, but not into the template
directives.

## Access to component elements

If you need to access to `g-componser` elements from the `methods` code, you must use the  `$`
object, it is a reference to the current component. As a result, you can access to:

- [`$.data`](./$-data) the component data.
- [`$.svg`](./$-svg) the generated SVG.
- [`$.config`](./$-config) the optional configuration.

## Sandbox

The method definition is sandboxed. This restricted access ensures a secure and predictable
environment for evaluating functions within the component. You can access to all global variables;
other libraries load as global, and browser APIs without limitations.

::: warning In some cases the syntax errors are not to describe with high accuracy into this
sandbox, and the error code line is not displayed. We are working to improve the error message.
:::