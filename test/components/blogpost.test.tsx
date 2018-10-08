import React from 'react';
import BlogPost from '../../src/components/blogpost';
import renderer from 'react-test-renderer';

test('BlogPost element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<BlogPost data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
