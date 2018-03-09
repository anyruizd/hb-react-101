import React from 'react'
import './style.scss'
export default class Text extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      selected: true
    }
  }

  render (props) {
    const style = {
      color: this.state.selected ? this.props.color : '',
      className: 'text',
      selectedFlag: this.state.selected ? 'selected' : 'no-selected'
    }
    /* return ce('p', {style, className: props.className}, props.text) */
    return <p onClick={this.toggle}
      className={`${style.className} ${style.selectedFlag}`}
      style={{color: style.color}}
    > {this.props.content} </p>
  }

  toggle () {
    this.setState({
      selected: !this.state.selected
    })
  }
}
