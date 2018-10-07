import React from 'react';
import ContentSection from '../../src/components/contentsection';
import renderer from 'react-test-renderer';

test('ContentSection element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<ContentSection data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
