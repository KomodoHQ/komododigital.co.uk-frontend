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
      },
      client_cop: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_digitalbarriers: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_elanders: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_gichd: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_htl: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_isg: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_itv: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_legrand: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_spacegroup: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_newcastleuni: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_northumbriapolice: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_northumbriauni: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_onward: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_orchard: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_streetstream: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      client_thingco: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } }

    },
  };

  const component = renderer.create(<Index {...hocProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
