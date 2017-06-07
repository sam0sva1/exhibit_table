import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore()

const showState = () => console.log('State', store.getState())
showState()
store.subscribe(showState)

render(
  <Root store={store}/>,
  document.getElementById('root')
)
