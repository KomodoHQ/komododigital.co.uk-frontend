import React from 'react';
import SeeMoreButton from '../../src/components/seemorebutton';
import renderer from 'react-test-renderer';

test('SeeMoreButton element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<SeeMoreButton data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
