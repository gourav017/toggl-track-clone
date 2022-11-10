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
  Spacer,
} from "@chakra-ui/react";


import { useDispatch } from "react-redux";
import { EditTIMERApi, GetTIMERApi } from "../../store/timer/timer.action";
// import {
//   EditProductApi,
//   GetproductApi,
// } from "../../../store/productreducer/products.action";

const EditData = ({ id , project , stopat}) => {
  const [form, setform] = useState({
  project,stopat
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
    dispatch(EditTIMERApi(id, form)).then(() => dispatch(GetTIMERApi()));
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
          <ModalHeader>Edit your Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormLabel>TASK</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Task name"
                name="project"
                onChange={handleChange}
              />
              <br />
              <br />
              <Spacer />
              <FormLabel>Stop At</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Stop at"
                name="stopat"
                onChange={handleChange}
              />
              <Button
                type="submit"
                colorScheme="blue"
                mt={8}
                
                onClick={onClose}
              >Submit</Button>
            </form>
          </ModalBody>

          {/* <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditData;
