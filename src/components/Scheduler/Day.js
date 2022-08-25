import React from 'react'

export const Day = ({day}) => {
  return (
    <div>
      {day.format()}
    </div>
  )
}


