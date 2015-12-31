import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'

import sample from './sample'

const pageDataReducer = combineReducers({
  sample
})

const sharedDataReducer = combineReducers({
})

const rootReducer = combineReducers({
  page: pageDataReducer,
  shared: sharedDataReducer,
  router: routerStateReducer
})

export default rootReducer
