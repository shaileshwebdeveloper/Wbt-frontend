import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Flex w="30%" justifyContent={"space-between"} m="auto" mt="1rem" mb="1rem">
      <Link to="/">
        <Button
          w="200%"
          colorScheme="green"
          variant="outline"
          width="200px"
          h="60px"
        >
          Admin
        </Button>
      </Link>
      <Link to="/employees">
        <Button
          w="200%"
          colorScheme="green"
          variant="outline"
          width="200px"
          h="60px"
        >
          Employees
        </Button>
      </Link>
    </Flex>
  );
};
