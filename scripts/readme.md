# Scripts Folder

Contents of this folder should be one-off scripts, not directly related to development or source code. Currently, this is:

 - `cloudfront-invalidate.js` - This is a script used by CodeShip to invalidate our CloudFront distribution, which ensures after a deploy we see our updated website.
 - `jest-preprocess.js` - This is a script used by Jest to transpile our JSX before testing
 - `loadershim.js` - This is a script used by Jest to add a key testing element to our source