import React from 'react';
import Metric from '../../src/components/metric';
import renderer from 'react-test-renderer';

test('Metric element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<Metric data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
