import React,{Component} from 'react';

class Button extends Component {

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

    render(){
    return (
      <div className={"container-button " + this.props.class} >
      <button onClick={this.handleClick}>{this.props.name}</button> 
      </div>
    );
  }
  }
export default Button;