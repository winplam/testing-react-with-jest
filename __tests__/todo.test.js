import Todo from '../app/todo'
import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

test('TodoComponent renders the text inside it', () => {
  const todo = { id: 1, done: false, name: 'Buy Milk' }
  const wrapper = mount(
    <Todo todo={todo}/>
  )
  const p = wrapper.find('.toggle-todo')
  expect(p.text()).toBe('Buy Milk')
})

test('TodoComponent calls doneChange when todo is clicked', () => {
  const todo = { id: 1, done: false, name: 'Buy Milk' }
  const doneChange = jest.fn()
  const wrapper = mount(
    <Todo todo={todo} doneChange={doneChange}/>
  )
  const p = wrapper.find('.toggle-todo')
  p.simulate('click')
  expect(doneChange).toBeCalledWith(1)
})
