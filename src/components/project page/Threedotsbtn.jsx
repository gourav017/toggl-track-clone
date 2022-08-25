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

const Threedotsbtn = ({ id, editid }) => {
  const dispatch = useDispatch();

  const handledelete = (id) => {
    dispatch(DeleteproductApi(id)).then(() => dispatch(GetproductApi()));
  };

  const handleedit = (editid) => {};
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
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => handleedit(editid)}
        >
          edit
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default Threedotsbtn;
