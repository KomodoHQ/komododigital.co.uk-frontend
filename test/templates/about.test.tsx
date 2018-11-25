import React from 'react';
import About from '../../src/templates/about';
import renderer from 'react-test-renderer';
import GatsbyData from '../../gatsby-config';

test('About template is rendered', () => {

  const htmlAst = {
    type: 'element',
    tagName: 'span',
    properties: {},
    children: [
      {
        type: 'text',
        value: 'Lorem Ipsum is the industry standard typesetting text',
      },
    ],
  };

  const hocProps = {
    services: [],
    subtitle: 'subtitle',
    title: 'title',
    intro: htmlAst,
    approachIntro: htmlAst,
    servicesIntro: htmlAst,
    standardsIntro: htmlAst,
    contactsIntro: htmlAst,
    data: {
      site: GatsbyData,
      logo: {
        childImageSharp: {
          tracedSVG: "",
          width: "",
          height: "",
          src: "",
          srcSet: "",
          srcWebp: "",
          srcSetWebp: ""
        }
      },
      logo_inverted: {
        childImageSharp: {
          tracedSVG: "",
          width: "",
          height: "",
          src: "",
          srcSet: "",
          srcWebp: "",
          srcSetWebp: ""
        }
      }
    },
  };

  const component = renderer.create(<About {...hocProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
