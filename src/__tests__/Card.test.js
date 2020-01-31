import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Card from '../components/Card'

it('expect to render Card component', () => {
  const wrapper = shallow(<Card />)
  expect(toJson(wrapper)).toMatchSnapshot()
});