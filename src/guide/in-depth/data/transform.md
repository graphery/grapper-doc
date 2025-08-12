---
outline: deep
---

# `function data()`

If you create a function with the name `data()` into the component `methods` it is automatically
called when data is loaded or modified. The function receives the initial data and returns the new
data values.

## Transform values

It is posible to transform values with `data()` function. These transforms can be basic, or a
deep transformations of values and data structure.

In this example, the `'yes'` and `'not'` texts are transformed to `true` and `false`.

::: code-group
````js [transform]
function data(source) {
  return source.map(record => {
    return {name: record.name, active: record.active === 'yes'};
  });
}
````
```json5 [source]
[
  {name: 'A', active: 'yes'},
  {name: 'B', active: 'not'},
  {name: 'C', active: 'yes'},
]
```
```json5 [target]
[
  {name: 'A', active: true},
  {name: 'B', active: false},
  {name: 'C', active: true}
]
```
:::

## Calculated values

With the `data()` function it is possible to calculate new values from the source records.

In this case, the percentage over the sum of the values is calculated in the `data()` function.


::: code-group
````js [transform]
function data(source) {
  const total = source.reduce((value, record) => record.value + value, 0); 
  return source.map(record => {
    return {...record, percentage: Math.round(record.value / total * 100) / 100};
  });
}
````
```json5 [source]
[
  {name: 'A', value: 19},
  {name: 'B', value: 32},
  {name: 'C', value: 24},
]
```
```json5 [target]
[
  {name: 'A', value: 19, percentage: 0.25},
  {name: 'B', value: 32, percentage: 0.43},
  {name: 'C', value: 24, percentage: 0.32}
]
```
:::


## Sorting

In several cases, sorting the data is important for a good data visualization. In these cases, the
function `data()` can transform the source array.

::: code-group
````js [transform]
function data(source) {
  return source.sort((recordA, recordB) => {
    return recordA.value - recordB.value;
  });
}
````
```json5 [source]
[
  {name: 'A', value: 19},
  {name: 'B', value: 32},
  {name: 'C', value: 24},
]
```
```json5 [target]
[
  {name: 'A', value: 19},
  {name: 'C', value: 24},
  {name: 'B', value: 32}
]
```
:::

The `function data()` receive a copy of data and keep the original array without changes. As a 
result, you can use method as `.sort()` than transform the original array.

## Filtering

If you need to filter the data by some criteria, you can use the `data()` function and select the
records from the original array.

::: code-group
````js [transform]
function data(source) {
  return source.filter(record => {
    return record.value < 25;
  });
}
````
```json5 [source]
[
  {name: 'A', value: 19},
  {name: 'B', value: 32},
  {name: 'C', value: 24},
]
```
```json5 [target]
[
  {name: 'A', value: 19},
  {name: 'C', value: 24}
]
```
:::

## Access to the target data outside the component

If you need to access to the transformed data outside the template, you can call the 
function `data()` and get the result.

```js
const component = document.querySelector('#example');
console.log(component.methods.data(component.data));
```
