import {  Center, Flex, Text ,Square,Box,Input } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react'
import {
  BsFolderFill,
  BsFillTagFill,
  BsCurrencyDollar,
  BsArrowRight
} from "react-icons/bs";
import {GrAddCircle} from 'react-icons/gr'
import { formatAMPM } from './Time';

const TopNav = () => {
    let project=true
//     let ref = useRef(null)

//     let Time=()=>{
//  ref.current = setInterval(() => {
//    formatAMPM(new Date());
//  }, 1000);
//    console.log(ref.current)   
//     } 

    // Time()
    // console.log(Time())

    // useEffect(()=>{
      // Time();
    // },[])
    
  // let r=Time()
  // console.log(Time);
    // console.log(Time())
  return (
    <Flex
      color="white"
      h="90px"
      ml="15%"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      p="10px 2px 10px 10px"
    >
      <Center w="20%">
        <Input placeholder="What have you done ?" border="none" />
      </Center>
      <Center w="23%"></Center>
      <Center flex="1">
        <Flex gap="3%" alignItems="center" justifyContent="center">
          {project ? (
            <BsFolderFill color="#7e6e85" size="20px" />
          ) : (
            <Text fontSize="md" color="blackAlpha.900">
              + Create a project
            </Text>
          )}

          <BsFillTagFill color="#7e6e85" size="20px" />
          <BsCurrencyDollar color="#7e6e85" size="20px" />
          <Input w="20%" border="none" placeholder={formatAMPM(new Date())} />
          <BsArrowRight color="#7e6e85" size="20px" />
          <Input w="15%" p="0" border="none" placeholder={formatAMPM(new Date())} />
          <GrAddCircle size="50px" color="#7e6e85" />
        </Flex>
      </Center>
    </Flex>
  );
}

export default TopNav
