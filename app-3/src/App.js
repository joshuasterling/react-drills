import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      filterString: ''
    };
  }

  handleChange(value) {
    this.setState({ filterString: value });
  }

  render() {
    let foodsToDisplay = this.state.foods.filter((element, index) => {
      return element.includes(this.state.filterString);
    })
    .map((element, index) => {
    return <h2 key={index}>{element}</h2>;
    });

    return (
    <div className='App'>
      <input onChange={event => this.handleChange(event.target.value)} type='text' />
      {foodsToDisplay}
    </div>
    );
  }
}

export default App