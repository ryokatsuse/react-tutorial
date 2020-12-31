import React from 'react'
import { SquareType } from '../../types/interface'

interface SquareProps {
  value: SquareType
  onClick: () => void
  boardNumber: number
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  const handler = () => {
    onClick()
  }
  return (
    <button className="square" onClick={handler}>
      {value}
    </button>
  )
}

export default Square