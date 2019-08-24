'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './app'
import reducer from 'reducers'

const initialState = {
  todos: [
    {
      text: 'auto',
      id: '123',
      completed: false
    }
  ],
  address: {
    address: 'rua do batman',
    city: 'Gotham',
    state: 'DC',
    code: '080180101',
    district: 'Waynes',
    status: 1
  }
}

const store = createStore(reducer, initialState)
const renderState = () => {
  console.log('state', store.getState())
}
store.subscribe(renderState)
renderState()

const renderApp = NextApp => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
