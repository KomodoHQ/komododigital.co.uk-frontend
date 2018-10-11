const path = require('path');

exports.fileToSlug = (fileAbsolutePath) => {
    return path.basename(fileAbsolutePath).slice(0, -3);
};  