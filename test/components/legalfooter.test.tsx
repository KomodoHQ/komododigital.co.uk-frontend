import React from 'react';
import LegalFooter from '../../src/components/legalfooter';
import renderer from 'react-test-renderer';

test('LegalFooter element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<LegalFooter data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
