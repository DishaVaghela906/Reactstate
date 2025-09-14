import React from 'react';
import './App.css';
import NewComp from './Components/NewComp';

class App extends React.Component{

  styles={
    fontstyle: "bold",
    color: "teal"
  }
  render(){
    return(
      <div className="App">
        <h1 style={this.styles}>Hello, World!</h1>
        <NewComp />
      </div>
    );
  }
}

export default App;
