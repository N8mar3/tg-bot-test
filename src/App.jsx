import React, { useEffect } from "react";
import "./App.css";
import Header from "./header/Header";
import SubHeader from "./subHeader/SubHeader";
import DateTimePicker from "./datePicker/DatePicker"
import Stack from '@mui/material/Stack';

const tg = window.Telegram.WebApp;

export default function App() {

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <Stack spacing={2}>
      <Header/>
      <SubHeader/>
      <DateTimePicker/>
    </Stack>
  );
}
