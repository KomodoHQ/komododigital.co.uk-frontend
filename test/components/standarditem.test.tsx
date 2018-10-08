import React from 'react';
import StandardItem from '../../src/components/standarditem';
import renderer from 'react-test-renderer';

test('StandardItem element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<StandardItem data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
