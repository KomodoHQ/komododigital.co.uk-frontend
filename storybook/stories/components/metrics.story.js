import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Metrics from '../../../src/components/metrics/'
import Metric from '../../../src/components/metric/'

const story = storiesOf('Metrics', module);

story.add(
  'with text',
  withInfo(`
      A case study metrics triptic.
    
      ~~~js
        <Metrics>
            <Metric value="100" metric="Metric result" description="Description" />
            <Metric value="100" metric="Metric result" description="Description" />
            <Metric value="100" metric="Metric result" description="Description" />
        </Metrics>
      ~~~
    
    `)(() => 
        <Metrics>
            <Metric value="100" metric="Metric result" description="Description" />
            <Metric value="100" metric="Metric result" description="Description" />
            <Metric value="100" metric="Metric result" description="Description" />
        </Metrics>),
);
