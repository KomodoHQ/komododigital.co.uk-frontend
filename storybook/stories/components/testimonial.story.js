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
    
    `)(() => <Testimonial name="Name" jobtitle="Job title" company="company">Onward is a leading provider of quality, affordable homes for rent and sale in the North West. Once a collection of five individual organisations, they now own and manage over 35,000
    homes across the region.
    
    Their mission is to make a real difference to the lives of their customers, enabling easy to use and preferable online services through scaled digital adoption and transformation.</Testimonial>),
);
