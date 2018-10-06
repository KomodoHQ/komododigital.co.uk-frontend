import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import StandardItem from '../../../src/components/standarditem'


const story = storiesOf('Standard Item', module);

story.add(
  'with text',
  withInfo(`
      A panel for displaying a standard or portfolio item
    
      ~~~js
      <StandardItem />
      ~~~
    
    `)(() => <StandardItem />),
);
