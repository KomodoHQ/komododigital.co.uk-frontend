import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import CaseStudy from '../../../src/components/casestudy/'

const story = storiesOf('Case Study', module);

story.add(
  'with text',
  withInfo(`
      A link to a case study.
    
      ~~~js
      <CaseStudy>Click Here</CaseStudy>
      ~~~
    
    `)(() => <CaseStudy imgsrc={"images/casestudy.png"} subtitle="SOCIAL HOUSING" title="Simplifying the customer journey to digital adoption" link="/Case-study"><p>Onward is a leading provider of quality, affordable homes for rent and sale in the North West. Once a collection of five individual organisations, they now own and manage over 35,000 homes across the region.</p></CaseStudy>),
);
