import React from 'react'
import MainAll from './Components/MainPage/MainAll';
import StartAll from './Components/StartPage/StartAll';
import SignIn from "./Components/StartPage/SignIn"
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartAll />}/>
        <Route path="main" element={<MainAll/>}/>
        <Route path="signin" element={ <SignIn/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;