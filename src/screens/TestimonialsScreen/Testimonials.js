import React, { Fragment } from "react";
import {
  Center,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import CardTestimonials from "../../components/TestimonialsCards/index";
import Footer from "../../components/FooterComponent/Footer";
import Header from "../../components/Header/Header";

const Testimonials = () => {
  return (
    <Fragment>
      <Header />
      <SimpleGrid minChildWidth="400px" spacing="30px" mt={10}>
        <Center>
          <Box px={10} maxW="70%">
            <Box py={5}>
            <Text as="h2" textAlign="center" fontSize="5xl">
                Testimonios
              </Text>
            </Box>
            <CardTestimonials />
          </Box>
        </Center>
      </SimpleGrid>
      <Footer />
    </Fragment>
  );
};

export default Testimonials;
