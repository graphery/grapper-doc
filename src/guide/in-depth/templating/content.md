---
outline: deep
---

# Adding Content

The `g-content` directive in Grapper is a feature that enables to incorporate content from data
into an elements. This directive provides the flexibility to dynamically generate and populate the 
SVG based on the provided data. When the SVG is rendered, the directive will be processed, and the 
specified content will be inserted in the appropriate locations.

The `g-content` directive supports both text and SVG source code as the content source. This means
that you can populate the target elements with either plain text or dynamically generate SVG code,
giving you a wide range of possibilities for data-driven visualizations or custom designs.

<ClientOnly>
<grapper-view id="content-1" data="title: 'hello', description: 'simple example'" style="width: 200px">
  <svg viewBox="0 0 100 100">
    <rect x="0" y="0" width="100" height="100" fill="green"/>
    <text style="font-size:20px; fill:white"
          x="5" 
          y="40" 
          g-content="data.title" ></text>
    <text style="font-size:12px; fill:white"
          x="5" 
          y="65" 
          g-content="data.description"></text>
  </svg>
</grapper-view>
<g-editor href="#content-1" lines-highlight="3;12;18"></g-editor>
</ClientOnly>

If you want to load the content from an external resource, you can use the `$$.fromURL()` helper as 
an expression of the `g-content` directive indicating the URL from which the content to be inserted 
inside the element will be downloaded.

<ClientOnly>
<grapper-view id="content-2" style="width: 300px">
  <svg viewBox="0 0 200 40">
    <g g-for="(location, idx) of data">
      <g g-content="$$.fromURL(location)" 
         g-bind:transform="$$.translate( idx * -50, 0)">
      </g>
    </g>
  </svg>
  <g-script type="data">[
    'https://cdn.graphery.online/grapper/examples/svg/cat.svg',
    'https://cdn.graphery.online/grapper/examples/svg/dog.svg'
  ]</g-script>
</grapper-view>
<g-editor href="#content-2" lines-highlight="6"></g-editor>
</ClientOnly>