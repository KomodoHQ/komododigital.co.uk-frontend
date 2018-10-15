import React from 'react';
import ContactSection from '../../src/components/contactsection';
import renderer from 'react-test-renderer';

test('ContactSection element is rendered', () => {
  const component = renderer.create(<ContactSection />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
