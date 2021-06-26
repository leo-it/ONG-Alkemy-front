import React, { useContext, useEffect } from "react";
import { Box, Image, Text, WrapItem, Wrap, Badge } from "@chakra-ui/react";
import { Link } from 'react-router-dom'
import { NewsContext } from './NewsContext';

const NewsCards = () => {

  const { news, getNews } = useContext(NewsContext)

  useEffect(() => {
    getNews()
  }, [])

  return (
    <Wrap spacing={3}>
      {
        news.length > 0 ? (
          news.map((item) => (
            <Link to={`/novedades/${item.id}`} key={item.id}>
              <WrapItem borderRadius="lg" >
                <Box
                  boxShadow={"xl"}
                  className="container"
                  maxW="xs"
                  overflow="hidden"
                  borderWidth="1px"
                  borderRadius="lg"
                >
                  <div className="card-image">
                    <Image src={item.image} h="200px" />
                  </div>
                  <Box p={2}>
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      {item.category.name}
                    </Badge>
                  </Box>
                  <Box
                    bg="white"
                    p={4}
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                  >
                    <div className="card-title">
                      <Text as="samp" fontSize="xl">{item.name}</Text>
                    </div>
                  </Box>
                </Box>
              </WrapItem>
            </Link>
          ))
        ) : (
          <Text fontSize={["xl", "2xl", "3xl"]}>No hay Novedades por aqui</Text>
        )
      }
    </Wrap>
  );
};

export default NewsCards;
