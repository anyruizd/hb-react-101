import React from 'react'
import {render} from 'react-dom'

const app = document.querySelector('#app')

function MyFirstComp () {
  /* return ce('div', null,
    ce(Text, {text: 'Peru', color: 'red'}),
    ce(Text, {text: 'Colombia', color: 'green'}),
    ce(Text, {text: 'Argentina', color: 'blue'})
  ) */
  return (
    <div>
      <Text text='Peru' color='red' />
      <Text text='Colombia' color='green' />
      <Text text='Argentina' color='blue' />
    </div>
  )
}
render(<MyFirstComp />, app)

function Text (props) {
  const style = {
    color: props.color,
    className: 'text'
  }
  /* return ce('p', {style, className: props.className}, props.text) */
  return <p className='text' style={style} >{props.text}</p>
}
