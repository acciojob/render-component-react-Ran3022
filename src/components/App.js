import React, {Component, useState} from "react";
import '../styles/App.css';
import TextComponent from './render';

const App = () => {
  return (
    <div id="main">
      <TextComponent/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));