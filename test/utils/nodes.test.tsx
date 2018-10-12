import { findNodes, findNode } from '../../src/utils/nodes';

const tree = {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: {
              title: 'sometitle',
              text: 'test text',
              group: 'search',
            },
            fileAbsolutePath: 'a/path/to/somefile.md',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'secondtitle',
              text: 'tested text',
            },
            fileAbsolutePath: 'a/path/to/anotherfile.md',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'thirdtitle',
              text: 'test text',
              group: 'search',
            },
            fileAbsolutePath: 'a/path/to/athird.md',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'fourthtitle',
              text: 'tested text',
              group: 'different group'
            },
            fileAbsolutePath: 'a/path/to/afourth.md',
          },
        },
      ],
    },
  },
};

test('Finding a single node in the document tree by fileAbsolutePath', () => {
  const found = findNode('somefile', tree);
  const expected = {
    ...tree.data.allMarkdownRemark.edges[0].node,
    ...tree.data.allMarkdownRemark.edges[0].node.frontmatter,
    link: 'somefile',
  };
  expect(found).toEqual(expected);
});

test('Not finding a single node in the document tree by fileAbsolutePath', () => {
  const found = findNode('testy', tree);
  const expected = null;
  expect(found).toEqual(expected);
});

test('Finding a group of node in the document tree by a given key:value in frontmatter', () => {
  const found = findNodes('group', tree, 'search');
  const expected = [
    {
      ...tree.data.allMarkdownRemark.edges[0].node,
      ...tree.data.allMarkdownRemark.edges[0].node.frontmatter,
      link: 'search/somefile',
    },
    {
      ...tree.data.allMarkdownRemark.edges[2].node,
      ...tree.data.allMarkdownRemark.edges[2].node.frontmatter,
      link: 'search/athird',
    },
  ];
  expect(found).toEqual(expected);
});

test('Not finding any nodes in the document tree by a given key:value in frontmatter', () => {
  const found = findNodes('group', tree, 'testy');
  const expected = [];
  expect(found).toEqual(expected);
});
