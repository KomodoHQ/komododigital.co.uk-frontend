import React from 'react';
import SeeMoreButton from '../../src/components/seemorebutton';
import renderer from 'react-test-renderer';

test('SeeMoreButton element is rendered', () => {
  const component = renderer.create(<SeeMoreButton title={'test'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
