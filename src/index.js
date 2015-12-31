import 'babel-core/polyfill'
import 'isomorphic-fetch'
import React from 'react'
import ReactPerf from 'react-addons-perf'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'

import routes from './routes'
import configureStore from './store/configureStore'

const initialState = global.__init_state || {}
const store = configureStore(initialState, routes)

if (process.env.NODE_ENV !== 'production') {
  require('./api/mocks')
}

window.React = React
window.Perf = ReactPerf
injectTapEventPlugin()

render(
  <Provider store={ store }>
    <ReduxRouter />
  </Provider>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production') {
  const openDevTool = require('./utils/openDevTool')
  openDevTool(store)
}
