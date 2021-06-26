// imports from react.
import React, { Fragment } from "react";

// imports from externals libraries.
import { Center, Text, Box, SimpleGrid } from "@chakra-ui/react";

//imports from local files.
import NewsCards from "../../components/NewsListPublic/NewsCards";
import Footer from "../../components/FooterComponent/Footer";
import Header from "../../components/Header/Header";

// imports styles.
import { Rectangular } from '../../assets/css/globalStyles';

const NewsListPublic = () => {
  return (
    <Fragment>
      <Header />

      <SimpleGrid minChildWidth="400px" mt={10} >
        <Center>
          <Box px={10} maxW="80%">
            <Box marginTop="4rem" paddingBottom={5}>
              <Text as="h2" textAlign="center" fontSize="5xl">Novedades</Text>
              <Rectangular />
            </Box>

            <NewsCards />
          </Box>
        </Center>
      </SimpleGrid>

      <Footer />
    </Fragment>
  );
};

export default NewsListPublic;
