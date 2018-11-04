import React from 'react';
import CaseStudy from '../../src/components/casestudy';
import renderer from 'react-test-renderer';

test('CaseStudy element is rendered', () => {
  const component = renderer.create(<CaseStudy subtitle={"Test"} title={"Test"} link={"Test"} image={""} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
