const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      merge(config, {
        plugins: [
          new UglifyJSPlugin(),
        ],
      });
    }
  },
};
