import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import NavigationBar from '../../../src/components/navigationbar/'

const story = storiesOf('Navigation Bar', module);

story.add(
  'with text',
  withInfo(`
      Page header navigation bar
    
      ~~~js
      <NavigationBar />
      ~~~
    
    `)(() => <NavigationBar />),
);
