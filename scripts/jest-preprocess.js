// jest-preprocess.js
const babelOptions = {
  presets: ['@babel/react', '@babel/env'],
  plugins: ['babel-plugin-remove-graphql-queries', '@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-class-properties'],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
