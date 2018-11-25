import React from 'react';
import Blog from '../../src/templates/blog';
import renderer from 'react-test-renderer';
import GatsbyData from '../../gatsby-config';

test('Blog template is rendered', () => {
  const hocProps = {
    imagesource: 'https://www.komododigital.co.uk/static/media/logo.50a4b652.svg',
    html: '<p>Test</p>',
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

  const component = renderer.create(<Blog {...hocProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
