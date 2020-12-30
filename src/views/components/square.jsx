import React from 'react'

class Square extends React.Component {
  render() {
    const handler = () => {
      this.props.onClick()
    }
    return (
      <button className="square" onClick={handler}>
        {this.props.value}
      </button>
    )
  }
}

export default Square