import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import TitleText from '../../src/components/titletext'

storiesOf('TitleText', module).add(
  'with text',
  withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <TitleText>Click Here</TitleText>
      ~~~
    
    `)(() => <TitleText />),
);
