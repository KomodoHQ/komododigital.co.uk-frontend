import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ContactForm from '../../../src/components/contactform/'

const story = storiesOf('Contact Form', module);

story.add(
  'with text',
  withInfo(`
      A contact form.
    
      ~~~js
      <ContactForm />
      ~~~
    
    `)(() => <ContactForm />),
);
