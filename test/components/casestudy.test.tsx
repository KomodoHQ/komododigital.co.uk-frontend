import React from 'react';
import CaseStudy from '../../src/components/casestudy';
import renderer from 'react-test-renderer';

test('CaseStudy element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<CaseStudy data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
