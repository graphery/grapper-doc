---
outline: deep
---

# CSV Format

CSV (comma-separated values) files are a simple open format document type for representing data in
table form, in which columns are separated by commas (or semicolons where the comma is the decimal
separator as in Chile, Peru, Argentina, Spain, Brazil, among others) and rows by line breaks.

Grapper has support to CSV with:

- record by line
- header record with field names
- fields separated with coma (`,`) or semicolon (`;`)
- fields quotes and unquotes (`"` and `'`)

This example is separated by coma, with unquoted values:

```csv
x,y,radix,color
20,20,20,red
45,45,30,blue
80,80,10,green
```

This example is separated by semicolon, with quoted string:

```csv
"x";"y";"radix";"color"
20;20;20;"red"
45;45;30;"blue"
80;80;10;"green"
```

Internally, the CSV format is transformed into an array of objects. Each record is an object into the
array with each name column as the key and the value. 

```json
[
  {"x":20,"y":20,"radix":20,"color":"red"},
  {"x":45,"y":45,"radix":30,"color":"blue"},
  {"x":80,"y":80,"radix":10,"color":"green"}
]
```