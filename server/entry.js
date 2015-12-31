import express from 'express'
import config from 'config'

import app from './app'

const server = require(config.get('protocol') || 'http').createServer()
const application = express()

app.set('port', process.env.PORT || config.get('port') || 3000)

application.use(app)

server.on('request', application)
server.listen(
  app.get('port'),
  () => console.log('server start listening on ' + app.get('port'))
)
