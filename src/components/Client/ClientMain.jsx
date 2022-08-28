import React from 'react'
import { Sidebar_1 } from '../Sidebar_Vivek/Sidebar_1'
import Client from './Client'

const ClientMain = () => {
  return (
    <div style={{display: 'flex'}}>
        <div>
            <Sidebar_1/>
        </div>
        <div style={{flex: 1}}>
            <Client/>
        </div>
    </div>
  )
}

export default ClientMain