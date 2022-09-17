import React from 'react'
import NavbarProduct from '../../components/project page/NavbarProduct'
import Products from '../../components/project page/Products'
import { Sidebar_1 } from '../../components/Sidebar_Vivek/Sidebar_1'

const Temp = () => {
  return (
    <div style={{display: 'flex'}}>
        <div>
            <Sidebar_1/>
        </div>
        <div style={{flex: 1}}>
            <NavbarProduct/>
            <Products/>
        </div>
    </div>
  )
}

export default Temp