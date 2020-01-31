import React from 'react'

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import CounterButton from '../components/CounterButton'

describe('CounterButton', () => {
  let wrapper
  beforeEach(() => {
    const mockColor = 'red'
    wrapper = shallow(<CounterButton color={mockColor}/>)
  })
  
  it('expect to render CounterButton component', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('correctly increase the counter', () => {
    wrapper.find('[id="counter"]').simulate('click')
    expect(wrapper.state()).toEqual({ count: 2 })
    expect(wrapper.props().color).toEqual('red')
  });
})
