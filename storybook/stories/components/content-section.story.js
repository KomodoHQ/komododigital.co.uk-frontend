import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ContentSection from '../../../src/components/contentsection/'

const story = storiesOf('Content Section', module);

story.add(
  'with text',
  withInfo(`
      A content section.
    
      ~~~js
      <ContentSection />
      ~~~
    
    `)(() => <ContentSection />),
);
