import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Testimonial from '../../../src/components/testimonial/'

const story = storiesOf('Testimonial', module);

story.add(
  'with text',
  withInfo(`
      A case study testimonial
    
      ~~~js
      <Testimonial />
      ~~~
    
    `)(() => <Testimonial />),
);
