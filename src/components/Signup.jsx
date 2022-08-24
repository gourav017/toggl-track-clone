import React from 'react'
import "./Signup.css";
import { Link } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Input } from '@chakra-ui/input';
import Navbar from './navbar/Navbar';

const Signup = () => {
  return (
    <div className="signup" >
        <Navbar/>
        <div>
            <Link to="/toggletrack"> <img src="toggletrack.png" alt="toggletrack" /> </Link>
        </div>
        <Stack className='signupbox1'>
        <Text fontSize='5xl'><b>Sign up for a <span style={{color:'#e57cd8'}} >free</span>  Toggl Track account</b></Text>
        <Text fontSize='2xl'>All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required.</Text>
        <Text fontSize='2xl'>Upgrade at the end of the trial or continue using Track for free forever.</Text>
        <Text fontSize='2xl'>Already have an account? <Link to="/login" style={{color:'#e57cd8'}}>Log in Here</Link></Text>
        </Stack>
        <Box className='signupbox2'>
            <Box className='signupbox3'>
                <Flex gap="10px" paddingTop="20px" textAlign="center">
                    <Link className='anchor' to="/signup"><Flex><img src="https://img.icons8.com/fluency/30/000000/google-logo.png" alt="img"/><button> Signup via Google</button></Flex> </Link>
                    <Link className='anchor' to="/signup"> <Flex><img src="https://img.icons8.com/ios-glyphs/30/000000/mac-client.png" alt="img"/><button>Signup via Apple</button></Flex>  </Link>
                </Flex>
                <br/>
                <div className='line'>
                    <Flex>
                    <hr className='line1'/>
                    <p>or</p>
                    <hr className='line1'/>
                    </Flex>
                </div>
                <br/>
                <Box>
                    <form>
                    <label htmlFor="">UserName</label>
                    <br />
                    <input type="text" className='inputbox'  placeholder="Username"/>
                    <br />
                    <br />
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" className='inputbox'  placeholder="Email"/>
                    <br />
                    <br />
                    <label htmlFor="">Password</label>
                    <br />
                    <input type="password" className='inputbox'  placeholder="password"/>
                    <br />
                    <br />
                    <Input type="submit" className='submit' style={{width:"500px", backgroundColor:"#e57cd8",height:"50px", borderRadius:"20px"}} value="Signup via email"  placeholder="password"/>
                    <br />
                    <br />
                    <p >By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</p>
                    </form>
                    <br />
                    
                </Box>
            </Box>
            <Box>
                <img src="capterra.png" alt="capterra" />
            </Box>
        </Box>
        <div style={{backgroundColor:"#e57cd8", height:"50px", color:"black"}}>
            <div>© 2022 Toggl. All rights reserved.</div>
        </div>
    </div>
  )
}

export default Signup