import React from 'react';
import ContactSection from '../../src/components/contactsection';
import renderer from 'react-test-renderer';

test('ContactSection element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<ContactSection data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
