import React from 'react'

export default class Text extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: false
    }
  }

  render (props) {
    const style = {
      color: this.state.selected ? 'black' : this.props.color,
      className: 'text'
    }
    /* return ce('p', {style, className: props.className}, props.text) */
    return <div onClick={this.toggle.bind(this)}
      className={style.className}
      style={{color: style.color}}> {this.props.text} </div>
  }

  toggle () {
    this.setState({
      selected: !this.state.selected
    })
  }
}
