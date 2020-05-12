import React from 'react';
import './App.css';
import Navbar from './component/Navbar/navbar';
import Navhead from './component/Navheader/navheader';
//import myImage from '../public/assets/Home_Header.jpeg';
import myImage from './assets/Home_Header.jpeg'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navhead />
      <img src={myImage} />
    </div>
  );
}

export default App;
