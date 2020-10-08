import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

login = () => {

}
function App() {
  return (
    <div className="App">
      <button onClick={this.login}>Login</button>
      <Home />
    </div>
  );
}

export default App;
