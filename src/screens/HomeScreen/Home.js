// imports from react.
import React from 'react';
import { useSelector } from 'react-redux';

// imports from externals libraries.
import { Text, SimpleGrid } from "@chakra-ui/react";

// imports from local files.
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import Footer from '../../components/FooterComponent/Footer';
import Header from '../../components/Header/Header';
import NewsSelected from '../../components/NewsListPublic/SelectedNew/NewsSelected';
const Home = () => {
  const { welcomeText } = useSelector(state => state.home);

  return (
    <SimpleGrid mt={10}>
      <Header />
      <SliderComponent />
      <Text m="auto" maxW="1000px" w="70%" mt="6rem" as="h1" fontSize="2xl" textAlign="center">
        {welcomeText}
      </Text>

      {/* <NewsSelected/> */}

      <Footer />
    </SimpleGrid>
  )
}

export default Home;