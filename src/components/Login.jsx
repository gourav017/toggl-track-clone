import { Text } from '@chakra-ui/react'
import React from 'react'
import "./Login.css"
import Navbar from './navbar/Navbar'
const Login = () => {
  return (
    <div className='login'>
      <Navbar/>
        <div className="loginbackground">
          <Text className='text1'>Log in to your account</Text> 
          <Text className='text2'>Let's get tracking!</Text>
          <div className='loginmainbox'>

          </div>
        </div>
    </div>
  )
}

export default Login