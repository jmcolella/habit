const path = require('path');

module.exports = {
  components: 'src/**/*.tsx',
  sections: [
    {
      name: 'Atoms',
      components: 'src/atoms/**/*.tsx',
    }
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/Wrapper')
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    }
  },
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json').parse
};