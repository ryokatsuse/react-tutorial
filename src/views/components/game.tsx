import React from "react"
import { useRecoilState } from "recoil"
import Board from "./board"
import Moves from "./moves"
import {
  calculateWinner,
  hasResultWinner,
  immutableSquaresData
} from '../../utils/common'
import { History } from '../../types/interface'
import { stepNumber, historyItems, xIsNext } from '../../atom/index'

const Game: React.FC = () => {
  // Recoil
  const [history, setHistory] = useRecoilState<History[]>(historyItems)
  const [step, setStepNumber] = useRecoilState<number>(stepNumber)
  const [_xIsNext, setXIsNext] = useRecoilState<boolean>(xIsNext)

  const handleClick = (i: number) => {
    const _squares = history[step]?.squares
    if (calculateWinner(_squares) || _squares[i]) {
      return
    }
    const squares = immutableSquaresData(_squares, _xIsNext, i)
    const newHistory = [...history, { squares }]

    setHistory(newHistory)
    setStepNumber(history.length)
    setXIsNext(!_xIsNext)
  }

  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const current = history[step]
  const winner = calculateWinner(current.squares)
  
  const status = hasResultWinner(winner, _xIsNext)
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <Moves history={history} jumpTo={jumpTo} />
      </div>
    </div>
  )
}

export default Game