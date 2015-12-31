import { handleActions } from 'redux-actions'
import { LOAD } from '../actions/sample'

const SampleReducer = handleActions({
  [LOAD]: (state = [], action) => [...state, ...action.payload]
}, [])

export default SampleReducer
