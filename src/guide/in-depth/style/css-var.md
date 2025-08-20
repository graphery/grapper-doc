---
outline: deep
---

# CSS Custom Properties

CSS custom properties, also known as CSS variables, are a way to define reusable values in CSS. They
provide a way to store values in variables and use them throughout a stylesheet. Custom properties
are prefixed with two dashes (`--`), followed by a name that you choose. You can define a complete
style system with CSS custom properties and Grapper.

## Declaration

Define a custom property in your CSS by using the following syntax:

```css{2-4}
selector {
  --color-regular: green;
  --color-warning: blue;
  --color-error: red;
}
```

## Usage

Once you've defined a custom property, you can use it throughout your stylesheet.

```css {2,5,8}
.regular {
  fill : var(--color-regular);
}
.warning {
  fill : var(--color-warning);
}
.error {
  fill : var(--color-error);
}
```

## Fallback Values:

You can provide fallback values in case the custom property is not defined. This helps maintain
the aspect if the custom properties are missing.

```css {2,5,8}
.regular {
  fill : var(--color-regular, black);
}
.warning {
  fill : var(--color-warning, grey);
}
.error {
  fill : var(--color-error, black);
}
```

CSS custom properties provide a powerful mechanism for maintaining and managing styles in a more
modular and dynamic way. They enhance code readability, promote reusability, and simplify the
process of updating styles across an entire project.


<ClientOnly>
<div id="css-1"></div>
<g-editor href="#css-1" keep-format>
<textarea><style>
  #example {
    width           : 200px;
    --color-regular : green;
    --color-warning : blue;
    --color-error   : red;
  }
</style>
<grapper-view id="example">
  <template>
    <style>
      .regular {
        fill : var(--color-regular, black);
      }
      .warning {
        fill : var(--color-warning, grey);
      }
      .error {
        fill : var(--color-error, black);
      }
    </style>
    <svg viewBox="0 0 100 100">
      <g g-for="value of data">
        <circle :cx="value.x"
                :cy="value.y"
                :r="value.radix"
                :class="value.class"/>
      </g>
    </svg>
  </template>
  <script type="data">
    "x";"y";"radix";"class"
    20;20;20;"regular"
    45;45;30;"warning"
    80;80;10;"error"
  </script>
</grapper-view></textarea>
</g-editor>
</ClientOnly>
