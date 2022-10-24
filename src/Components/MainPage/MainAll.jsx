import React from 'react'
import Main from './Main';
import ReadyStart from "../StartPage/ReadyStart"
// import {Route, BrowserRouter, Routes} from "react-router-dom";
import SignInFooter from "../StartPage/SignInFooter"

const MainAll = () => {
  return (
    <>
      <Main />
      
      <div className='mt-10 md:mt-16'>
        <ReadyStart />
      </div>

      <SignInFooter/>
    </>
  );
}

export default MainAll
