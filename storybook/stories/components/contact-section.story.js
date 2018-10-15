import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ContactSection from '../../../src/components/contactsection/'
import VCard from '../../../src/components/vcard/'
import ContactForm from '../../../src/components/contactform/'

const story = storiesOf('Contact Section', module);

story.add(
  'with text',
  withInfo(`
      A contact form description section.
    
      ~~~js
      <ContactSection />
      ~~~
    
    `)(() => <ContactSection title="Contact Section"><VCard /><VCard /><ContactForm /></ContactSection>),
);
