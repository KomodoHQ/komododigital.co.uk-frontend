import React from 'react';
import Index from '../../src/templates/index';
import renderer from 'react-test-renderer';
import GatsbyData from '../../gatsby-config';

test('Blog template is rendered', () => {
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

  const component = renderer.create(<Index {...hocProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
