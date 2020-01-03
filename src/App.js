import React from 'react';
import './App.css';
import Header from './component/header'
import Headline from './component/headline';
function App() {
  return (
    <div className="App">
      <Header/>
      <Headline header={'Test Header'} desc={'desc'}/>
    </div>
  );
}

export default App;
