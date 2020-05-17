import React from 'react';
import HomeImage from '../../assets/Home_Header2.png';
import Navbar from '../../component/Navbar/navbar';
import Navhead from '../../component/Navheader/navheader';
import UpperContent from '../../component/UpperContent/upperContent'

function Home() {
    return (
      <div>
        <Navbar />
        <Navhead />
        <img src={HomeImage} style={{width: '100%'}} />
        <UpperContent />
      </div>
    );
  }
  
  export default Home;