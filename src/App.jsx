import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import Temp from './Temp';
import Footer from './Footer';
import Header from './Header';
function App() {
  return (
    <>
      <div className='Mobile_Containers'>
        <Header />
        <Temp />
        <Footer />
      </div>
    </>
  );
}

export default App;
