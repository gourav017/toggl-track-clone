import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormLabel,
  Input,
  Box,
  Spacer,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import { useDispatch } from "react-redux";
import {
  EditProductApi,
  GetproductApi,
} from "../../../store/productreducer/products.action";

const EditdataForm = ({
  id,
  product_name,
  client,
  time,
  Billable_rate,
}) => {
  const [form, setform] = useState({
    product_name,
    client,
    time,
    Billable_rate,
  });
 
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    dispatch(EditProductApi(id,form)).then(()=>dispatch(GetproductApi()))
  };

  return (
    <>
      <Button onClick={onOpen} bg="pink.600">
        edit
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormLabel>NAME</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Project name"
                name="product_name"
                onChange={handleChange}
              />
              <br />
              <br />
              <Spacer />
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem mt={15}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        CLIENT
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Input
                      ref={initialRef}
                      placeholder="No client"
                      name="client"
                      onChange={handleChange}
                    />
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={15}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        TEMPLATE
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Input
                      ref={initialRef}
                      placeholder="No template"
                      name="templete"
                      onChange={handleChange}
                    />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem mt={15}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ESTIMATES & BILLING OPTIONS
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Input
                      ref={initialRef}
                      placeholder="HOURLY RATE"
                      name="Billable_rate"
                      onChange={handleChange}
                    />
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem mt={15}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Time estimate
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Input
                      ref={initialRef}
                      placeholder="time"
                      name="time"
                      onChange={handleChange}
                    />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <input
                type="submit"
                colorScheme="blue"
                mr={3}
                onClick={onClose}
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditdataForm;
