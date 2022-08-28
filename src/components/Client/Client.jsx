import { Button, Center, Flex, FormControl, FormLabel, Input, Text, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from 'react'
import BelowClient from "./BelowClient";

const Client = () => {
 const [inputext,setInputext]= useState("")
 let [client, setClient] = useState([]);

  const postData=(post)=>{
       axios.post("http://localhost:8080/client",post)
  }
  
  const getData=()=>{
    axios
      .get("http://localhost:8080/client")
      .then((res) => setClient(res.data));
  }

    const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <div
      style={{ backgroundColor: "#fef9f7", height: "100vh" }}
    >
      <>
        <Flex
          bg="white"
          h="60px"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
          p="15px 15px 10px 15px"
          mb="3%"
          justifyContent="space-between"
        >
          <Flex alignItems="center" justifyItem="center" gap="15px">
            <Center>
              <Text>Client</Text>
            </Center>
            <Center>
              <Input placeholder="Find index..." />
            </Center>
          </Flex>
          <Center>
            <Button colorScheme="pink" onClick={onOpen}>
              + New Client
            </Button>
          </Center>
        </Flex>
        <>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>New client</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Client name</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="client name"
                    value={inputext}
                    onChange={(e) => setInputext(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="pink"
                  mr={3}
                  onClick={() => {
                    postData({ client: inputext, id: Date.now() })
                     getData();
                  }}
                >
                  Submit
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
        <BelowClient getData={getData} client={client} />
      </>
    </div>
  );
}

export default Client



