import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Footer from '../../../src/components/footer/'

const story = storiesOf('Footer', module);

story.add(
  'with text',
  withInfo(`
      A page footer.
    
      ~~~js
      <Footer />
      ~~~
    
    `)(() => <Footer />),
);
