import React from 'react';
import StandardItem from '../../src/components/standarditem';
import renderer from 'react-test-renderer';

test('StandardItem element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<StandardItem imgsrc={{childImageSharp:{fixed: {width: 1, srcSet:'',src:'',height:1}}}} link="/About" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
