import React from 'react';
import Testimonial from '../../src/components/testimonial';
import renderer from 'react-test-renderer';

test('Testimonial element is rendered', () => {
  const component = renderer.create(<Testimonial/>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
