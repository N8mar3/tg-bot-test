import React, { useEffect } from "react";
import "./App.css";
import Header from "./header/Header";

const tg = window.Telegram.WebApp;

export default function App() {

  useEffect(() => {
    tg.ready();
  }, []);


  return (
    <div>
      <Header/>
      
    </div>
  );
}
