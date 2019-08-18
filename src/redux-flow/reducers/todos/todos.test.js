'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import todos, { initialState } from './index'
import { ADD_TODO, TOGGLE_TODO } from './actions'

it('should todos be a function', () => {
  expect(todos).to.be.a('function')
})

it('should add a todo item', () => {
  const before = deepFreeze([])
  const action = deepFreeze({
    type: ADD_TODO,
    payload: { id: 0, text: 'hey' }
  })
  const after = [ { id: 0, text: 'hey', completed: false } ]
  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should add a new todo item', () => {
  const before = deepFreeze([
    { id: 0, text: 'hey', completed: false }
  ])

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

it('should return the latest state when action is unknown', () => {
  const before = deepFreeze([{ id: 0, text: 'hey', completed: true }])
  const action = deepFreeze({ type: 'ANYTHING' })
  const after = [ { id: 0, text: 'hey', completed: true } ]

  expect(todos(before, action)).to.be.deep.equal(after)
})

it('should return initialState state before is undefined', () => {
  const before = undefined
  const action = deepFreeze({})
  const after = initialState

  expect(todos(before, action)).to.be.deep.equal(after)
})
