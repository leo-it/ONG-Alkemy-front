import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoadingComponent from "../LoadingComponent";
import "./styles.css";

import UseAxios from "./UseAxios";

const CardTestimonials = () => {
  const { testimonials } = UseAxios();
  return (
    <>
      {testimonials ? (
        testimonials.map((data) => (
          <Link to={`/testimonios/${data.id}`} key={data.id}>
            <Flex
              shadow="2xl"
              align="center"
              justify={{
                base: "center",
                md: "space-around",
                xl: "space-between",
              }}
              direction={{ base: "column-reverse", md: "row" }}
              wrap="no-wrap"
              minH="70vh"
              px={8}
              mb={16}
            >
              <Stack
                spacing={4}
                w={{ base: "80%", md: "40%" }}
                align={["center", "center", "flex-start", "flex-start"]}
              >
                <Heading
                  as="h1"
                  size="xl"
                  fontWeight="bold"
                  color="primary.800"
                  textAlign={["center", "center", "left", "left"]}
                >
                  {data.name}
                </Heading>
                <Heading
                  className="content"
                  as="h2"
                  size="md"
                  color="primary.800"
                  opacity="0.8"
                  fontWeight="normal"
                  lineHeight={1.5}
                  textAlign={["center", "center", "left", "left"]}
                >
                  {data.content}
                </Heading>

                <Text
                  fontSize="xs"
                  mt={2}
                  textAlign="center"
                  color="primary.800"
                  opacity="0.6"
                >
                  Seguir leyendo
                </Text>
              </Stack>
              <Box
                w={{ base: "80%", sm: "60%", md: "50%" }}
                mb={{ base: 12, md: 0 }}
              >
                <Image src={data.image} size="100%" rounded="1rem" shadow="2xl" />
              </Box>
            </Flex>
          </Link>
        ))
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

export default CardTestimonials;
