import { Fragment } from "react";

import { Box, SimpleGrid } from "@chakra-ui/react";

import FormContact from "../../components/formScreenContact/FormContact";
import TextContact from "../../components/textScreenContact/TextContact";
import Footer from '../../components/FooterComponent/Footer';
import Header from '../../components/Header/Header';

export default function ScreenContact() {
  return (
    <Fragment>
      <Header/>
      <SimpleGrid minChildWidth="450px" spacing="40px" mt={10}>
        <TextContact />
        <Box boxShadow="md" p="6" rounded="md" bg="white" height="445px">
          <FormContact />
        </Box>
      </SimpleGrid>
      <Footer/>
    </Fragment>
  );
}
