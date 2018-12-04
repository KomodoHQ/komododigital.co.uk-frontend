import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import VCard from '../../../src/components/vcard'

const story = storiesOf('VCard', module);

story.add(
  'with text',
  withInfo(`
      A contact form vCard
    
      ~~~js
      <VCard person="Armin" />
      ~~~
    
    `)(() => <VCard person="Armin" />),
);
