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
      standard_abstract: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_adobecc: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_android: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_angular: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_apple: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_aws: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_azure: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_chai: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_codeception: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_cyberessentials: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_html5: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_invision: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_istqb: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_java: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_jest: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_node: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_php: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_react: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_selenium: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_sketch: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_swift: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } },
      standard_xamarin: { childImageSharp: { fixed: {width: 1, srcSet:'',src:'',height:1} } }
    },
  };

  const component = renderer.create(<About {...hocProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
