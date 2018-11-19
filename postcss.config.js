// in postcss.config.js
const postcssPresetEnv = require(`postcss-preset-env`);
const postcssEasyImport = require('postcss-easy-import');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = () => ({
  plugins: [
    postcssEasyImport(),
    postcssPresetEnv({
      stage: 0,
    }),
    postcssCustomMedia(),
  ],
})