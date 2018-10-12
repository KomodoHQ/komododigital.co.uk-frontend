/**
 * This file uses CommonJS as opposed to ESNext import 
 * because gatsby-node utilises this, and as gatsby-node
 * is executed under the computers node environment and
 * not transpiled, we cant use ESNext.
 * 
 * This file is intended ONLY to be used with markdown
 * files with the extension `.md`.
 */
const path = require('path');

/**
 * This returns the basename of a markdown file 
 * without its extension
 */
exports.fileToSlug = (fileAbsolutePath) => {
    if (!fileAbsolutePath.endsWith('.md')) {
        throw new Error('Provided path does not end in the .md extension')
    }
    return path.basename(fileAbsolutePath).slice(0, -3);
};  