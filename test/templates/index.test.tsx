import React from 'react';
import Index from '../../src/templates/index';
import renderer from 'react-test-renderer';
import GatsbyData from '../../gatsby-config';

test('Home template is rendered', () => {

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
    caseStudies: [],
    insights: [],
    subtitle: 'subtitle',
    title: 'title',
    intro: htmlAst,
    aboutUsIntro: htmlAst,
    approachIntro: htmlAst,
    caseStudiesIntro: htmlAst,
    clientPortfoliosIntro: htmlAst,
    insightsIntro: htmlAst,
    contactsIntro: htmlAst,
    data: {
      site: GatsbyData,
    },
  };

  const component = renderer.create(<Index {...hocProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
