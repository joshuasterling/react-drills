import React from 'react';
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      userName: '',
      password: ''
    }
  }

  handleChangeName = (val) => {
    this.setState({ userName: val})
  }

  handleChangePassword = (val) => {
    this.setState({ password: val })
  }

  handleAlert = () => {
    alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
  }
  
  render() {
    return (
      <div className='App'>
        <input type='text' onChange={event => this.handleChangeName(event.target.value)} />
        <input type='text' onChange={event => this.handleChangePassword(event.target.value)} />
        <button onClick={this.handleAlert}>Login</button>
      </div>
    )
  }
}

export default App;
