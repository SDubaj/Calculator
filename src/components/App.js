import React,{Component} from 'react';
import './App.css';
import Display from './Display';
import Panel from './Panel';
import calculate from './Calculate';

class App extends Component {
  state = {
    total: 0,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    console.log(buttonName);
    this.setState (calculate(this.state, buttonName));
  };

  handleEqual = () => {
     
  }
  render(){
    console.log(this.state.operation + " next:" + this.state.next + " total:" + this.state.total);
  return (
    <div className="container">
      <Display total={this.state.next || this.state.total || "0"}/>
      <Panel clickHandler={this.handleClick}/>

    </div>
  );
}
}

export default App;
