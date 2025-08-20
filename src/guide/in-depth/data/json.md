---
outline: deep
---

# JSON Formats

Grapper supports JSON and JSON5 formats, both of which are transformed into an object for use in
the template.

## JSON

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans
to read and write and easy for machines to parse and generate. It is a text format that is
completely language-independent but uses conventions that are familiar to programmers.

Here's a simple example of JSON:

```json 
{
  "name"      : "John Doe",
  "age"       : 30,
  "city"      : "New York",
  "isStudent" : false,
  "grades"    : [
    85,
    90,
    78
  ]
}
```

## JSON5

JSON5 is a simplification of JSON that adds some extra features. It aims to make JSON more readable
and convenient for Javascript developers. Some key features of JSON5 include:

- Comments: allows both single-line (`//`) and multi-line (`/* */`) comments.
- Trailing Commas: permits trailing commas in arrays and objects, which can be convenient when
  adding or removing elements.
- Unquoted Object Keys: allows unquoted keys in objects, which can be useful for simplicity.

```json5 
{
  name      : "John Doe",
  age       : 30,
  city      : "New York",
  isStudent : false,
  "grades"  : [
    85,
    90,
    78,
  ],
}
```
