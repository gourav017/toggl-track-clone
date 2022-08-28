import React from 'react'
import { Route,Routes } from 'react-router-dom'
import NavbarProduct from '../../components/project page/NavbarProduct'
import Products from '../../components/project page/Products'
import { Sidebar_1 } from '../../components/Sidebar_Vivek/Sidebar_1'
import SidebarAllRoutes from '../../routes/SidebarAllRoutes'
import Temp from './Temp'

const SidebarApp = () => {
  return (
    <div style={{display: 'flex'}}>

       
            <Sidebar_1/>
            <SidebarAllRoutes/>
            
        
        
        
        
    </div>
  )
}

export default SidebarApp