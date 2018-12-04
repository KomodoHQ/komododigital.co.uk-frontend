import React from 'react';
import CaseStudy from '../../src/templates/case-study';
import renderer from 'react-test-renderer';
import GatsbyData from '../../gatsby-config';

test('Case Study template is rendered', () => {

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
    caseStudies: [
      {
        htmlAst: htmlAst,
        link: "case-studies/start-up",
        coverimage: {
          childImageSharp: {
            fluid: {
              height: 29,
              src: "",
              srcSet: "",
              srcSetWebp: "",
              srcWebp: "",
              tracedSVG: "",
              width: 170,
              aspectRatio: 1,
              sizes: ""
            }
          }
        },
        csimage: {
          childImageSharp: {
            fluid: {
              height: 29,
              src: "",
              srcSet: "",
              srcSetWebp: "",
              srcWebp: "",
              tracedSVG: "",
              width: 170,
              aspectRatio: 1,
              sizes: ""
            }
          }
        },
        key: "study.title",
        subtitle:"study.subtitle",
        title:"study.title"
      }
    ],
    metrics: [],
    subtitle: 'subtitle',
    title: 'title',
    intro: htmlAst,
    metricsIntro: htmlAst,
    processTitle: 'title',
    process: htmlAst,
    caseStudiesIntro: htmlAst,
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

  const component = renderer.create(<CaseStudy {...hocProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
