import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import CaseStudySection from '../../../src/components/casestudysection/'

const story = storiesOf('Case Study Section', module);

story.add(
  'with text',
  withInfo(`
      A section from a case study
    
      ~~~js
      <CaseStudySection>Click Here</CaseStudySection>
      ~~~
    
    `)(() => <CaseStudySection />),
);
