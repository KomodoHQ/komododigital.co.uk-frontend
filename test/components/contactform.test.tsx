import React from 'react';
import ContactForm from '../../src/components/contactform';
import renderer from 'react-test-renderer';

test('ContactForm element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<ContactForm data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
