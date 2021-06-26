import React, { Fragment } from "react";
import { Center, Text, Box, SimpleGrid } from "@chakra-ui/react";
import CardActivities from "../../components/ActivitiesCards/index";
import Footer from "../../components/FooterComponent/Footer";
import Header from "../../components/Header/Header";
import { Rectangular } from "../../assets/css/globalStyles";

const Activities = () => {
  return (
    <Fragment>
      <Header />
      <SimpleGrid minChildWidth="400px" mt={10}>
        <Center>
          <Box px={10} maxW="80%">
            <Box marginTop="4rem" paddingBottom={5}>
              <Text as="h2" textAlign="center" fontSize="5xl">
                Actividades
              </Text>
              <Rectangular />
            </Box>
            <CardActivities />
          </Box>
        </Center>
      </SimpleGrid>

      <Footer />
    </Fragment>
  );
};

export default Activities;
