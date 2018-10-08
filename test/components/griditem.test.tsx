import React from 'react';
import GridItem from '../../src/components/griditem';
import renderer from 'react-test-renderer';

test('GridItem element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<GridItem data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
