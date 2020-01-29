import React from 'react'
import '../src/App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      userInput: ''
    }
  }

  handleChange = (val) => {
    this.setState({ userInput: val })
  }

  render() {
    return (
      <div className='App'>
        <input onChange={event => this.handleChange(event.target.value)} />
        <div>{this.state.userInput}</div>
      </div>
    )
  }
}

export default App