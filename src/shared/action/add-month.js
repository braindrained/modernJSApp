// @flow

import 'isomorphic-fetch'

import { createAction } from 'redux-actions'
import { getActivitiesRoute } from '../../shared/routes'

export const ADD_MONTH_REQUEST = 'ADD_MONTH_REQUEST'
export const ADD_MONTH_SUCCESS = 'ADD_MONTH_SUCCESS'
export const ADD_MONTH_FAILURE = 'ADD_MONTH_FAILURE'

export const addMonthRequest = createAction(ADD_MONTH_REQUEST)
export const addMnothSuccess = createAction(ADD_MONTH_SUCCESS)
export const addMnothFailure = createAction(ADD_MONTH_FAILURE)

// eslint-disable-next-line
export const addMonth = (object: ?Object) => (dispatch: Function) => {
  dispatch(addMonthRequest())
  return fetch('/ajax/addmonth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify(object),
  })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      if (!data.serverMessage) throw Error('No message received')
      dispatch(addMnothSuccess(data.serverMessage))
    })
    .catch(() => {
      dispatch(addMnothFailure())
    })
}

export const GET_ACTIVITIES_REQUEST = 'GET_ACTIVITIES_REQUEST'
export const GET_ACTIVITIES_SUCCESS = 'GET_ACTIVITIES_SUCCESS'
export const GET_ACTIVITIES_FAILURE = 'GET_ACTIVITIES_FAILURE'

export const getActivitiesRequest = createAction(GET_ACTIVITIES_REQUEST)
export const getActivitiesSuccess = createAction(GET_ACTIVITIES_SUCCESS)
export const getActivitiesFailure = createAction(GET_ACTIVITIES_FAILURE)

// eslint-disable-next-line
export const getActivities = (num: number) => (dispatch: Function) => {
  dispatch(getActivitiesRequest())
  return fetch(getActivitiesRoute(num), { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      if (!data.serverMessage) throw Error('No data received')
      dispatch(getActivitiesSuccess({ message: data.serverMessage, data: data.data }))
    })
    .catch(() => {
      dispatch(getActivitiesFailure())
    })
}
