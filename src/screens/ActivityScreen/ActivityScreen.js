// Import React
import React, { Fragment } from 'react';

// Import Chakra
import { Flex } from '@chakra-ui/layout';

// Import Components
import Header from "../../components/Header/Header";
import NoActivity from './components/NoActivity';
import ActivityDetails from './components/ActivityDetails';

// Export Component
export default function ActivityScreen(props) {

  return (
    <Fragment>
      <Header/>
    
      <Flex direction="column" align="center" justify="center" w="100vw" minH="calc(100vh - 3.05rem)" pos="absolute">
      {
        // To display the activity, add a value as parameter for activityExists
        props.id ? (
          <ActivityDetails />
        ) : (
          <NoActivity />
        )
      }
      </Flex>
    </Fragment>
  );
}
