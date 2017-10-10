// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  ADD_MONTH_REQUEST,
  ADD_MONTH_SUCCESS,
  ADD_MONTH_FAILURE,
} from '../action/add-month'

const initialState = Immutable.fromJS({
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call',
})

const addMonthReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  console.log('addMonthReducer', action.type)
  switch (action.type) {
    case ADD_MONTH_REQUEST:
      return state.set('messageAsync', 'Loading...')
    case ADD_MONTH_SUCCESS:
      return state.set('messageAsync', action.payload)
    case ADD_MONTH_FAILURE:
      return state.set('messageAsync', 'No message received, please check your connection')
    default:
      return state
  }
}

export default addMonthReducer
