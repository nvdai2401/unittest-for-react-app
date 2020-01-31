import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from '../constants';

import * as reducers from '../reducers';

describe('searchRobots reduccer', () => {
  const initialStateSearch = {
    searchField: ''
  }
  it('should return initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch)
  })

  it('should handle CHANGE_SEARCHFIELD action', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCHFIELD, payload: 'abc'
    })).toEqual({ searchField: 'abc' })
  })
})

describe('requestRobots reduccer', () => {
  const initialStateRobots = {
    robots: [],
    isPending: true
  }
  it('should return initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
  })

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    })).toEqual({ robots: [], isPending: true })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    const mockRobots = [
      {
        id: 2,
        name: 'Michael', 
        username: 'Mike',
        email: 'mike@example.com'
      }
    ]
    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: mockRobots
    })).toEqual({ robots: mockRobots, isPending: false })
  })
  
  
  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    const mockError = new Error('REQUEST_ROBOTS_FAILED')

    expect(reducers.requestRobots(initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: mockError
    })).toEqual({ robots: [], isPending: true, error: mockError })
  })
})