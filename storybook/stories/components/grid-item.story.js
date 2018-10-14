import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GridItem from '../../../src/components/griditem/'

const story = storiesOf('Quad Grid Item', module);

story.add(
  'with text',
  withInfo(`
      A quad grid item.
    
      ~~~js
      <GridItem />
      ~~~
    
    `)(() => <GridItem title="Title"><p>Content</p></GridItem>),
);
