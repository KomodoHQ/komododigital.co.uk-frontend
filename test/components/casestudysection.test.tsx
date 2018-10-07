import React from 'react';
import CaseStudySection from '../../src/components/casestudysection';
import renderer from 'react-test-renderer';

test('CaseStudySection element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<CaseStudySection data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
