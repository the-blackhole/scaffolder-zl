import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { reduxReactRouter } from 'redux-router/server'

import createHistory from 'history/lib/createMemoryHistory'
import rootReducer from '../reducers'

export default function configureStore(initialState, routes) {
  return compose(
    applyMiddleware(thunk, promise),
    reduxReactRouter({ routes, createHistory })
  )(createStore)(rootReducer, initialState)
}
