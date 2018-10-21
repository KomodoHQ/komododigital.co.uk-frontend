import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import BlogPost from '../../../src/components/blogpost/'

const story = storiesOf('Blog Post', module);

story.add(
  'with text',
  withInfo(`
      A link to a blog post.
    
      ~~~js
      <BlogPost>Click Here</BlogPost>
      ~~~
    
    `)(() => <BlogPost />),
);

story.add(
    'with image',
    withInfo(`
        A link to a blog post with an image prop.
      
        ~~~js
        <BlogPost>Click Here</BlogPost>
        ~~~
      
      `)(() => <BlogPost title={"title"} image={"img.jpg"} />),
  );
  