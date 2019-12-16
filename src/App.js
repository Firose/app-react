import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import './App.css';
import LoginScreen from './components/LoginScreen/LoginScreen';
import layout from './components/Layout/Layout';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Layout/>
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
