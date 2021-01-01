import React, { useState } from "react"
import { useRecoilState } from "recoil";
import Board from "./board"
import Moves from "./moves"
import { calculateWinner } from '../../utils/calclateWinner'
import { History } from '../../types/interface'
import { stepNumber, historyItems, xIsNext } from '../../atom/index'

const Game: React.FC = () => {
  // Hooks
  const [history, setHistory] = useRecoilState<History[]>(historyItems)
  const [step, setStepNumber] = useRecoilState<number>(stepNumber);
  const [_xIsNext, setXIsNext] = useRecoilState<boolean>(xIsNext)

  const handleClick = (i: number) => {
    // 変数名かぶるのでアンスコ付きにする。
    const _history = history.slice(0, step + 1)
    const current = _history[_history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = _xIsNext ? "X" : "O";
    setHistory(_history.concat([{ squares: squares }]))
    setStepNumber(_history.length)
    setXIsNext(!_xIsNext)
  }

  const jumpTo = (step: number) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const current = history[step];
  const winner = calculateWinner(current.squares)
  let status;
  if (winner) {
    status = "Winner: " + winner
  } else {
    status = 'Next player: ' + (_xIsNext ? 'X' : 'O')
  }
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