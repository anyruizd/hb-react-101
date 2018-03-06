import React from 'react'
import Text from './Text.js'

export default function App (props) {
  const data = props.data
  return (
    <div>
      {data.map(({name, color}, index) => {
        return (
          <Text key={index} text={name} color={color} />
        )
      }
      )}
    </div>
  )
}
