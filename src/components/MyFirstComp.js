import React from 'react'
import Text from './Text.js'

export default function MyFirstComp () {
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
