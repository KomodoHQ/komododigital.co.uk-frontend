import React from 'react';
import Metric from '../../src/components/metric';
import renderer from 'react-test-renderer';

test('Metric element is rendered', () => {
  const component = renderer.create(<Metric value={1} metric={'Test'} description={'test'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
