import React from 'react';
import Services from '../../src/components/services';
import renderer from 'react-test-renderer';

test('Services element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<Services data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
