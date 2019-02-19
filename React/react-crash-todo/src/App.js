import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {
  state= {
    todos : [
      {
        title: 'Take out the trash',
        id: 1,
        completed: false
      },
      {
        title: 'Dinner with GirlFriend',
        id: 2,
        completed: false
      },
      {
        title: 'Meeting with Friend',
        id: 3,
        completed: false
      },
      
    ]
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
