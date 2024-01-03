const path = require('path')
const NodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')

const mode = process.env.NODE_ENV

module.exports = {
  mode,
  entry: './src/index.ts',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  externals: [NodeExternals()],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@common': path.resolve(__dirname, 'src/common')
    }
  },
  optimization: {
    // Node.js 中无需压缩代码，可以关闭以提高构建性能
    minimize: false
  },
  node: {
    __dirname: true,
    __filename: true
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new NodemonPlugin({
      watch: path.resolve(__dirname, 'src'),
      ext: 'ts'
    })
  ]
}
