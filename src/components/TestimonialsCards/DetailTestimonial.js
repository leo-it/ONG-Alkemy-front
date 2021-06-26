import React, { Fragment, useState, useEffect } from "react";
import { Box, Image, Text, WrapItem, Wrap, Center } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Footer from "../FooterComponent/Footer";
import clientAxios from "../../services/Axios/axios";
import {
  ALERT_ERROR,
  ERROR_QUERY_TITLE,
} from "../../consts/const";
import { ToastAlertService } from "../../services/AlertService/AlertService";
import { useParams } from "react-router";
import LoadingComponent from "../LoadingComponent";

const DetailTestimonial = () => {
  const { id } = useParams();
  const [testimony, setTestimony] = useState();

  useEffect(() => {
    clientAxios
      .get(`testimonials/${id}`)
      .then((res) => {
        setTestimony(res.data.data);
      })
      .catch(() => {
        ToastAlertService({
          icon: ALERT_ERROR,
          title: ERROR_QUERY_TITLE,
        });
      });
  }, [id]);
console.log(testimony);
  return (
    <Fragment>
      <Header />
      <Center>
        <Box
          p="6"
          height={{
            base: "100%", 
            md: "50%", 
            xl: "25%", 
          }}
        >
          <Wrap spacing={3}>
            <WrapItem borderRadius="lg">
              {testimony ? (
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
                      src={testimony.image}
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
                      <Text>{testimony.name} </Text>
                    </div>
                  </Box>
                  <Box
                    p={4}
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                  >
                    {testimony.content}
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

export default DetailTestimonial;
