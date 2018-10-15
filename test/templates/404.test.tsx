import React from 'react';
import FourOhFour from '../../src/templates/404';
import renderer from 'react-test-renderer';
import GatsbyData from '../../gatsby-config';

test('404 template is rendered', () => {
  const hocProps = {
    htmlAst: {
      type: 'element',
      tagName: 'span',
      properties: {},
      children: [
        {
          type: 'text',
          value: 'Komodo Digital',
        },
      ],
    },
    data: {
      site: GatsbyData,
    },
  };

  const component = renderer.create(<FourOhFour {...hocProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
