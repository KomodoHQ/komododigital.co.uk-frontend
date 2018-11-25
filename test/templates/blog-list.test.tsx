import React from 'react';
import BlogList from '../../src/templates/blog-list';
import renderer from 'react-test-renderer';
import GatsbyData from '../../gatsby-config';

test('Blog template is rendered', () => {
  const hocProps = {
    posts: [
      {
        node: {
          slug: 'test',
          imagesource: 'https://www.komododigital.co.uk/static/media/logo.50a4b652.svg',
          title: 'test post',
        },
      },
    ],
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
      }

    },
  };

  const component = renderer.create(<BlogList {...hocProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
