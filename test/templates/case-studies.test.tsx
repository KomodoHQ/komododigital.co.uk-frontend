import React from 'react';
import CaseStudies from '../../src/templates/case-studies';
import renderer from 'react-test-renderer';
import GatsbyData from '../../gatsby-config';

test('Case Studies template is rendered', () => {

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
    caseStudies: [],
    contactsIntro: htmlAst,
    data: {
      site: GatsbyData,
      logo: {
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
      },
      logo_inverted: {
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
      }

    },
  };

  const component = renderer.create(<CaseStudies {...hocProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
