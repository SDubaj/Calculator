import React,{Component} from 'react';

class Display extends Component {
    render(){
    return (
      <div className="container-display">
      {this.props.total}
      </div>
    );
  }
  }
export default Display;