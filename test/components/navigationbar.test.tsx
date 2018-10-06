import React from 'react';
import NavigationBar from '../../src/components/navigationbar';
import renderer from 'react-test-renderer';

test('NavigationBar element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<NavigationBar data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
