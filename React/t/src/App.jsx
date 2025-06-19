import { useState } from "react";
import TitleInput from "./COMPONENETS/title_input";
import ClearInterval from "./COMPONENETS/clear_interval";
import SetTimer from "./COMPONENETS/settimer_clean";
import "./App.css";

function App() {
  return (
    <>
      <TitleInput />
      <ClearInterval />
      <SetTimer />
    </>
  );
}

export default App;
