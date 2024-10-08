import React from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
