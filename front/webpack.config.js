const path = require('path')
const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.css?/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          url: false
        }
      }
    ]
  }
]

module.exports = {
  target: 'web',
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: __dirname,
    port: 4989
  }
}
