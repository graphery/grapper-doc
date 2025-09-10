import defineComponent from 'https://cdn.jsdelivr.net/npm/grapper/dist/module/lib/component.js';

export default defineComponent(
  `grapper-welcome`,
  `<grapper-view style="width: 100%">
    <template>
      <svg viewBox="0 0 1000 500" font-family="Poppins" @render="run">
        <defs>
          <clipPath id="clip">
            <rect x="500" y="0" width="0" height="500" />
          </clipPath>
        </defs>
        <path id="brackets" fill="none" stroke="black" stroke-width="4"/>
        <text id="name" clip-path="url(#clip)" x="500" y="250" font-size="58" font-weight="500" dominant-baseline="middle" text-anchor="middle">
          <tspan id="name-content" g-content="name[0]"></tspan>
        </text>
  
        <g g-for="(element, n) of elements">
          <path :id="element.id" :stroke="$.config.colors[n]" :transform="$.translate(n * 180, 0)" fill="none" stroke-width="4" opacity="0" d="M320,250L320,250L320,250L320,250L320,250L320,250Z"/>
          <g :transform="$.translate(320 + n * 180, 250)" >
            <text :id="element.id + 'Label'" transform="scale(0)" font-size="21" font-weight="500"  dominant-baseline="middle" text-anchor="middle" g-content="element.label"></text>
          </g>
          <g :id="element.id + 'Description'" opacity="0" :fill="$.config.colors[n]" font-size="24" font-weight="500" text-anchor="middle">
            <text g-for="(text, i) of element.description" x="500" :y="400 + i * 35" g-content="text"></text>
          </g>
        </g>
  
        <svg id="logo" x="0" y="180" viewBox="0 0 210 50" height="140" opacity="0">
          <g>
            <polyline points="32.99 10.63 28.9 3.51 15.94 3.51 9.47 14.72 15.94 25.95 28.9 25.95 32.99 18.84" fill="none" :stroke="$.config.colors[0]" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"/>
            <polyline points="34.74 37.16 42.9 37.16 49.38 25.95 42.9 14.72 29.96 14.72 26.6 20.53" fill="none" :stroke="$.config.colors[1]" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"/>
            <polyline points="10.85 25.54 6.77 32.62 13.25 43.83 26.21 43.83 32.67 32.62 30.9 29.55" fill="none" :stroke="$.config.colors[2]" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"/>
          </g>
          <g>
            <path d="M80.25,20.52c-.61-1.18-1.46-2.07-2.55-2.67-1.09-.6-2.35-.9-3.77-.9-1.56,0-2.96.35-4.18,1.05-1.22.7-2.18,1.7-2.87,2.99-.69,1.29-1.04,2.79-1.04,4.49s.34,3.2,1.04,4.5c.69,1.3,1.65,2.31,2.87,3.01,1.22.7,2.62,1.05,4.18,1.05,2.11,0,3.82-.59,5.13-1.77,1.31-1.18,2.12-2.78,2.41-4.79h-8.87v-3.09h13.02v3.03c-.25,1.84-.9,3.53-1.96,5.07-1.05,1.54-2.43,2.77-4.11,3.69s-3.56,1.38-5.63,1.38c-2.22,0-4.25-.52-6.09-1.55s-3.29-2.47-4.37-4.3c-1.08-1.84-1.62-3.91-1.62-6.22s.54-4.39,1.62-6.22c1.08-1.84,2.54-3.27,4.39-4.3,1.85-1.03,3.87-1.55,6.07-1.55,2.52,0,4.75.62,6.71,1.85,1.96,1.24,3.38,2.99,4.27,5.25h-4.66Z" fill="#2b2b2b"/>
            <path d="M95.44,19.11c.94-.53,2.06-.8,3.35-.8v4.01h-.99c-1.52,0-2.67.39-3.45,1.16-.78.77-1.17,2.11-1.17,4.01v9.86h-3.88v-18.73h3.88v2.72c.57-.95,1.32-1.69,2.26-2.23Z" fill="#2b2b2b"/>
            <path d="M101.52,22.9c.78-1.45,1.85-2.58,3.2-3.38,1.35-.8,2.84-1.21,4.47-1.21,1.47,0,2.76.29,3.86.87,1.1.58,1.98,1.3,2.63,2.16v-2.72h3.91v18.73h-3.91v-2.79c-.66.88-1.55,1.62-2.69,2.21-1.13.59-2.43.88-3.88.88-1.61,0-3.08-.41-4.42-1.24-1.34-.83-2.4-1.98-3.18-3.47-.78-1.48-1.17-3.17-1.17-5.05s.39-3.55,1.17-5ZM114.88,24.6c-.53-.95-1.23-1.68-2.09-2.18-.86-.5-1.79-.75-2.79-.75s-1.93.24-2.79.73c-.86.49-1.56,1.2-2.09,2.14-.53.94-.8,2.06-.8,3.35s.27,2.43.8,3.4c.53.97,1.24,1.72,2.11,2.23.87.51,1.8.76,2.77.76s1.93-.25,2.79-.75c.86-.5,1.56-1.23,2.09-2.19.53-.96.8-2.09.8-3.38s-.27-2.41-.8-3.37Z" fill="#2b2b2b"/>
            <path d="M130.75,19.19c1.13-.59,2.41-.88,3.84-.88,1.63,0,3.12.4,4.47,1.21,1.35.8,2.41,1.93,3.18,3.38.77,1.45,1.16,3.12,1.16,5s-.39,3.56-1.16,5.05c-.77,1.49-1.83,2.64-3.18,3.47-1.35.83-2.84,1.24-4.47,1.24-1.43,0-2.7-.29-3.81-.87-1.11-.58-2.02-1.3-2.72-2.16v11.63h-3.88v-27.64h3.88v2.75c.66-.86,1.55-1.59,2.69-2.18ZM138.66,24.55c-.53-.94-1.24-1.65-2.11-2.14-.87-.49-1.81-.73-2.81-.73s-1.9.25-2.77.75c-.87.5-1.58,1.22-2.11,2.18s-.8,2.07-.8,3.37.27,2.42.8,3.38,1.24,1.69,2.11,2.19c.87.5,1.8.75,2.77.75s1.93-.25,2.81-.76c.87-.51,1.58-1.25,2.11-2.23s.8-2.11.8-3.4-.27-2.41-.8-3.35Z" fill="#2b2b2b"/>
            <path d="M153.45,19.19c1.13-.59,2.41-.88,3.84-.88,1.63,0,3.12.4,4.47,1.21,1.35.8,2.41,1.93,3.18,3.38.77,1.45,1.16,3.12,1.16,5s-.39,3.56-1.16,5.05c-.77,1.49-1.83,2.64-3.18,3.47-1.35.83-2.84,1.24-4.47,1.24-1.43,0-2.7-.29-3.81-.87-1.11-.58-2.02-1.3-2.72-2.16v11.63h-3.88v-27.64h3.88v2.75c.66-.86,1.55-1.59,2.69-2.18ZM161.36,24.55c-.53-.94-1.24-1.65-2.11-2.14-.87-.49-1.81-.73-2.81-.73s-1.9.25-2.77.75c-.87.5-1.58,1.22-2.11,2.18s-.8,2.07-.8,3.37.27,2.42.8,3.38,1.24,1.69,2.11,2.19c.87.5,1.8.75,2.77.75s1.93-.25,2.81-.76c.87-.51,1.58-1.25,2.11-2.23s.8-2.11.8-3.4-.27-2.41-.8-3.35Z" fill="#2b2b2b"/>
            <path d="M186.79,29.43h-14.31c.11,1.5.67,2.7,1.67,3.6,1,.91,2.22,1.36,3.67,1.36,2.08,0,3.56-.87,4.42-2.62h4.18c-.57,1.72-1.59,3.13-3.08,4.23s-3.33,1.65-5.52,1.65c-1.79,0-3.4-.4-4.81-1.21-1.42-.8-2.53-1.94-3.33-3.4-.8-1.46-1.21-3.16-1.21-5.08s.39-3.62,1.17-5.08c.78-1.46,1.88-2.59,3.3-3.38,1.42-.79,3.04-1.19,4.88-1.19s3.34.39,4.73,1.16,2.46,1.85,3.23,3.25c.77,1.39,1.16,3,1.16,4.81,0,.7-.05,1.34-.14,1.9ZM182.88,26.3c-.02-1.43-.53-2.57-1.53-3.43-1-.86-2.23-1.29-3.71-1.29-1.34,0-2.48.42-3.43,1.27s-1.52,2-1.7,3.45h10.37Z" fill="#2b2b2b"/>
            <path d="M196.53,19.11c.94-.53,2.06-.8,3.35-.8v4.01h-.99c-1.52,0-2.67.39-3.45,1.16-.78.77-1.17,2.11-1.17,4.01v9.86h-3.88v-18.73h3.88v2.72c.57-.95,1.32-1.69,2.26-2.23Z" fill="#2b2b2b"/>
          </g>
        </svg>
        <g id="slogan" opacity="0" fill="#555" font-size="30" font-weight="300">
          <text g-for="(text, i) of slogan" x="500" :y="380 + i * 45" text-anchor="middle" g-content="text"></text>
        </g>
      </svg>
    </template>
    <script type="data">
      {
        name: [
          'Graph Wrapper',
          'GraphWrapper',
          'Graphrapper',
          'Graprapper',
          'Grapapper',
          'Grappper',
          'Grapper'
        ],
        elements: [
          {
            id          : 'data',
            label       : 'data',
            description : ['Transform raw information','into attractive insights for exploration']
          },
          {
            id          : 'dynamics',
            label       : 'dynamics',
            description : ['Stay reactive and interactive,','adapting to changes and user actions']
          },
          {
            id          : 'visualization',
            label       : 'visualization',
            description : ['Turn complex information','into clear and engaging visuals']
          }
        ],
        slogan: ['A fast, lightweight component', 'for beautiful data visualization'],
      }
    </script>
    <script type="config">
      {
        colors: ['#fe5140', '#20ae66', '#4089c4']
      }
    </script>
    <script type="methods">
      function run() {
        const brackets = $.svg.querySelector('#brackets');
        const clip     = $.svg.querySelector('#clip rect');
        const name     = $.svg.querySelector('#name');
        const nameCont = $.svg.querySelector('#name-content');
        const logo     = $.svg.querySelector('#logo');
        const slogan   = $.svg.querySelector('#slogan');
  
        // Step 01: show brackets
        brackets.animateTo([
          {offset: 0.00, d: 'M500,250 L500,250 L500,250 L500,250 M500,250 L500,250 L500,250 L500,250'},
          {offset: 0.85, d: 'M552,159 L605,250 L552,340 L447,341 M447,341 L395,250 L447,159 L552,159'},
          {offset: 1.00, d: 'M550,163 L600,250 L550,337 L450,337 M450,337 L400,250 L450,163 L550,163'},
        ], {duration: 500, delay: 10});
  
        // Step 02: open brackets and show name
        brackets.animateTo([
          {offset: 0.00, d: 'M550,163 L600,250 L550,337 L450,337 M450,337 L400,250 L450,163 L550,163'},
          {offset: 0.85, d: 'M760,163 L810,250 L760,337 L760,337 M240,337 L190,250 L240,163 L240,163'},
          {offset: 1.00, d: 'M750,163 L800,250 L750,337 L750,337 M250,337 L200,250 L250,163 L250,163'},
        ], {duration: 500, delay: 1000});
        clip.animateTo([
          {x: 500, width: 0},
          {x: 200, width: 800}
        ], {duration: 500, delay: 1100});
  
        // Step 03: transform name
        setTimeout(() => {
          $.data.name.forEach((text, i) => {
            setTimeout(() => {
              nameCont.content(text);
            }, 100 * i);
          });
        }, 2500);
  
        // Step 04: move name
        name.animateTo([{y: 250},{y: 100}], {duration: 500, delay: 4500});
  
        // Step 05: show hexagons
        $.data.elements.forEach((element, i) => {
          const hexagon = $.svg.querySelector(\`#\${ element.id }\`);
          const label   = $.svg.querySelector(\`#\${ element.id }Label\`);
          const desc    = $.svg.querySelector(\`#\${ element.id }Description\`);
          hexagon.animateTo([
            {offset: 0.00, d: \`M320,250L320,250L320,250L320,250L320,250L320,250Z\`},
            {offset: 1.00, d: \`M360,180L400,250L360,319L280,319L240,250L280,180Z\`}
          ], {duration: 500, delay: 5000})
                 .animateTo({opacity: 1.}, {duration: 500, delay: 5000})
                 .animateTo({opacity: 0.3}, {duration: i === 0 ? 0 : 400, delay: 6000})
                 .animateTo({opacity: 1.0}, {duration: i === 0 ? 0 : 400, delay: 6000 + (i * 4000)})
                 .animateTo({opacity: 0.3}, {duration: 400, delay: 10000 + (i * 4000)})
                 .animateTo({opacity: 1.0}, {duration: 400, delay: 18000});
          label.animateTo({opacity: 1.0, transform: {scale: 1}}, {duration: 500, delay: 5000})
               .animateTo({opacity: 0.3}, {duration: i === 0 ? 0 : 400, delay: 6000})
               .animateTo({opacity: 1.0}, {duration: i === 0 ? 0 : 400, delay: 6000 + (i * 4000)})
               .animateTo({opacity: 0.3}, {duration: 400, delay: 10000 + (i * 4000)})
               .animateTo({opacity: 1.0}, {duration: 400, delay: 18000})
               .animateTo({opacity: 0},   {duration: 200, delay: 20000});
          desc.animateTo({opacity: 1.0}, {duration: 500, delay: 6200 + (i * 4000)})
              .animateTo({opacity: 0}, {duration: 400, delay: 10200 + (i * 4000)});
        });
  
        // Step 06: morph logo
        brackets.animateTo({opacity: 0}, {duration: 400, delay: 19500});
        const morphLogoConfig = {duration: 800, delay: 20000};
        name.animateTo([
            {offset: 0.90, opacity: 1, transform: {scale: 1.7, translate: [-158, 52]}},
            {offset: 1, opacity: 0, transform: {scale: 1.7, translate: [-158, 52]}},
          ], morphLogoConfig);
        const translates = [ [215, 190], [300, 255], [204, 290]];
        $.data.elements.forEach((element, i) => {
           $.svg.querySelector(\`#\${ element.id }\`).animateTo([
              {offset: 0.90, opacity: 1, strokeWidth: 14, transform: {scale: 0.5, translate: translates[i]}},
              {offset: 1, opacity: 0, strokeWidth: 14, transform: {scale: 0.5, translate: translates[i]}},
            ], morphLogoConfig);
        });
        logo.animateTo([
            {offset: 0.90, opacity: 0},
            {offset: 1, opacity: 1}
          ], morphLogoConfig);
        slogan.animateTo({opacity: 1}, {duration: 400, delay: 21500})
  
        // Reload
        setTimeout(() => $.grapperView.load(), 27000);
      }
    </script>
  </grapper-view>`
);