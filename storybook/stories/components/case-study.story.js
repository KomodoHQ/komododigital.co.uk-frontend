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
    
    `)(() => <CaseStudy />),
);
