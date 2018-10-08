import { configure } from '@storybook/react';

const req = require.context('./', true, /story\.js$/);

function loadStories() {
  console.log(req.keys())
  req.keys().forEach(req);
}

configure(loadStories, module);
