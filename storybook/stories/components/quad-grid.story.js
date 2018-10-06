import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import QuadGrid from '../../../src/components/quadgrid/'

const story = storiesOf('Quad Grid', module);

story.add(
  'with text',
  withInfo(`
      A grid of four elements
    
      ~~~js
      <QuadGrid />
      ~~~
    
    `)(() => <QuadGrid />),
);
