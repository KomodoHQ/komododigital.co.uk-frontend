import React from 'react';
import Vcard from '../../src/components/vcard';
import renderer from 'react-test-renderer';

test('Vcard element is rendered', () => {
  const component = renderer.create(
    <Vcard person="Armin" avatar={{
      childImageSharp: {
        fixed: {
          height: 29,
          src: "",
          srcSet: "",
          srcSetWebp: "",
          srcWebp: "",
          tracedSVG: "",
          width: 170
        }
      }
    }} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
