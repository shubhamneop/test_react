import React ,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'max', age:28},
      {name:'demo', age:27},

    ]
  }
  switchNameHandler = (newName) => {
      // console.log('CLicked');
      // this.state.persons[0].name = 'shubham';
      this.setState({ persons: [
              {name:newName, age:28},
              {name:'Shubham', age:27},

          ]});
  }

  nameChangeHandle = (event) => {
      this.setState({ persons: [
              {name:'max', age:28},
              {name:event.target.value, age:27},

          ]});
  }

render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      }
  return (
    <div className="App">
      <h1>React</h1>
      <button
          style={style}
          onClick={() => this.switchNameHandler('Shubham!!')}>Switch name</button>
      <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
      click={this.switchNameHandler.bind(this,'Samrat')}>Data</Person>
      <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
      changed={this.nameChangeHandle}></Person>

    </div>
  );
  }

}

export default App;
