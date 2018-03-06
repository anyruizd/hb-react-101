import React, { Component } from 'react'
import Text from './Text.js'
import TextRetriever from './TextRetriever.js'
import randomColor from 'randomcolor'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.addCountry = this.addCountry.bind(this)
    this.state = {
      countries: props.data
    }
  }

  addCountry (countryName) {
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
      <React.Fragment>
        <TextRetriever onSubmit={this.addCountry} />
        {this.state.countries.map(({name, color}, index) => {
          return (
            <Text key={index} text={name} color={color} />
          )
        }
        )}
      </React.Fragment>
    )
  }
}
