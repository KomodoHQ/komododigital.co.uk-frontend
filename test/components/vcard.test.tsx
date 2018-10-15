import React from 'react';
import Vcard from '../../src/components/vcard';
import renderer from 'react-test-renderer';

test('Vcard element is rendered', () => {
  const component = renderer.create(
    <Vcard avatar={'test'} name={'test'} jobtitle={'test'} email={'test'} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
