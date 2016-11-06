import React, { Component } from 'react';
import Logo from './../components/Logo.jsx'; //Component with props but no state
import Counter from './../components/Counter.jsx';

export default class App extends Component {
    render() {
        return (
          <div className="app-container">
            <Logo />
            <Counter />             
          </div>
        );
    }
}