import { defineConfig } from 'vitepress';

const URL     = '/';
const VERSION = '1.0.0';

const MarkdownOptions = {
  languageAlias : {
    'svg'                              : 'html',
    'html:preview'                     : 'html',
    'html:preview:expanded:no-codepen' : 'html',
  }
}

const fullReloadAlways = {
  handleHotUpdate ({server}) {
    server.ws.send({type : "full-reload"});
    return [];
  },
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title       : 'Grapper',
  description : `Graphic Wrapper for data visualization - version ${ VERSION }`,
  sitemap     : {
    hostname : 'https://grapper.dev'
  },
  base        : URL,
  vite        : {
    plugins : [fullReloadAlways],
  },
  vue         : {
    template : {
      compilerOptions : {
        isCustomElement : (tag) => tag.startsWith('grapper-') || tag.startsWith('g')
      }
    }
  },
  markdown    : MarkdownOptions,
  head        : [
    ['link', {rel : 'icon', href : `${ URL }img/logo/g.svg`}],
    ['script', {
      // src : 'http://localhost:7000/src/component/composer.js',
      // type : 'module'
      src : `https://cdn.jsdelivr.net/npm/grapper/dist/view.js`
    }],
    ['script', {
      // src : 'http://localhost:8000/editor/src/component/editor.js',
      src  : 'https://cdn.jsdelivr.net/npm/grapper-editor@1.0.0-beta.1/dist/editor.js',
      type : 'module'
    }],
    ['script', {
      src : './components/welcome.comp.js',
      type : 'module'
    }],
    ['script', {
      src           : 'https://plausible.io/js/script.js',
      defer         : '',
      'data-domain' : 'grapper.dev',
    }]
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig : {
    logo        : {
      light : `/img/logo/grapper.svg`,
      dark  : `/img/logo/grapper-light.svg`
    },
    siteTitle   : false,
    footer      : {
      message   : 'Released under the MIT License.',
      copyright : 'Copyright © 2025 <a href="https://www.graphery.com/"> ' +
                  '<img src="/img/logo/graphery.svg" alt="graphery" width="120"></a>'
    },
    search      : {
      provider : 'local'
    },
    nav         : [
      {link : '/', text : 'Home'},
      {
        text : 'Guides',
        items : [
          {link : '/guide/starter/', text : 'Starter'},
          {link : '/guide/in-depth/', text : 'In-Depth'},
          {link : '/guide/svg/', text : 'Discover SVG'},
        ]
      },
      {link : '/reference/composer.md', text : 'Reference'},
      // {link : '/plugins/', text : 'Plugins'},
      {link : 'https://playground.grapper.dev/gallery/@grapper', text : 'Examples & Playground'},
      {link : 'https://github.com/graphery/grapper/blob/main/CHANGELOG.md', text : VERSION},
    ],
    sidebar     : {
      '/guide/' :
        {
          text  : 'Guide',
          items : [
            {
              text      : 'Starter',
              link      : '/guide/starter/index',
              collapsed : true,
              items     : [
                {link : '/guide/starter/load', text : 'Load'},
                {link : '/guide/starter/composer', text : 'Grapper View'},
                {link : '/guide/starter/template', text : 'Template'},
                {link : '/guide/starter/data', text : 'Data'},
                {link : '/guide/starter/methods', text : 'Methods'},
              ]
            },
            {
              text      : 'In-Depth',
              link      : '/guide/in-depth/',
              collapsed : true,
              items     : [
                {
                  text      : 'Data',
                  link      : '/guide/in-depth/data/',
                  collapsed : true,
                  items     : [
                    {link : '/guide/in-depth/data/embebed', text : 'Embedded data'},
                    {link : '/guide/in-depth/data/external', text : 'Load external data'},
                    {link : '/guide/in-depth/data/csv', text : 'CSV format'},
                    {link : '/guide/in-depth/data/json', text : 'JSON format'},
                    {link : '/guide/in-depth/data/attribute', text : '<code>data</code> attribute'},
                    {link : '/guide/in-depth/data/property', text : '<code>.data</code> property'},
                    {link : '/guide/in-depth/data/value', text : '<code>value</code>'},
                    {link : '/guide/in-depth/data/helpers', text : 'Helpers'},
                    {
                      link : '/guide/in-depth/data/transform',
                      text : '<code>function data()</code>'
                    },
                    {link : '/guide/in-depth/data/reactivity', text : 'Reactivity'},
                  ]
                },
                {
                  text      : 'Templating',
                  link      : '/guide/in-depth/templating/',
                  collapsed : true,
                  items     : [
                    {link : '/guide/in-depth/templating/binding', text : 'Binding'},
                    {link : '/guide/in-depth/templating/lists', text : 'Lists'},
                    {link : '/guide/in-depth/templating/conditional', text : 'Conditional'},
                    {link : '/guide/in-depth/templating/content', text : 'Content'},
                    {link : '/guide/in-depth/templating/events', text : 'Events'},
                    {link : '/guide/in-depth/templating/expressions', text : 'Expressions'},
                    {link : '/guide/in-depth/templating/helpers', text : 'Helpers'},
                  ]
                },
                {
                  text      : 'Methods',
                  link      : '/guide/in-depth/methods/',
                  collapsed : true,
                  items     : [
                    {link : '/guide/in-depth/methods/embebed', text : 'Embedded methods'},
                    {link : '/guide/in-depth/methods/external', text : 'External resource'},
                    {link : '/guide/in-depth/methods/define', text : 'Define functions'},
                    {link : '/guide/in-depth/methods/$-data', text : '<code>$.data</code>'},
                    {link : '/guide/in-depth/methods/$-svg', text : '<code>$.svg</code>'},
                    {link : '/guide/in-depth/methods/$-config', text : '<code>$.config</code>'},
                    {link : '/guide/in-depth/methods/data', text : '<code>data()</code>'},
                    {link : '/guide/in-depth/methods/events', text : 'Events'},
                    {link : '/guide/in-depth/methods/property', text : 'Property'},
                  ]
                },
                {
                  text      : 'Style',
                  link      : '/guide/in-depth/style/',
                  collapsed : true,
                  items     : [
                    {
                      link : '/guide/in-depth/style/attribute-style',
                      text : 'Attribute <code>style</code>'
                    },
                    {
                      link : '/guide/in-depth/style/attribute-class',
                      text : 'Attribute <code>class</code>'
                    },
                    {link : '/guide/in-depth/style/scoped-css', text : 'Scoped CSS'},
                    {link : '/guide/in-depth/style/load-css', text : 'Load External CSS'},
                    {link : '/guide/in-depth/style/css-var', text : 'CSS Custom Properties'}
                  ]
                },
                {
                  text      : 'Animation',
                  link      : '/guide/in-depth/animation/',
                  collapsed : true,
                  items     : [
                    {
                      link : '/guide/in-depth/animation/g-bind',
                      text : '<code>$$.dynamic()</code> with <code>g-bind</code>'
                    },
                    {
                      link : '/guide/in-depth/animation/viewport',
                      text : 'Animation in and out the viewport'
                    },
                    {link : '/guide/in-depth/animation/api', text : 'Animation API'}
                  ]
                },
                {
                  text      : 'Config',
                  link      : '/guide/in-depth/config/',
                  collapsed : true,
                  items     : [
                    {link : '/guide/in-depth/config/embebed', text : 'Embebed config'},
                    {link : '/guide/in-depth/config/external', text : 'External resource'},
                    {link : '/guide/in-depth/config/property', text : 'Property'}
                  ]
                },
                // {
                //   text      : 'Grapper View',
                //   link      : '/guide/in-depth/composer/',
                //   collapsed : true,
                //   items     : [
                //     {link : '/guide/in-depth/composer/attributes', text : 'Attributes'},
                //     {link : '/guide/in-depth/composer/events', text : 'Events'},
                //     {link : '/guide/in-depth/composer/html', text : 'Use in HTML'},
                //     {link : '/guide/in-depth/composer/vue', text : 'Use in VUE'},
                //     {link : '/guide/in-depth/composer/react', text : 'Use in React'},
                //     {link : '/guide/in-depth/composer/svelte', text : 'Use in Svelte'},
                //     {link : '/guide/in-depth/composer/angular', text : 'Use in Angular'},
                //     {link : '/guide/in-depth/composer/custom-component', text : 'Encapsulate in a component'},
                //   ]
                // },
                // {
                //   text      : 'Plugin',
                //   link      : '/guide/in-depth/plugins/',
                //   collapsed : true,
                //   items     : [
                //     {
                //       link : '/guide/in-depth/plugins/load',
                //       text : 'Load a plugin'
                //     },
                //     {
                //       link : '/guide/in-depth/plugins/create',
                //       text : 'Custom plugin'
                //     }
                //   ]
                // },
                // {
                //   text      : 'Architecture',
                //   link      : '/guide/in-depth/architecture/',
                //   collapsed : true,
                //   items     : [
                //     {
                //       link : '/guide/in-depth/architecture/why',
                //       text : 'Why Grapper?'
                //     },
                //     {
                //       link : '/guide/in-depth/architecture/microframework',
                //       text : 'Microframework'
                //     },
                //     {
                //       link : '/guide/in-depth/architecture/webcomponent',
                //       text : 'Web Component'
                //     },
                //     {
                //       link : '/guide/in-depth/architecture/declarative',
                //       text : 'Declarative vs. Imperative'
                //     },
                //   ]
                // },
                {
                  text      : 'SVG API',
                  link      : '/guide/in-depth/svg-api/',
                  collapsed : true,
                  items     : [
                    {
                      link : '/guide/in-depth/svg-api/wrapper',
                      text : 'Wrapper'
                    },
                    {
                      link : '/guide/in-depth/svg-api/manage-elements',
                      text : 'Manage Elements'
                    }
                  ]
                },
              ],
            },
            {
              text      : 'Discover SVG',
              link      : '/guide/svg/',
              collapsed : true,
              items     : [
                {link : '/guide/svg/svg-structure.md', text : 'Structure'},
                {link : '/guide/svg/basic-shapes.md', text : 'Basic Shapes'},
                {link : '/guide/svg/path-element.md', text : 'Path'},
                {link : '/guide/svg/text-element.md', text : 'Text'},
                {link : '/guide/svg/fill-and-stroke.md', text : 'Fill and Stroke'},
                {link : '/guide/svg/reuse-elements.md', text : 'Reuse elements'},
                {link : '/guide/svg/gradients-and-patterns.md', text : 'Gradients and Patters'},
                {link : '/guide/svg/aspect-ratio.md', text : 'Size and Aspect Ratio'},
                {link : '/guide/svg/transform.md', text : 'Transform'},
                {link : '/guide/svg/css.md', text : 'CSS'},
                {link : '/guide/svg/animation.md', text : 'Animation'},
                {
                  link : '/guide/svg/text-path-and-clip-path.md',
                  text : 'Text Path and Clip Path'
                },
                {link : '/guide/svg/manage-elements.md', text : 'Manage Elements'},
                {link : '/guide/svg/events.md', text : 'Handle Events'},
                {link : '/guide/svg/grapper-svg.md', text : 'How to extents SVG with Grapper'},
              ]
            }]
        },
      // '/plugins/'   : [{
      //   text  : 'Plugins',
      //   link : '/plugins/',
      //   items     : [
      //     {link : '/plugins/catalog/shapes', text : 'Shapes'},
      //     {link : '/plugins/catalog/observe-resize', text : 'Observe Resize'},
      //     {link : '/plugins/catalog/non-scaling-size', text : 'Non Scaling Size'},
      //   ]
      // }],
      '/reference/' : [{
        text  : 'Reference',
        link : '/reference/load.md',
        items: [
          {
            text : 'Load',
            link : '/reference/load.md',
          },
          {
            text : 'Grapper View',
            link : '/reference/composer.md',
          },
          {
            text : 'Template',
            link : '/reference/template.md',
          },
          {
            text : 'Data',
            link : '/reference/data.md',
          },
          {
            text : 'Methods',
            link : '/reference/methods.md',
          },
          {
            text : 'Config',
            link : '/reference/config.md',
          },
          {
            link      : '/reference/svg-api/',
            text      : 'SVG API',
            collapsed : true,
            items     : [
              {link : "/reference/svg-api/management", text : "manage elements"},
              {
                link : "/reference/svg-api/attributes-properties-methods",
                text : "attr., prop. & methods"
              },
              {link : "/reference/svg-api/classList-and-style", text : "classList and style"},
              {link : "/reference/svg-api/animateTo", text : "animateTo"},
              {link : "/reference/svg-api/a", text : "a"},
              {link : "/reference/svg-api/animate", text : "animate"},
              {link : "/reference/svg-api/animateMotion", text : "animateMotion"},
              {link : "/reference/svg-api/animateTransform", text : "animateTransform"},
              {link : "/reference/svg-api/circle", text : "circle"},
              {link : "/reference/svg-api/clipPath", text : "clipPath"},
              {link : "/reference/svg-api/defs", text : "defs"},
              {link : "/reference/svg-api/desc", text : "desc"},
              {link : "/reference/svg-api/ellipse", text : "ellipse"},
              {link : "/reference/svg-api/filter", text : "filter"},
              {link : "/reference/svg-api/FilterPrimitives", text : "Filter Primitives"},
              {link : "/reference/svg-api/foreignObject", text : "foreignObject"},
              {link : "/reference/svg-api/g", text : "g"},
              {link : "/reference/svg-api/image", text : "image"},
              {link : "/reference/svg-api/line", text : "line"},
              {link : "/reference/svg-api/linearGradient", text : "linearGradient"},
              {link : "/reference/svg-api/marker", text : "marker"},
              {link : "/reference/svg-api/mask", text : "mask"},
              {link : "/reference/svg-api/metadata", text : "metadata"},
              {link : "/reference/svg-api/mpath", text : "mpath"},
              {link : "/reference/svg-api/path", text : "path"},
              {link : "/reference/svg-api/pattern", text : "pattern"},
              {link : "/reference/svg-api/polygon", text : "polygon"},
              {link : "/reference/svg-api/polyline", text : "polyline"},
              {link : "/reference/svg-api/radialGradient", text : "radialGradient"},
              {link : "/reference/svg-api/rect", text : "rect"},
              {link : "/reference/svg-api/set", text : "set"},
              {link : "/reference/svg-api/stop", text : "stop"},
              {link : "/reference/svg-api/style", text : "style"},
              {link : "/reference/svg-api/svg", text : "svg"},
              {link : "/reference/svg-api/switch", text : "switch"},
              {link : "/reference/svg-api/symbol", text : "symbol"},
              {link : "/reference/svg-api/text", text : "text"},
              {link : "/reference/svg-api/textPath", text : "textPath"},
              {link : "/reference/svg-api/title", text : "title"},
              {link : "/reference/svg-api/tspan", text : "tspan"},
              {link : "/reference/svg-api/use", text : "use"},
              {link : "/reference/svg-api/view", text : "view"}
            ]
          },
        ]
        // items : [
        //   {
        //     text : 'composer',
        //     link : '/reference/index.md',
        //   },
        //   {
        //     text      : 'svg',
        //     link      : '/reference/svg/',
        //     collapsed : true,
        //     items     : [
        //       {
        //         text      : 'directives',
        //         link      : '/reference/svg/templating/',
        //         collapsed : true,
        //         items     : [
        //           {link : '/reference/svg/templating/g-bind', text : 'g-bind'},
        //           {link : '/reference/svg/templating/g-for', text : 'g-for'},
        //           {link : '/reference/svg/templating/g-if', text : 'g-if'},
        //           {link : '/reference/svg/templating/g-content', text : 'g-content'},
        //           {link : '/reference/svg/templating/g-on', text : 'g-on'},
        //         ]
        //       },
        //       {link : '/reference/svg/src', text : 'src'},
        //       {link : '/reference/svg/property', text : 'property'},
        //       {
        //         link      : '/reference/svg-api/',
        //         text      : 'wrapper',
        //         collapsed : true,
        //         items     : [
        //           {link : "/reference/svg-api/management", text : "manage elements"},
        //           {
        //             link : "/reference/svg-api/attributes-properties-methods",
        //             text : "attributes, properties, methods"
        //           },
        //           {link : "/reference/svg-api/classList-and-style", text : "classList and style"},
        //           {link : "/reference/svg-api/animateTo", text : "animateTo"},
        //           {link : "/reference/svg-api/a", text : "a"},
        //           {link : "/reference/svg-api/animate", text : "animate"},
        //           {link : "/reference/svg-api/animateMotion", text : "animateMotion"},
        //           {link : "/reference/svg-api/animateTransform", text : "animateTransform"},
        //           {link : "/reference/svg-api/circle", text : "circle"},
        //           {link : "/reference/svg-api/clipPath", text : "clipPath"},
        //           {link : "/reference/svg-api/defs", text : "defs"},
        //           {link : "/reference/svg-api/desc", text : "desc"},
        //           {link : "/reference/svg-api/ellipse", text : "ellipse"},
        //           {link : "/reference/svg-api/filter", text : "filter"},
        //           {link : "/reference/svg-api/FilterPrimitives", text : "Filter Primitives"},
        //           {link : "/reference/svg-api/foreignObject", text : "foreignObject"},
        //           {link : "/reference/svg-api/g", text : "g"},
        //           {link : "/reference/svg-api/image", text : "image"},
        //           {link : "/reference/svg-api/line", text : "line"},
        //           {link : "/reference/svg-api/linearGradient", text : "linearGradient"},
        //           {link : "/reference/svg-api/marker", text : "marker"},
        //           {link : "/reference/svg-api/mask", text : "mask"},
        //           {link : "/reference/svg-api/metadata", text : "metadata"},
        //           {link : "/reference/svg-api/mpath", text : "mpath"},
        //           {link : "/reference/svg-api/path", text : "path"},
        //           {link : "/reference/svg-api/pattern", text : "pattern"},
        //           {link : "/reference/svg-api/polygon", text : "polygon"},
        //           {link : "/reference/svg-api/polyline", text : "polyline"},
        //           {link : "/reference/svg-api/radialGradient", text : "radialGradient"},
        //           {link : "/reference/svg-api/rect", text : "rect"},
        //           {link : "/reference/svg-api/set", text : "set"},
        //           {link : "/reference/svg-api/stop", text : "stop"},
        //           {link : "/reference/svg-api/style", text : "style"},
        //           {link : "/reference/svg-api/svg", text : "svg"},
        //           {link : "/reference/svg-api/switch", text : "switch"},
        //           {link : "/reference/svg-api/symbol", text : "symbol"},
        //           {link : "/reference/svg-api/text", text : "text"},
        //           {link : "/reference/svg-api/textPath", text : "textPath"},
        //           {link : "/reference/svg-api/title", text : "title"},
        //           {link : "/reference/svg-api/tspan", text : "tspan"},
        //           {link : "/reference/svg-api/use", text : "use"},
        //           {link : "/reference/svg-api/view", text : "view"}
        //         ]
        //       },
        //     ]
        //   },
        //   {
        //     text      : 'data',
        //     link      : '/reference/data/',
        //     collapsed : true,
        //     items     : [
        //       {link : '/reference/data/content', text : 'content'},
        //       {link : '/reference/data/src', text : 'src'},
        //       {link : '/reference/data/attribute', text : 'attribute'},
        //       {link : '/reference/data/property', text : 'property'},
        //     ]
        //   },
        //   {
        //     text      : 'methods',
        //     link      : '/reference/methods/',
        //     collapsed : false,
        //     items     : [
        //       {link : '/reference/methods/content', text : 'content'},
        //       {link : '/reference/methods/src', text : 'src'},
        //       {link : '/reference/methods/property', text : 'property'},
        //     ]
        //   },
        //   {
        //     text      : 'plugins',
        //     link      : '/reference/plugins/',
        //     collapsed : false,
        //     items     : [
        //       {link : '/reference/plugins/shapes', text : 'shapes'},
        //     ]
        //   }
        // ]
      }],
      // '/examples/'  : [{
      //   text  : 'Examples',
      //   items : [
      //     {link : '/examples/', text : 'Basic bars'},
      //     {link : '/examples/bars', text : 'Chart Bars'},
      //     {link : '/examples/bump-chart', text : 'Bump chart'},
      //     {link : '/examples/circle-bars', text : 'Circle Bars'},
      //     {link : '/examples/clock', text : 'Clock'},
      //     {link : '/examples/comparison', text : 'Comparison'},
      //     {link : '/examples/dog-or-cat', text : 'Dog or Cat'},
      //     {link : '/examples/map', text : 'EU Map'},
      //     {link : '/examples/gauge', text : 'Gauge'},
      //     {link : '/examples/bottle', text : 'Half-full Bottle'},
      //     {link : '/examples/world-population', text : 'Horizontal bars: population'},
      //     {link : '/examples/evolution', text : 'Human Evolution'},
      //     {link : '/examples/heatmap-day-hour', text : 'Heatmap: day & hour'},
      //     {link : '/examples/line-chart', text : 'Line Chart'},
      //     {link : '/examples/otto-neurath-tribute', text : 'Otto Neumath tribute'},
      //     {link : '/examples/percentage', text : 'Percentage'},
      //     {link : '/examples/process', text : 'Process'},
      //     {link : '/examples/quadrant', text : 'Quadrant'},
      //     {link : '/examples/radial-temp', text : 'Radial: temperature range'},
      //     {link : '/examples/ranking', text : 'Population Ranking'},
      //     {link : '/examples/ranking-evolution', text : 'Ranking Evolution'},
      //     {link : '/examples/survey', text : 'Survey'},
      //     {link : '/examples/timeline-horizontal', text : 'Timeline (horizontal)'},
      //     {link : '/examples/treemap', text : 'Treemap'},
      //     {link : '/examples/votes', text : 'Votes'},
      //     {link : '/examples/du-bois-tribute', text : 'W.E.B. Du Bois Tribute'},
      //   ]
      // }],
    },
    socialLinks : [
      {
        link : 'https://www.npmjs.com/package/grapper',
        icon : {svg : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" xml:space="preserve"><g><path d="M10,10v980h980V10H10z M806.3,806.3H683.8v-490H500v490H193.8V193.8h612.5V806.3z"/></g> </svg>`}
      },
      {link : 'https://github.com/graphery/grapper', icon : 'github'},
    ]
  }
});

