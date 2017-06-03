import path from 'path'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from './webpack.config.babel'
import express from 'express'

const app = new express()
const port = 5050

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, err => {
  /* eslint-disable no-console */
  if (err) {
    console.error(err);
  } else {
    console.info(`🚧  Server is running on http://localhost:${port}/.`)
  }
  /* eslint-enable no-console */
})
