import React from 'react'

class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }
  render() {
    const handler = () => {
      this.setState({value: 'X'})
    }
    return (
      <button className="square" onClick={handler}>
        {this.state.value}
      </button>
    )
  }
}

export default Square