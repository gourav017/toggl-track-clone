import { Flex, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { loginAPI } from '../store/auth/auth.actions'
import "./Login.css"
import Navbar from './navbar/Navbar'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    console.log(data);
    const url="Enter your url";
    loginAPI(data)
    // axios.post(url,data).then((res)=>{
    //     console.log(res)
    // }).catch((err)=>{
    //     console.log(err.message)
    // })
}
  return (
    <div className='login'>
      <Navbar/>
        <div className="loginbackground">
          <Text className='text1'>Log in to your account</Text> 
          <Text className='text2'>Let's get tracking!</Text>
          <div className='loginmainbox'>
            <div className='loginbox2'>
                <Flex className='buttons' >
                    <Link className='anchor1' to="/login"><Flex><img src="https://img.icons8.com/fluency/30/000000/google-logo.png" alt="img"/><button> Signup via Google</button></Flex> </Link>
                    <Link className='anchor1' to="/login"> <Flex><img src="https://img.icons8.com/ios-glyphs/30/000000/mac-client.png" alt="img"/><button>Signup via Apple</button></Flex>  </Link>
                </Flex>
            </div>
            <br/>
            <br />
            <div className='loginbox3'>
              <form onSubmit={handleSubmit(onSubmit)} >
              <label>Email</label>
              <br />
              <input className='logininput' type="text" placeholder='Email' {...register("email", { required: true })}/>
              {errors.email && <span>This field is required</span>}
              <br />
              <br />
              <label>Password</label>
              <br />
              <input className='logininput' type="text" placeholder='Password' {...register("password", { required: true })} />
              {errors.password && <span>This field is required</span>}
              <br />
              <br />
              <Link to="/signup">Forgot Password?</Link>
              <br/>
              <br />
              <button className='loginbutton'>Login</button>
              </form>
            </div>
          </div>
            <br />
            <br />
          <div className='loginbox4'>
            <p>Don't have an account ?</p>
            <br />
            <Link to="/signup"><button className='signupforfree'>Signup for free</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Login