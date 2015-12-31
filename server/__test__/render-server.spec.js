/* global before, beforeEach, afterEach, describe, it, should */
import request from 'supertest'
import should from 'should'
import app from '../base-server'

import renderServer from '../render-server'

app.use('/', renderServer)

describe('Get server status', function () {
  it('should be able to get a json', function (done) {
    request(app)
      .get('/')
      .expect(200, {title: 'server is alive!'}, done)
  })
})

describe('POST for application html', function () {
  it('should be able to post a json', function (done) {
    request(app)
      .post('/')
      .expect('Content-Type', /text\/html/)
      .expect(function(res) {
        should(res.text).be.exist
        res.text.should.be.containEql('<!doctype html>')
        res.text.should.be.containEql('id="content"')
      })
      .expect(200)
      .end(done)
  })
})
