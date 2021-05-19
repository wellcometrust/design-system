/**
 * @file Manages server side rendering of React components as separate app instances
 */
import React from 'react';
import fs from 'fs';
import { renderToString } from 'react-dom/server';

import { componentMap } from './ssr-config';
import componentTemplate from './component.template';

// combine rendered components into a single array for preview
componentMap.forEach(({ name, component }) => {
  const renderedComponent = renderToString(component);

  // create an individual file for each item in componentMap
  fs.writeFile(
    `./dist/components/${name}/${name}.html`,
    componentTemplate(name, renderedComponent),
    err => {
      if (err) return console.log(err);

      return console.log(`Created ${name}`);
    }
  );
});
