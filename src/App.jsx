import React, { useEffect } from "react";
import "./App.css";
import Header from "./header/Header";
import { TgHook } from "./hooks/Telegram.jsx";

export default function App() {

  const { tg } = TgHook();

  useEffect(() => {
    tg.ready();
  }, []);


  return (
    <div>
      <Header/>
    </div>
  );
}
