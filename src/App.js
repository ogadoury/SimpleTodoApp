import React, { Component } from 'react';
import './App.css';
import { Form } from './form';

class App extends Component {
  render() {
    return (
      <div className="app-body"> 
        <h1>Simple Todo App</h1>
        <Form />
      </div>
    );
  }
}

export default App;
