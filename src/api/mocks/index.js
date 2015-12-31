import fetchMock from 'fetch-mock'

import { apiServer } from '../'
import sample from './sample.json'

fetchMock
  .mock(apiServer + '/sample', 'GET', sample)
