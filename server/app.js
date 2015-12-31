import path from 'path'
import express from 'express'
import morgan from 'morgan'

import logger from './logger'
import app from './base-server'
import renderServer from './render-server'

app.use('/assets', express.static(path.join(__dirname, '../dist/assets')))
app.use('/', renderServer)

// error handlers

// catch 404 and forwarding to error handler
app.use((err, req, res, next) => {
  err = err || new Error('Not Found')
  !res.statusCode && res.status(404)
  next(err)
})

// development error handler
// will print stacktrace
if (process.env.NODE_ENV === 'production') {
  app
  .use(morgan('combined', {
    skip: (req, res) => {
      return res.statusCode < 400
    },
    stream: logger(path.join(__dirname, '/error.log'))
  }))
  .use(morgan('combined', {
    skip: (req, res) => {
      return res.statusCode >= 400
    },
    stream: logger(path.join(__dirname, '/access.log'))
  }))
} else {
  app
  .use((err, req, res, next) => {
    next(err)
  })
  .use(morgan('dev'))
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  let code
  if (err) {
    code = err.code || 500
  } else if (req.errors) {
    code = (req.errors && req.errors.length) ? Math.max(req.errors.map((error) => {
      return error.code
    })) : req.errors.code
  } else {
    return next()
  }
  res.status(code || res.statusCode || 500).send({
    errors: req.errors
  })

  next(err)
})

export default app
