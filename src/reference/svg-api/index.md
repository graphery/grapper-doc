# SVG Grapper Object

**Grapper** includes an API to simplify the construction and manipulation of SVG graphics
from Javascript. The API is very close to the SVG structure.

You can access the SVG with the Grapper API from the methods included in the component with:

- `$.svg`.

You can also access it from outside the component with:

- `<component>.svg`

In Grapper SVG wrapper, all are methods; thus, when you want to work with SVG attributes or
properties, you must use methods. For example, set an `id` to an SVG element
is `element.id('unique_id')` and for getting this identification it is necessary to
use `element.id()`.

Grapper dynamically constructs the methods, which can chain together to make successive calls. Each
call returns the original object and can include one call after another.
