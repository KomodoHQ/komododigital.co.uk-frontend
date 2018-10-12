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
    caseStudies: [],
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
    },
  };

  const component = renderer.create(<CaseStudy {...hocProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
