import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from '../constants';
import * as actions from '../actions'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockStore = configureMockStore([thunkMiddleware])

describe('actions', () => {

  it('should create an action to search robots', () => {
    const text = 'Michael'
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    }

    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })

  it('should handle requesting robots API', async () => {
    const store = mockStore()
    const action = store.getActions()
    console.log(action)
    const expectedAction = [
      { type: REQUEST_ROBOTS_PENDING },
      { type: REQUEST_ROBOTS_SUCCESS, payload: { todos: 'do something' } },
      { type: REQUEST_ROBOTS_FAILED, payload: new Error('REQUEST_ROBOTS_FAILED') },
    ]

    store.dispatch(actions.requestRobots())
    expect(action[0]).toEqual(expectedAction[0])
  })
})