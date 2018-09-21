import React from 'react';
import TitleText from '../../src/components/titletext';
import renderer from 'react-test-renderer';

test('TitleText element is rendered', () => {
  const component = renderer.create(<TitleText />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
