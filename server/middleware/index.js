const history = require('connect-history-api-fallback')
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

module.exports = function(app) {
  app.use(history())

  if (process.env.NODE_ENV === 'development') {
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const config = require('../../build/webpack.dev.conf')
    const webpack = require('webpack')
    const compiler = webpack(config)
    app.use(webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    }))
  } else {
    app.use(express.static(path.join(__dirname, '/dist')))
  }

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
}
