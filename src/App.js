import './App.css';
import React, { useEffect } from 'react';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, []);
  
  const onClose = () => {
    tg.close();
  };

  return (
    <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> 
        <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet"/>
        <h1 className="headerText" >Алёна Усенко</h1>
        <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
