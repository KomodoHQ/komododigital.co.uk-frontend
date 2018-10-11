import { fileToSlug } from './file-to-slug';

export const findNodes = (keyToFind, props, valueToFind = null) => {
  if (typeof valueToFind === 'string') {
    return props.data.allMarkdownRemark.edges
      .filter((edge) => edge.node.frontmatter[keyToFind] === valueToFind)
      .map((edge) => {
        return {
          ...edge.node,
          ...edge.node.frontmatter,
          link: `${valueToFind}/${fileToSlug(edge.node.fileAbsolutePath)}`,
        };
      });
  } else {
    return props.data.allMarkdownRemark.edges.filter(
      (edge) => edge.node.fileAbsolutePath.includes(keyToFind),
    );
  }
};

export const findNode = (keyToFind, props) => {
  const elements = findNodes(keyToFind, props);
  return elements[0].node;
};
