import React from "react";
import {
  Box,
  Image,
  Wrap,
  WrapItem,
  Text,
 
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LoadingComponent from "../LoadingComponent";
import "./styles.css";

import UseAxios from "./UseAxios";

const CardActivities = () => {
  const { activity } = UseAxios();
  
  return (
    <>
    <Wrap spacing={3}>
      {activity ? (
        activity.map((data) => (
          <Link to={`/actividades/${data.id}`} key={data.id}>
            <WrapItem borderRadius="lg">
              <Box
                boxShadow={"xl"}
                className="container"
                maxW="xs"
                overflow="hidden"
                borderWidth="1px"
                borderRadius="lg"
              >
                <div className="card-image">
                  <Image src={data.image} h="200px" />
                </div>
                <Box
                  bg="white"
                  p={4}
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  <div className="card-title">
                    <Text fontSize="2xl" as="samp">{data.name}</Text>
                  </div>
                  <div className="content">
                    <Text as="samp" fontSize="1xl">{data.content}</Text>
                  </div>
                </Box>
              </Box>
            </WrapItem>
          </Link>
        ))
      ) : (
        <LoadingComponent />
      )}
      </Wrap>
    </>
  );
};

export default CardActivities;
