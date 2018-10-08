import React from 'react';
import Vcard from '../../src/components/vcard';
import renderer from 'react-test-renderer';

test('Vcard element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<Vcard data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
