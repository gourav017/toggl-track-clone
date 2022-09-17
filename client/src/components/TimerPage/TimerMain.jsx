import React from 'react'
import { Sidebar_1 } from '../Sidebar_Vivek/Sidebar_1'
import TopNav from './TopNav'

const TimerMain = () => {
  return (
    <div style={{display: 'flex'}}>
        <div>
            <Sidebar_1/>
        </div>
        <div style={{flex: 1}}>
            <TopNav/>
        </div>
    </div>
  )
}

export default TimerMain