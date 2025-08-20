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

Of course, you can still make use of the functions offered by Javascript for handling and analyzing
arrays.

```svg
<tspan g-content="data.filter(x => x < 4).map(x => x * 2)"></tspan>
```

::: warning 
If you need to do a transformation, filter or other complex adaptation on the data
before template evaluation, we recommend that you use the [`function data()`](transform.md).
:::