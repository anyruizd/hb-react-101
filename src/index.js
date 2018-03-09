import React from 'react'
import {render} from 'react-dom'
import App from './App.js'
import countries from './data/countries.json'
const app = document.querySelector('#app')

render(<App data={countries} />, app)
