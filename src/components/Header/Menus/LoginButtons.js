// imports from react.
import React from 'react';
import { Link } from "react-router-dom";

// imports from externals libraries.
import { Button, Stack } from "@chakra-ui/react";

import { ONG_COLORS } from '../../../consts/const';

export default function LoginButtons() {
  return (
    <Stack direction='row' >
      <Link to="/login">
        <Button colorScheme="whiteAlpha"
          variant="outline"
          color={ONG_COLORS.BLUE}
          fontFamily={'Truculenta'}
          size="sm"
          fontSize={["14px", "20px"]}
        >
          Log In
        </Button>
      </Link>

      <Link to="/register">
        <Button colorScheme="whiteAlpha"
          variant="ghost"
          color={ONG_COLORS.BLUE}
          fontFamily={'Truculenta'}
          size="sm"
          fontSize={["14px", "20px"]}
        >
          Registrarme
        </Button>
      </Link>
    </Stack>
  )
}
