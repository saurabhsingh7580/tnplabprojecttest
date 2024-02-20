import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import SidebarMenu from './SidebarMenu'
import { Button } from 'react-bootstrap'

const Dashboard = () => {



const [data,setData] = useState("tnplab")
 useEffect(()=>{
  setData("hiiiiii")
 },[])

  return (
    <div>
        <Navbar/>
        <SidebarMenu/>
    </div>
  )
}

export default Dashboard