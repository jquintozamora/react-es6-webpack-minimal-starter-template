import React, { Component } from 'react';
import Button from './../components/Button.jsx';
const Welcome = ({ name }) =>  <h1 > Hello {name} </h1> // Stateless/Pure component

export default class Counter extends Component {
  constructor(props) {
    super(props);
    let contInit = 10;
    this.state = {
        cont: contInit,
        message: contInit + " clicks left!"
    }
  }

  minus = () => {
    if (this.state.cont > 1) {
        this.setState({
            cont: --this.state.cont,
            message: this.state.cont + " clicks left!"
        });
    } else {
        this.setState({
            cont: 0,
            message: <Welcome name={'React lover!'} />
        });
    }
  }
  
  render() {
    return (
        <div className="rc-counter"> 
            <div className="rc-counter-text" >{this.state.message}</div>
            <Button text="Click here!" 
                    onClick={this.minus} />
        </div>
    );
  }
}