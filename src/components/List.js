import React from 'react'
import Text from './../components/Text.js'

export default function List ({data}) {
  return (
    <ul>
      {data.map(({name, color}, index) => {
        return (
          <li key={name + color}>
            <Text content={name} color={color} />
          </li>
        )
      })
      }
    </ul>
  )
}
