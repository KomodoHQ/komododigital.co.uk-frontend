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
      <VCard avatar="avatar.png" jobtitle="Job Title" name="Firstname Surname" email="story@vcard.com" />
      ~~~
    
    `)(() => <VCard avatar="avatar.png" jobtitle="Job Title" name="Firstname Surname" email="story@vcard.com" />),
);
