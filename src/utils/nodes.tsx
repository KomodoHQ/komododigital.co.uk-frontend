/**
 * The functions in here are used for object tree traversal to extract the correct
 * content to formulate pages.
 */
import { fileToSlug } from './file-to-slug';

interface Edge {
  node: {
    frontmatter: any;
    fileAbsolutePath: string;
  };
  link?: string;
  // As this object is spread from frontmatter with any number of additional keys,
  // we use this bad boy.
  [key: string]: any;
}

interface Tree {
  data: {
    allMarkdownRemark: {
      edges: Edge[];
    };
  };
}

/**
 * Find content within GraphQL queried Markdown tree data.
 *
 * This function allows us to resolve content appropriate to pages by traversing the object
 * `tree` for a given `keyToFind`.
 *
 * If `valueToFind` is supplied, will search tree `frontmatter` to ensure that the value
 * of `keyToFind` matches `valueToFind`.
 *
 * If `valueToFind` is not supplied, will search tree `fileAbsolutePath` to match `keyToFind`
 * inside of the filename.
 *
 * @example I want to search for a file named `index`. Use `findNodes("index", tree);
 * @example I want to search fo all files that are `case-studies`. These files have a `group`
 *          key with a value of `case-studies` inside their frontmatter.
 *          Use `findNodes("group", tree, "case-studies");
 *
 * @param keyToFind Key to find content.
 * @param tree Object tree to traverse to find the content.
 * @param valueToFind Optional.
 *                    Default `null` - will search inside `fileAbsolutePath` for `keyToFind`.
 *                    Otherwise, searches inside `frontmatter` for `keyToFind`
 */
export const findNodes = (
  keyToFind: string,
  tree: Tree,
  valueToFind: string | null = null,
): Edge[] => {
  if (typeof valueToFind === 'string') {
    return tree.data.allMarkdownRemark.edges
      .filter((edge) => edge.node.frontmatter[keyToFind] === valueToFind)
      .map((edge) => {
        return {
          ...edge.node,
          ...edge.node.frontmatter,
          link: `${valueToFind}/${fileToSlug(edge.node.fileAbsolutePath)}`,
        };
      });
  }

  return tree.data.allMarkdownRemark.edges
    .filter((edge) => edge.node.fileAbsolutePath.includes(keyToFind))
    .map((edge) => {
      return {
        ...edge.node,
        ...edge.node.frontmatter,
        link: `${fileToSlug(edge.node.fileAbsolutePath)}`,
      };
    });
};

/**
 * Find a single piece of content within GraphQL queried Markdown tree data.
 *
 * This function allows us to resolve content appropriate to a single page by traversing the object
 * `tree` for a given `keyToFind`. It will search tree `fileAbsolutePath` to match `keyToFind`
 * inside of the filename.
 *
 * @example I want to search for a file named `index`. Use `findNodes("index", tree);
 *
 * @param keyToFind Key to find content.
 * @param tree Object tree to traverse to find the content.
 */
export const findNode = (keyToFind: string, tree: Tree): Edge | null => {
  const elements = findNodes(keyToFind, tree);

  if (elements.length) {
    return elements[0];
  }

  return null;
};
