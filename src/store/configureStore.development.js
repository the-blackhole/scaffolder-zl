import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import { persistState } from 'redux-devtools'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createHashHistory from 'history/lib/createHashHistory'
import rootReducer from '../reducers'
import DevTools from '../utils/DevTools'

const history = createHashHistory()

export default function configureStore(initialState, routes) {
  const store = compose(
    reduxReactRouter({ routes, history }),
    applyMiddleware(thunk, promise),
    DevTools.instrument(),
    persistState(getDebugSessionKey())
  )(createStore)(rootReducer, initialState)

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    )
  }

  return store
}

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}
