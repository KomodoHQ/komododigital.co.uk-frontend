import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

storiesOf('Button', module)
  .add('with text', withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `)(() => <span>Hello Button</span>))