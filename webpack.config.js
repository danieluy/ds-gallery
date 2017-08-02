const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    ContextMenu: path.join(__dirname, '/src/ds-gallery/ContextMenu.js'),
    DsControls: path.join(__dirname, '/src/ds-gallery/DsControls.js'),
    DsGallery: path.join(__dirname, '/src/ds-gallery/DsGallery.js'),
    DsImage: path.join(__dirname, '/src/ds-gallery/DsImage.js'),
    DsRoll: path.join(__dirname, '/src/ds-gallery/DsRoll.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/npm-dist/'),
    library: 'DsGallery',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      // {
      //   test: /\.css$/,
      //   loader: 'ignore-loader'
      // },
      {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        ]
      },
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, "/src/ds-gallery/"),
        ],
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}