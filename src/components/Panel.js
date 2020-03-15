import React,{Component} from 'react';
import Button from './Button';

class Panel extends Component {

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

    render(){
    return (
      <div className="container-panel">
      <div >
       <Button name="AC" clickHandler={this.handleClick} />
       <Button name="+/-" clickHandler={this.handleClick}/>
       <Button name="%" clickHandler={this.handleClick}/>
       <Button name="/"clickHandler={this.handleClick} class ="orange"/>
      </div>
      <div >
      <Button name="7" clickHandler={this.handleClick}/>
      <Button name="8"clickHandler={this.handleClick} />
      <Button name="9" clickHandler={this.handleClick}/>
      <Button name="X" clickHandler={this.handleClick} class ="orange" />
     </div>
     <div >
     <Button name="4" clickHandler={this.handleClick}/>
     <Button name="5" clickHandler={this.handleClick}/>
     <Button name="6" clickHandler={this.handleClick} />
     <Button name="-" clickHandler={this.handleClick} class ="orange"/>
    </div>
    <div >
    <Button name="1" clickHandler={this.handleClick}/>
    <Button name="2" clickHandler={this.handleClick}/>
    <Button name="3" clickHandler={this.handleClick}/>
    <Button name="+" clickHandler={this.handleClick} class ="orange" />
   </div>
   <div >
   <Button name="0" clickHandler={this.handleClick} class ="wide" />
   <Button name="," clickHandler={this.handleClick} />
   <Button name="=" clickHandler={this.handleClick} class ="orange"/>
  </div>
  </div>
    );
  }
  }
export default Panel;