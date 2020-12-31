import React from 'react'
import { SquareType } from '../../types/interface'

interface SquareProps {
  value: SquareType
  onClick: () => void
  boardNumber: number
}

function Square(props: SquareProps) {
  const handler = () => {
    props.onClick()
  }
  return (
    <button className="square" onClick={handler}>
      {props.value}
    </button>
  )
}

export default Square