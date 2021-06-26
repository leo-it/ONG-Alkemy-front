import { Box, Text } from "@chakra-ui/react";

import React from "react";

const TextContact = () => {
  return (
    <div>
      <Box boxShadow="md" p="6" rounded="md" bg="white" height="445px">
        <Text fontSize="3xl" p="2">
          {" "}
          ¿ Que es lo que hacemos ?
        </Text>{" "}
        <Text fontSize="md">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry 's standard dummy text ever
          since the 1500 s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.It was popularised in the 1960 s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.Lorem Ipsum has been th{" "}
        </Text>{" "}
      </Box>{" "}
    </div>
  );
};

export default TextContact;
