import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import SeeMoreButton from '../../../src/components/seemorebutton'

const story = storiesOf('See More Button', module);

story.add(
  'with text',
  withInfo(`
      A button to load more content
    
      ~~~js
      <SeeMoreButton />
      ~~~
    
    `)(() => <SeeMoreButton />),
);
