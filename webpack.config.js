const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'src/index.html'),
        to: path.resolve(__dirname, 'dist/index.html'),
        toType: 'file',
      },
    ]),
  ],
};
