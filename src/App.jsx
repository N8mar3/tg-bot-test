import React, { useEffect } from "react";
import "./App.css";
import Header from "./header/Header";
import SubHeader from "./subHeader/SubHeader.tsx";

const tg = window.Telegram.WebApp;

export default function App() {

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Header/>
      <SubHeader/>
    </div>
  );
}
