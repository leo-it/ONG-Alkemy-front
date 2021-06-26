import React, { Fragment, useState, useEffect } from "react";
import { Box, Image, Text, WrapItem, Wrap, Center } from "@chakra-ui/react";
import Header from "../Header/Header";
import Footer from "../FooterComponent/Footer";
import clientAxios from "../../services/Axios/axios";
import {
  ALERT_ERROR,
  ERROR_QUERY_TITLE,
} from "../../consts/const";
import { ToastAlertService } from "../../services/AlertService/AlertService";
import { useParams } from "react-router";
import LoadingComponent from "../LoadingComponent";

const DetailActivities = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState();

  useEffect(() => {
    clientAxios
      .get(`activities/${id}`)
      .then((res) => {
        setActivity(res.data.data);
      })
      .catch(() => {
        ToastAlertService({
          icon: ALERT_ERROR,
          title: ERROR_QUERY_TITLE,
        });
      });
  }, [id]);

  return (
    <Fragment>
      <Header />
      <Center>
        <Box
          p="6"
          height={{
            base: "100%", // 0-48em
            md: "50%", // 48em-80em,
            xl: "25%", // 80em+
          }}
        >
          <Wrap spacing={3}>
            <WrapItem borderRadius="lg">
              {activity ? (
                <Box
                  boxShadow={"xl"}
                  className="container"
                  maxW="lg"
                  overflow="hidden"
                  borderWidth="1px"
                  borderRadius="lg"
                >
                  <div className="card-image">
                    <Image
                      /*                       src={activity.img}
                       */ src={activity.image}
                      h="300px"
                      objectFit="cover"
                      w="100%"
                    />
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
                      <Text>{activity.name} </Text>
                    </div>
                  </Box>
                  <Box
                    p={4}
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                  >
                    {activity.content}
                  </Box>
                </Box>
              ) : (
                <>
                  {<LoadingComponent />}
                  {ERROR_QUERY_TITLE}
                </>
              )}
            </WrapItem>
          </Wrap>
        </Box>
      </Center>
      <Footer />
    </Fragment>
  );
};

export default DetailActivities;
