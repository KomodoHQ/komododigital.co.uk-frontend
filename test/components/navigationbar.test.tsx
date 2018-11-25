import React from 'react';
import NavigationBar from '../../src/components/navigationbar';
import renderer from 'react-test-renderer';

test('NavigationBar element is rendered', () => {
  const data = {
  };
  const logo = {
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
  const component = renderer.create(<NavigationBar data={data} logo={logo} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
