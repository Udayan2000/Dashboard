import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./Header";
const MainLayout = () => {
  return (
    <>
    <Header/>
    <div className=''>{Outlet}</div>
    </>
  )
}

export default MainLayout

