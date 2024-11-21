import React from "react";
import NewComp from "./Component/NewComp";
import './App.css';

class App extends React.Component{
  styles={
    fontstyles:"bold",
    color:"teal"
  };
  render(){
    return (
      <center><div classname="App">
        <h1 style={this.styles}>Welcome</h1>
        <NewComp/>
        </div></center>
    );
  }
}
    
export default App;