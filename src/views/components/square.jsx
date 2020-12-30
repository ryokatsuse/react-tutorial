import React from 'react'

function Square(props) {
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