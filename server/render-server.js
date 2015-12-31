import express from 'express'

import render from './render'

let router = express.Router()

router.route('/')
  // .get((req, res, next) => {
  //   res.status(200).send({title: 'server is alive!'})
  // })
  .get((req, res, next) => {
    render({}, req)
    .then((html) => {
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(html);
    })
    .catch(next)
  })
  .post((req, res, next) => {
    render({}, req)
    .then((html) => {
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send(html);
    })
    .catch(next)
  })

export default router
