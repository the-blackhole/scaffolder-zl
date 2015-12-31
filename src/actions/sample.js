import { createAction } from 'redux-actions'
import api from '../api/sample'

export const LOAD = 'SAMPLE_LOAD'

export const load = createAction(LOAD, () => api.load())
