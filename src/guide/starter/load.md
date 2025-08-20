---
outline: deep
---

# Load

To start, you must load Grapper on your HTML page.
This is done by adding a `script` tag pointing to the Grapper file.
The easiest and fastest is to use this URL from the CDN:

```html
<script src="https://cdn.graphery.online/grapper/1.0.0/composer.js"></script>
```

::: details Understanding the CDN path

This is the detailed description of each URL part:

```
https://cdn.graphery.online/grapper/1.0.0/composer.js
|-----|--------------------|--------|-----|-----------|
   |            |               |      |        |-----> filename
   |            |               |      |--------------> version
   |            |               |------------------------------------> package
   |            |----------------------------------------------------> domain
   |-----------------------------------------------------------------> protocol
```

:::


You can install locally the [Grapper package](https://www.npmjs.com/package/grapper) with:

```bash
npm i grapper
```

One of the advantages of Grapper is that it runs dynamically in the browser and does not need 
heavy compilation or transpilation processes at development time. 
Any change, adaptation or modification, we can do it directly without other transformations.
