/**
 * This file uses CommonJS as opposed to ESNext import 
 * because gatsby-node utilises this, and as gatsby-node
 * is executed under the computers node environment and
 * not transpiled, we cant use ESNext.
 * 
 * This file is intended ONLY to be used with markdown
 * files with the extension `.md`.
 */

/**
 * This is a sensible seperator from which to split paths to content
 * Theres probably a better way to do this, but it works
 */
const base_dir = '/src/content/';

/**
 * This returns the basename of a markdown file 
 * without its extension
 */
exports.fileToSlug = (fileAbsolutePath) => {
    if (!fileAbsolutePath.endsWith('index.md')) {
        return null;
    }

    // Split the path into everything from the root of the content directory.
    // Get index 1 (the path to the actual file)
    const pathParts = fileAbsolutePath.split(base_dir);

    if (pathParts.length !== 2) {
        throw new Error('Provided path does not match expected structure')
    }

    // Strip the `/index.md` off
    return pathParts[1].slice(0, -9);
};  