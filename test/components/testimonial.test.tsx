import React from 'react';
import Testimonial from '../../src/components/testimonial';
import renderer from 'react-test-renderer';

test('Testimonial element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<Testimonial data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
