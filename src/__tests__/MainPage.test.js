import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import MainPage from '../components/MainPage'

describe('MainPage', () => {
  let wrapper
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps }/>)
  })

  it('should render without crashing', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should filter robots correctly 1', () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      robots: [{
        id: 2,
        name: 'Michael', 
        username: 'Mike',
        email: 'mike@example.com'
      }],
      searchField: 'Mi',
      isPending: false
    }
    const filteredRobots = [{
      id: 2,
      name: 'Michael', 
      username: 'Mike',
      email: 'mike@example.com'
    }]
    const wrapper2 = shallow(<MainPage { ...mockProps2 }/>)
    expect(wrapper2.instance().filteredRobots()).toEqual(filteredRobots)
  })

  it('should filter robots correctly 2', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      robots: [{
        id: 3,
        name: 'Michael', 
        username: 'Mike',
        email: 'mike@example.com'
      }],
      searchField: 'q',
      isPending: false
    }
    const filteredRobots = []
    const wrapper3 = shallow(<MainPage { ...mockProps3 }/>)
    expect(wrapper3.instance().filteredRobots()).toEqual(filteredRobots)
  })

  it('should render Loading component when pending is true', () => {
    const mockProps4 = {
      onRequestRobots: jest.fn(),
      onSearchChange: jest.fn(),
      robots: [{
        id: 4,
        name: 'Michael', 
        username: 'Mike',
        email: 'mike@example.com'
      }],
      searchField: 'q',
      isPending: true
    }
    const wrapper4 = shallow(<MainPage { ...mockProps4 }/>)

    expect(wrapper4.instance().props.isPending).toEqual(true)
    expect(wrapper4.find('h1').length).toEqual(1)
  });

  it('should render CardList component when pending is false', () => {
    expect(wrapper.instance().props.isPending).toEqual(false)
    expect(wrapper.find('CardList').length).toEqual(1)
  });
})

