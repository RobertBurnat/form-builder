import React, { Component } from 'react';
import InputsList from './components/InputsList/InputsList';



class App extends Component {

  render() {
    const styles = {
      margin: '20px'
    }
    return (
      <div>
        <h1 style={styles}>Form Builder</h1>
        <InputsList />
      </div>
    );
  }
}

export default App;
