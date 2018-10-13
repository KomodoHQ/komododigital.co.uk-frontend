import React from 'react';
import ContentSection from '../../src/components/contentsection';
import renderer from 'react-test-renderer';

test('ContentSection element is rendered', () => {
  const component = renderer.create(
    <ContentSection title={'Test'} subtitle={'Testy'}>
      <p>Test</p>
    </ContentSection>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
