import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Center,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { DeleteTIMERApi, GetTIMERApi } from "../../store/timer/timer.action";
import EditData from "./EditData";
// import {
//   DeleteproductApi,
//   GetproductApi,
// } from "../../store/productreducer/products.action";
// import ProductForm from "./productsForm/ProductForm";
// import EditdataForm from "./productsForm/EditdataForm";

const Threedotsbtn = ({id , project ,stopat}) => {
  const dispatch = useDispatch();

  const handledelete = (id) => {
    console.log(id);
    dispatch(DeleteTIMERApi(id)).then(() => dispatch(GetTIMERApi()));
  };

  // let edit = true;

  return (
    <Popover>
      <PopoverTrigger>
        <Center>
          <BsThreeDotsVertical />
        </Center>
      </PopoverTrigger>
      <PopoverContent
        width="10rem"
        paddingLeft={3}
        paddingRight={3}
        paddingBottom={3}
        pt={10}
        mb={10}
      >
        <PopoverArrow />
        <PopoverCloseButton />
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handledelete(id)}
        >
          Delete
        </Button>
        <br />
        <EditData
          id={id}
        project={project}
        stopat={stopat}
        />
      </PopoverContent>
    </Popover>
  );
};

export default Threedotsbtn;
