import React, { Component, Fragment } from 'react'
import { Menu } from './components'
import {Home, Add} from './pages'
import randomColor from 'randomcolor'
import {HashRouter as Router, Route} from 'react-router-dom'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.updateData = this.updateData.bind(this)
    this.state = {
      countries: props.data
    }
  }

  updateData (countryName) {
    this.setState((prevState) => {
      return {
        countries: [
          ...prevState.countries,
          {name: countryName, color: randomColor()}
        ]
      }
    })
  }

  render () {
    return (
      <Router>
        <Fragment>
          <Menu />
          <Route exact path='/'
            render={() => <Home data={this.state.countries} />} />
          <Route exact path='/add'
            render={() => <Add updateData={this.updateData} />} />
        </Fragment>
      </Router>
    )
  }
}
