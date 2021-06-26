// imports from react.
import React from 'react';

// import from externals libraries.
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const UpdateButton = () => {
  return (
    <IconButton isRound="true" colorScheme="blue" size="sm" icon={<EditIcon />}/>
  );
}

export default UpdateButton;
