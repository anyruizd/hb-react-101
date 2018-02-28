import React from 'react'
import Text from './Text.js'

export default function App (props) {
  const data = props.data
  console.log(data)
  return (
    <div>
      {data.map((name, color) => {
        return <Text key={name + color} content={name} color={color} />
      })}
    </div>
  )
}
