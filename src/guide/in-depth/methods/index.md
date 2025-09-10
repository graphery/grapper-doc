---
outline: deep
---

# Methods

When the declarative model based on the template is not enough, you can complement it with
imperative code based on Javascript functions. The Grapper component can include functions for
complex algorithm, data manipulation or event handling.

You can load the method with several methods:

- with `<script type="methods"></script>` with the [code embebed](embebed.md).
- with the `src` attribute for [load a resource](external.md) with the Javascript functions.

In Grapper, the methods defined are accesibles from the template directives, and also be called
from the property [`.methods`](property.md).

The method definition is sandboxed and has limited access to other functions or libraries. This
restricted access ensures a secure and predictable environment for evaluating functions within the
component. 