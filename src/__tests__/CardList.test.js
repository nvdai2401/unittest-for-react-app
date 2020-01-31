import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import CardList from '../components/CardList'

it('expect to render CardList component', () => {
  const mockRobots = [
    {
      id: 2,
      name: 'Michael', 
      username: 'Mike',
      email: 'mike@example.com'
    }
  ]

  const wrapper = shallow(<CardList robots={mockRobots} />)
  expect(toJson(wrapper)).toMatchSnapshot()
})