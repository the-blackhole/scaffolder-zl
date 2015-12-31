import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createHashHistory from 'history/lib/createHashHistory'
import rootReducer from '../reducers'

const history = createHashHistory()

export default function configureStore(initialState, routes) {
  return compose(
    reduxReactRouter({ routes, history }),
    applyMiddleware(thunk, promise)
  )(createStore)(rootReducer, initialState)
}
