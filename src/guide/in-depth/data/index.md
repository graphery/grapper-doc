---
outline: deep
---

# Data

The `<grapper-view></grapper-view>` component acts as a bridge between the data and the template engine,
facilitating the seamless integration of data updates with the visual output.

You can load the data with several methods:

- [Embebed](embebed.md) with `<script type="data"></script>`.
- [Load as resource](external.md) with the `src` attribute.
- [`data` attribute](attribute.md) with a simple key-value expression.
- [`.data` property](property.md) direct access.

The `.data` property provides a convenient interface for managing the data. You can add, remove, or
modify data points (at first level or in deep), triggering immediate updates to the visual
representation. 

[Reactivity](reactivity.md) allows the framework to automatically update the
corresponding elements when data changes, ensuring that the view accurately reflects the latest
information.
