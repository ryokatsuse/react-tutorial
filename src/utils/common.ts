import { SquareType } from '../types/interface'

export const calculateWinner = (squares: Array<SquareType>) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export const hasResultWinner = (winner: SquareType, _xIsNext: boolean) => {
  if (winner) {
    return `Winner: ${winner}`
  } else {
    return `Next player: ${(_xIsNext ? 'X' : 'O')}`
  }
}

export const immutableSquaresData = (
  squares: SquareType[],
  _xIsNext: boolean,
  i: number
) =>
  squares.map((square, index) => {
    if(i === index) {
      return _xIsNext ? 'X' : 'O'
    }
    return square
  })