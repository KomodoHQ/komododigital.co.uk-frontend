import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import BlogSummaryView from '../../../src/components/blogsummaryview.tsx'

const data = {
  title: 'Test Post',
  imageSource: '',
  date: '1970/01/01 00:00:00'
}

storiesOf('BlogSummaryView', module).add(
  'with text',
  withInfo(`
      description or documentation about my component, supports markdown
    
      ~~~js
      <Button>Click Here</Button>
      ~~~
    
    `)(() => <BlogSummaryView data={data} /> ),
);
