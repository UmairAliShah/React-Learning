import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import JSXComponent from './components/JSXComponent';
import PropsWithFunctionalComponents from './components/PropsWithFunctionalComponents';
import PropsWithClassComponent from './components/PropsWithClassComponents';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
        <JSXComponent />
        <PropsWithFunctionalComponents name="Syed Umair Ali"/>
        <PropsWithFunctionalComponents name="Umair Shah">
          <p>This is the children props</p>
        </PropsWithFunctionalComponents>

        <PropsWithClassComponent name="Umair"/>
      </div>
      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Hello Umair!
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}


// function App() {
  
// }

export default App;
