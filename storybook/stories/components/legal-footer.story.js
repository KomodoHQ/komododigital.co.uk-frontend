import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import LegalFooter from '../../../src/components/legalfooter/'

const story = storiesOf('Legal Footer', module);

story.add(
  'with text',
  withInfo(`
      Legal and contact footer.
    
      ~~~js
      <LegalFooter />
      ~~~
    
    `)(() => <LegalFooter />),
);
