import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from "../src/App/Layout/MainLayout";
import Dashbord from './App/View/Dashboard/Index';
import Home from './App/View/Home/Index';
// import Googlegeminieffect from './App/View/About/Googlegeminieffect';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
       <Route path="/" element={<Dashbord/>}/>
       <Route path="/home" element={<Home/>}/>
       {/* <Route path="/googlegeminieffect" element={<Googlegeminieffect/>}/> */}
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

