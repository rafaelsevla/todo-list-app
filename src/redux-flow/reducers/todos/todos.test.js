'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import todos from './index'
import { ADD_TODO, TOGGLE_TODO } from './actions'

it('should add a todo item', () => {
  const before = deepFreeze([])
  const action = deepFreeze({
    type: ADD_TODO,
    payload: { id: 0, text: 'hey' }
  })
  const after = [{ id: 0, text: 'hey', completed: false }]
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should add a new todo item', () => {
  const before = deepFreeze([{ id: 0, text: 'hey', completed: false }])

  const action = deepFreeze({
    type: ADD_TODO,
    payload: { id: 1, text: 'ho' }
  })

  const after = [
    { id: 0, text: 'hey', completed: false },
    { id: 1, text: 'ho', completed: false }
  ]
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should toggle first todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'hey', completed: false },
    { id: 1, text: 'ho', completed: false }
  ])

  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: { id: 0 }
  })

  const after = [
    { id: 0, text: 'hey', completed: true },
    { id: 1, text: 'ho', completed: false }
  ]
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should toggle second todo', () => {
  const before = deepFreeze([
    { id: 0, text: 'hey', completed: true },
    { id: 1, text: 'ho', completed: false }
  ])

  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: { id: 1 }
  })

  const after = [
    { id: 0, text: 'hey', completed: true },
    { id: 1, text: 'ho', completed: true }
  ]
  expect(todos(before, action)).to.be.deep.equal(after)
})
