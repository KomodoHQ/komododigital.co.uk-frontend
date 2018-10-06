import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Metric from '../../../src/components/metric/'

const story = storiesOf('Metric', module);

story.add(
  'with text',
  withInfo(`
      A case study metric
    
      ~~~js
      <Metric />
      ~~~
    
    `)(() => <Metric />),
);
