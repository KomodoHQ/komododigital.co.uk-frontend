import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Services from '../../../src/components/services'

const story = storiesOf('Services', module);

story.add(
  'with text',
  withInfo(`
      Three column service links, with row titles
    
      ~~~js
      <Services />
      ~~~
    
    `)(() => <Services />),
);
