# Migration from Graphane to Grapper

The framework now known as **Grapper** was previously released under the name **Graphane**. The
renaming was motivated by two main factors:

1. **Conflict avoidance** – The term *Graphane* coincided with other products and research projects,
   which created confusion in search engines and package repositories.
2. **Search visibility** – By adopting a unique, more recognizable name, **Grapper** improves
   discoverability in documentation, GitHub, and NPM.

Although the name has changed, the underlying philosophy remains the same: a **lightweight,
declarative micro-framework for SVG-based data visualization**. Migrating from **Graphane 1.0.x** to
**Grapper 1.1.x** is straightforward, but there are a few important adjustments to be aware of.


## Version mapping

* **Graphane 1.0.x → Grapper 1.1.x**

Both versions share the same foundation. However, **Grapper** introduces:

* bug fixes and internal optimizations,
* measurable performance improvements in rendering,
* and a **cleaner, more consistent API** that simplifies development.

Existing Graphane projects can continue running without breaking changes, but new development is
strongly encouraged to adopt the **Grapper conventions**.


## Main changes


### Component rename

The central component has been renamed to `grapper-view`.

* In **Graphane**:

  ```html
  <g-composer> … </g-composer>
  ```
* In **Grapper**:

  ```html
  <grapper-view> … </grapper-view>
  ```

> **Note on backward compatibility**
> The old `<g-composer>` tag is still recognized, so existing projects will not break.
> However, it is officially **deprecated** and will eventually be removed in future releases.


### Helper access simplified

In **Graphane**, helper functions were split between two namespaces:

* some under `$.` (e.g., `$.svg`, `$.config`),
* others under `$$.` (e.g., path helpers, geometry utilities).

In **Grapper**, **all helpers are unified under `$.`** for consistency.

Example migration:

```html
<!-- Graphane -->
<path g-bind:d="$$.M(0,0).L(50,50).Z()"/>

<!-- Grapper -->
<path g-bind:d="$.M(0,0).L(50,50).Z()"/>
```

The old `$$.` namespace is still supported for compatibility, but it is **deprecated**.


### External resources

The way external files are loaded has been modernized.

* In **Graphane**:

  ```html
  <g-composer 
    data-src="data.json"
    svg-src="template.svg"
    config-src="config.json"
    method-src="methods.js">
  </g-composer>
  ```

* In **Grapper**:
  Each resource type uses its own dedicated tag with a `src` attribute:

  ```html
  <grapper-view>
    <template src="template.svg"></template>
    <script type="data" src="data.json"></script>
    <script type="config" src="config.json"></script>
    <script type="methods" src="methods.js"></script>
  </grapper-view>
  ```

By default, the `src` must refer to **same-origin** resources. To import files from another domain,
you must explicitly add the attribute `trust-origin` to the component:

```html

<grapper-view trust-origin>
  <script type="data" src="https://example.com/data.csv"></script>
</grapper-view>
```

This ensures security by preventing accidental cross-origin injections.


### Accessing the component from methods

* In **Graphane**, the component instance was exposed directly as `$`.
* In **Grapper**, the component is explicitly available under `$.grapperView`.

Example migration:

```js
// Graphane (old)
function init () {
  $.load();
}

// Grapper (new)
function init () {
  $.grapperView.load();
}
```

This change prevents confusion between the component instance (`$.grapperView`) and other elements
inside the component.



### Importing

* Graphane **1.0.x** distributions remain published on **NPM** and **CDN** under the old name.
* New projects should **start directly with Grapper 1.1.x**.
* Existing projects can upgrade progressively, using deprecated features while migrating.



## Migration strategy

In the playground, when it is detected that `g-composer` is being used, a warning message is
displayed: "g-composer is DEPRECATED." If you click on the button "Update to Grapper", the
component is automatically updated.

If you prefer to migrate manually, follow these steps:

1. **Update component tags**
   Replace `<g-composer>` with `<grapper-view>`. Although deprecated tags still work, this prevents
   warnings and ensures forward compatibility.

2. **Update external resource loading**
   Switch from `*-src` attributes on the component to `src` attributes on dedicated `<template>` or
   `<script>` tags.

3. **Adjust component references**
   Inside methods, replace direct `$` references to the component with `$.grapperView`.

4. **Unify helpers**
   Replace `$$.` with `$.` wherever possible. Example: `$$.L(0,50)` → `$.L(0,50)`.

Please, test your components thoroughly after the migration and before deploying them to production.

