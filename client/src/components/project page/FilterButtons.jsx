import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  GetproductApi,
  SearchbyQueryApi,
} from "../../store/productreducer/products.action";

const FilterButtons = ({ btnname }) => {
  const [query, setquery] = useState("");

  const dispatch = useDispatch();

  const handlesearch = () => {};

  useEffect(() => {
    dispatch(SearchbyQueryApi()).then(() => dispatch(GetproductApi()));
  }, []);

  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button>{btnname}</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>
            <Input
              placeholder="....."
              value={query}
              onChange={(e) => setquery(e.target.value)}
            />
            <Button onClick={handlesearch}>search</Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FilterButtons;
