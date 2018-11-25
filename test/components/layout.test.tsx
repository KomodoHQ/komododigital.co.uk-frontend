import React from 'react';
import Layout from '../../src/components/layout';
import renderer from 'react-test-renderer';
import GatsbyData from '../../gatsby-config';

test('Layout element is rendered', () => {
  let data = { site: GatsbyData,
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
  };
  const component = renderer.create(<Layout data={data}></Layout>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
