module.exports = {
  entry: "./src/js/index",
  output: {
    path: __dirname + "/dist/js",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}
