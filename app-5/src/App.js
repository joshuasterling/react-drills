import React from 'react';
import ImgComponent from './Components/ImgComponent'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <ImgComponent url="https://i.pinimg.com/originals/b4/5f/11/b45f116cd952eede0d35c22405c33cd5.jpg"  />
      </div>
    )
  }
}

export default App;
