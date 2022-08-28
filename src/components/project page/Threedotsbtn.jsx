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
import {
  DeleteproductApi,
  GetproductApi,
} from "../../store/productreducer/products.action";
// import ProductForm from "./productsForm/ProductForm";
import EditdataForm from "./productsForm/EditdataForm";

const Threedotsbtn = ({
  id,
  editid,
  product_name,
  client,
  time,
  billable_rate,
}) => {
  const dispatch = useDispatch();

  const handledelete = (id) => {
    dispatch(DeleteproductApi(id)).then(() => dispatch(GetproductApi()));
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
        <EditdataForm
          id={editid}
          product_name={product_name}
          client={client}
          time={time}
          billable_rate={billable_rate}
        />
      </PopoverContent>
    </Popover>
  );
};

export default Threedotsbtn;
