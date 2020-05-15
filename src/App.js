import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SearchBar} from './components/SearchBar'
import { List } from './components/List'


function App() {
  return (
    <div className="App">
      <SearchBar/>
      
      <List/>
    </div>
  );
}

export default App;
