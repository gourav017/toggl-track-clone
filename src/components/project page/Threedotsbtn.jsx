import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Icon,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  DeleteproductApi,
  GetproductApi,
} from "../../store/productreducer/products.action";
import ProductForm from "./productsForm/ProductForm";
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

  let edit = true;

  return (
    <Popover>
      <PopoverTrigger>
        <Button>
          <Icon>
            <BsThreeDotsVertical />
          </Icon>
        </Button>
      </PopoverTrigger>
      <PopoverContent pt={10}>
        <PopoverArrow />
        <PopoverCloseButton />
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handledelete(id)}
        >
          delete
        </Button>
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
