import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Layout from '../../src/components/layout.tsx'
import GatsbyData from '../../gatsby-config';

storiesOf('Layout', module).add(
  'with text',
  withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `)(() => {
      let data = { site: GatsbyData };
      return <Layout data={data}/>
    }),
);
