import React from 'react';
import QuadGrid from '../../src/components/quadgrid';
import renderer from 'react-test-renderer';

test('QuadGrid element is rendered', () => {
  const children = <div></div>;
  const component = renderer.create(<QuadGrid>{children}</QuadGrid>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
