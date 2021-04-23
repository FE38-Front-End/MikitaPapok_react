import React from 'react'
import {render} from 'react-dom'
import App from './app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'

render(app,document.getElementById('root'))