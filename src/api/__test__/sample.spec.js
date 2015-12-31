import fetchMock from 'fetch-mock'

import { apiServer } from '../'
import sampleApi from '../sample'

beforeEach(() => {
  fetchMock.isMocking = false
})

describe('Sample API', () => {
  it('should be able to get a Promise', () => {
    fetchMock.mock(apiServer + '/sample', 'GET', 200)
    sampleApi.load().then.should.be.a.Function
  })
  it('should be able to get the sample list', done => {
    fetchMock.mock(apiServer + '/sample', 'GET', [{}])
    sampleApi.load()
      .then(response => {
        response.should.be.Existed
        response.length.should.be.above(0)
        done()
      })
  })

  it('should be able to handle error status', done => {
    fetchMock.mock(apiServer + '/sample', 'GET', 404)
    sampleApi.load()
      .catch(err => {
        err.should.be.Existed
        err.message.should.be.equal('Bad response from server')
        done()
      })
  })
})
