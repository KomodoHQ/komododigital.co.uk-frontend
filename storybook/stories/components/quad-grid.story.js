import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import QuadGrid from '../../../src/components/quadgrid/'
import GridItem from '../../../src/components/griditem/'

const story = storiesOf('Quad Grid', module);

story.add(
  'with text',
  withInfo(`
      A grid of four elements
    
      ~~~js
      <QuadGrid />
      ~~~
    
    `)(() => <QuadGrid>
      <GridItem title="Discovery" image="https://picsum.photos/100/?random"><p>Content</p></GridItem>
      <GridItem title="Title" image="https://picsum.photos/100/?random"><p>Content</p></GridItem>
      <GridItem title="Title" image="https://picsum.photos/100/?random"><p>Content</p></GridItem>
      <GridItem title="Title" image="https://picsum.photos/100/?random"><p>Content</p></GridItem>
      </QuadGrid>),
);
