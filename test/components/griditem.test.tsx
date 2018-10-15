import React from 'react';
import GridItem from '../../src/components/griditem';
import renderer from 'react-test-renderer';

test('GridItem element is rendered', () => {
  const title = "title";
  const image =  "https://picsum.photos/100/?random";
  const children = <p></p>;
  const component = renderer.create(<GridItem title={title} image={image}>{children}</GridItem>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
