---
outline: deep
---

# Data helpers

When the data is an array, we may need helper functions to get the maximum, minimum, average, unique
values, etc. You can use Javascript functions to perform these operations, but Grapper offers a
series of helpers that allow us to obtain this information in a very efficient way.

To access these helper functions we will use `data.$min()`, `data.$max()`, etc., inside the
template. 

::: warning
These helper functions are only available from the template.
::: 

## `data.$min([key])`

Retrieve the minimum value of the array. If no parameter is provided, it defaults to treating the
array data as numeric. 

```svg
<tspan g-content="data.$min()"></tspan>
```

When a key is passed as a parameter, it evaluates the objects within the array using the specified
key.

```svg
<tspan g-content="data.$min('val')"></tspan>
```

## `data.$max([key])`

Obtain the maximum value of the array. If no parameter is given, it treats the array data as a
numeric value.

```svg
<tspan g-content="data.$max()"></tspan>
```

When a key is provided, it evaluates the objects within the array using the specified
key.

```svg
<tspan g-content="data.$max('val')"></tspan>
```

## `data.$count([key])`

Get the count of values in the array. If no parameter is specified, it treats the array data as a
numeric value.

```svg
<tspan g-content="data.$count()"></tspan>
```

When a key is passed, it evaluates the objects within the array using the specified key.

```svg
<tspan g-content="data.$count('val')"></tspan>
```

## `data.$sum([key])`

Calculate the sum value of the array. If no parameter is given, it treats the array data as a
numeric value.

```svg
<tspan g-content="data.$sum()"></tspan>
```

When a key is provided, it evaluates the objects within the array using the specified key.

```svg
<tspan g-content="data.$sum('val')"></tspan>
```

## `data.$avg([key])`

Compute the average value of the array. If no parameter is supplied, it treats the array data as a
numeric value.

```svg
<tspan g-content="data.$avg()"></tspan>
```

When a key is passed, it evaluates the objects within the array using the specified key.

```svg
<tspan g-content="data.$avg('val')"></tspan>
```

## `data.$distinct([key])`

Retrieve the unique values of the array. If no parameter is provided, it treats the array data as a
numeric value. 

```svg
<tspan g-content="data.$distinct()"></tspan>
```

When a key is passed, it evaluates the objects within the array using the specified key. In this
case, the result is an array of values, not objects.

```svg
<tspan g-content="data.$distinct('val')"></tspan>
```

## Deep objects

In all cases, the key can include dots for get values in deep objects, e.g., `key.subkey.otherkey`.

## Use Javascript function for data manipulation

Of course, you can still make use of the functions offered by JavaScript for handling and analyzing
arrays.

```svg
<tspan g-content="data.filter(x => x < 4).map(x => x * 2)"></tspan>
```

| Method               | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `data.push()`        | Adds one or more elements to the end of an array                            |
| `data.pop()`         | Removes the last element from an array                                      |
| `data.shift()`       | Removes the first element from an array                                     |
| `data.unshift()`     | Adds one or more elements to the beginning of an array                      |
| `data.concat()`      | Joins two or more arrays and returns a new array                            |
| `data.slice()`       | Returns a shallow copy of a portion of an array                             |
| `data.splice()`      | Adds, removes, or replaces elements in an array                             |
| `data.indexOf()`     | Returns the first index of a given element                                  |
| `data.lastIndexOf()` | Returns the last index of a given element                                   |
| `data.includes()`    | Checks if an array contains a certain element                               |
| `data.find()`        | Returns the first element that satisfies a condition                        |
| `data.findIndex()`   | Returns the index of the first element that satisfies a condition           |
| `data.filter()`      | Creates a new array with elements that satisfy a condition                  |
| `data.map()`         | Creates a new array with the results of calling a function on every element |
| `data.forEach()`     | Executes a function once for each array element                             |
| `data.reduce()`      | Reduces array to a single value using an accumulator function               |
| `data.reduceRight()` | Same as reduce(), but works from right to left                              |
| `data.sort()`        | Sorts the elements of an array                                              |
| `data.reverse()`     | Reverses the order of the elements in an array                              |
| `data.flat()`        | Flattens nested arrays into a single array                                  |
| `data.flatMap()`     | Maps and flattens the result into a new array                               |
| `data.join()`        | Joins all elements into a string                                            |
| `data.toString()`    | Converts an array to a string of comma-separated values                     |
| `data.every()`       | Checks if all elements satisfy a condition                                  |
| `data.some()`        | Checks if at least one element satisfies a condition                        |

**Note:** The `data` in the directives is not reactive, you don't change the original data. If you
want to update the data, you need to use `$.data` instead.


::: warning 
If you need to do a transformation, filter or other complex adaptation on the data
before template evaluation, we recommend that you use the [`function data()`](transform.md).
:::