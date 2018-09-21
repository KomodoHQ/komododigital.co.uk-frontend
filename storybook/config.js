import { configure } from '@storybook/react';

function loadStories() {
  require('./stories/index.js');
  require('./stories/blogsummaryview.js');
}

configure(loadStories, module);
