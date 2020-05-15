import React from 'react';
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
