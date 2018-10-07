import React from 'react';
import QuadGrid from '../../src/components/quadgrid';
import renderer from 'react-test-renderer';

test('QuadGrid element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<QuadGrid data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
