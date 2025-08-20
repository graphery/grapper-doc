---
outline: deep
---

# Configuration

Data and configuration for build a visualization are different concerns. In several cases, we define
together data and colors, size, and other configuration properties. It is a good practice to
separate data and configuration in data visualization systems.

- **Reusability**: By separating data from configuration, you can reuse the same visualization with
  different datasets. This is particularly useful when you create a set of standard visualizations
  for your application which needs to be populated with different data.

- **Data Integrity**: Separating data and configuration ensures that you are not modifying original
  data when changing visual aspects like colors or size. This is crucial for maintaining data
  integrity.

- **Flexibility**: With a separate configuration, you can easily adjust the size, color, and other
  parameters without affecting the data. This makes it easy to adapt your visualizations for
  different use cases or output formats (like screen, print, etc.)

- **Maintainability**: If configurations are hard-coded with the data, any change in visual aspects
  would potentially require changing the data which is not a good practice. Separating them makes
  maintaining the code easier.

You can load the config with several methods:

- with `<script type="config"></script>` with the [embebed configuration](embebed.md).
- with the `methods-src`  for [load as external resource](external.md) a CSV, JSON or JSON5 file.

In Grapper, the configuration defined is accesibles from the template directives, and also be called
from the property [`.config`](property.md).
