// imports from react.
import React, { Fragment } from 'react';

// imports from externals libraries.
import { Box, Center, Grid, Wrap } from "@chakra-ui/react";

// imports local files.
import TextBannerComponent from '../../components/MembersComponent/TextBannerComponent';
import MembersCard from '../../components/MembersComponent/MembersCard';
import Footer from '../../components/FooterComponent/Footer';
import Header from '../../components/Header/Header';

import { TEXT_ABOUT_US, TEXT_MEMBERS, TITLE_ABOUT_US, TITLE_MEMBERS } from '../../consts/const';

const AboutUsScreen = () => {
  return (
    <Fragment>
      <Header/>
      
      <TextBannerComponent text={TEXT_ABOUT_US} title={TITLE_ABOUT_US} />
      
      <TextBannerComponent text={TEXT_MEMBERS} title={TITLE_MEMBERS} />
      <Grid>
        <Center>
          <Box maxW='90%' marginBottom={20}>
            <Wrap spacing={5}>
              <MembersCard />
            </Wrap>   
          </Box>
        </Center>
      </Grid>
      
      <Footer/>
    </Fragment>
  )
}

export default AboutUsScreen;