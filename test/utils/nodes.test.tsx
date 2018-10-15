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
            fileAbsolutePath: 'a/path/to/src/content/somefile/index.md',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'secondtitle',
              text: 'tested text',
            },
            fileAbsolutePath: 'a/path/to/src/content/anotherfile/index.md',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'thirdtitle',
              text: 'test text',
              group: 'search',
            },
            fileAbsolutePath: 'a/path/to/src/content/athird/index.md',
          },
        },
        {
          node: {
            frontmatter: {
              title: 'fourthtitle',
              text: 'tested text',
              group: 'different group',
            },
            fileAbsolutePath: 'a/path/to/src/content/somefile/content.md',
          },
        },
      ],
    },
  },
};

test('Finding a single node in the document tree by fileAbsolutePath - without link', () => {
  const found = findNode('somefile/content', tree);
  const expected = {
    ...tree.data.allMarkdownRemark.edges[3].node,
    ...tree.data.allMarkdownRemark.edges[3].node.frontmatter,
    link: null,
  };
  expect(found).toEqual(expected);
});

test('Finding a single node in the document tree by fileAbsolutePath - with link', () => {
  const found = findNode('somefile/index', tree);
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

test('Finding a group of nodes in the document tree by a given key:value in frontmatter', () => {
  const found = findNodes('group', tree, 'search');
  const expected = [
    {
      ...tree.data.allMarkdownRemark.edges[0].node,
      ...tree.data.allMarkdownRemark.edges[0].node.frontmatter,
      link: 'somefile',
    },
    {
      ...tree.data.allMarkdownRemark.edges[2].node,
      ...tree.data.allMarkdownRemark.edges[2].node.frontmatter,
      link: 'athird',
    },
  ];
  expect(found).toEqual(expected);
});

test('Not finding any nodes in the document tree by a given key:value in frontmatter', () => {
  const found = findNodes('group', tree, 'testy');
  const expected = [];
  expect(found).toEqual(expected);
});
