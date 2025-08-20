---
outline: deep
---

# Expressions in Directives

In Grapper, you can use different types of JavaScript expressions within directives to achieve
various functionalities. Here are the commonly used JavaScript expressions in directives:

## Simple Data Binding

With simple data binding, you can use some value of a `data` property in the SVG template. You 
can use the data object and property name (as `data.color`) or directly the property name: 
`color`.

With simple data binding, you can use the value of a data property in the SVG template. For example,
with `g-bind` or using the shorthand colon notation (`:`), you can bind the property value to SVG
elements.

<ClientOnly>
<g-editor mode="readonly">
<textarea><circle cx="50" 
        cy="50" 
        r="25"
        :fill="color"/></textarea>
</g-editor>
</ClientOnly>


## Conditional expression

You can use conditional expressions to conditionally render SVG elements based on certain
conditions. In Grapper, you can use the ternary operator condition `? ok : ko` or the boolean
operators `&&` and `||` to define conditional expressions. For example:

<ClientOnly>
<g-editor mode="readonly">
<textarea><circle cx="50" 
        cy="50" 
        r="25"
        :fill="data.regular ? 'green' : 'red'" /></textarea>
</g-editor>
</ClientOnly>

## Destructuring in `g-for`

In Grapper, you can use the `g-for` directive to loop over an array and generate SVG elements
dynamically. With JavaScript destructuring, you can extract specific values from the array elements
and use them within the SVG elements.

<ClientOnly>
<g-editor mode="readonly">
<textarea><g g-for="({ x, y }) of data.points">
  <circle r="5"
          :cx="x" 
          :cy="y"/>
</g></textarea>
</g-editor>
</ClientOnly>

## Calling Functions

You can use functions into the expressions. The function return must be used as value for 
directives.

<ClientOnly>
<g-editor mode="readonly">
<textarea><g g-for="point of points()">
  <circle :cx="point.x" 
          :cy="point.y" 
          r="5"/>
</g></textarea>
</g-editor>
</ClientOnly>

## Function reference

In `g-on` directive it is recommended to use a function reference. As a result, commonly, you only
use the function name, but also you can use other expressions.

<ClientOnly>
<g-editor mode="readonly">
<textarea><circle cx="10" 
        cy="10" 
        r="5"
        g-on:click="showMessage"/></textarea>
</g-editor>
</ClientOnly>

## Restricted access

In Grapper, the template expressions are *sandboxed* and have limited access. They can only access
the `data`, `config`, `methods` and some commonly used built-in global objects such as `Math`
and `Date` and other global functions. This restricted access ensures a secure and predictable
environment for evaluating expressions within the SVG document.
