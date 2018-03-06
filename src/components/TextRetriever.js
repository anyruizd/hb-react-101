import React, { Component } from 'react'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler (event) {
    this.setState({
      value: event.target.value
    })
  }

  onSubmitHandler (event) {
    event.preventDefault()
    this.props.onSubmit(this.state.value)
  }
  render () {
    return (
      <form className='text-retriever' onSubmit={this.onSubmitHandler}>
        <input type='text' value={this.state.value} onChange={this.onChangeHandler} />
        <button type='submit'> Add </button>
      </form>
    )
  }
}
