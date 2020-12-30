import React from 'react'
import Square from './square'

const boardNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function Board(props) {
  return (
    <div className="board-row">
      { boardNumbers.map((boardNumber, i) => {
          return (
            <Square
              key={i}
              value={props.squares[i]}
              onClick={() => props.onClick(i)}
              boardNumber={boardNumber} />
            )
        })
      }
    </div>
  )
}

export default Board