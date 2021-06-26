import React from 'react'
import { Box, Image, WrapItem, Wrap, Center,Fragment,Text } from "@chakra-ui/react";
import SelectedUseState from './SelectedUseState'



const NewsSelected = () => {

  const [post] = SelectedUseState()

  return (
<Fragment>

  <Center >
      <Box p="6"
      height={{
      base: "100%", // 0-48em
      md: "50%", // 48em-80em,
      xl: "25%", // 80em+
    }} >
      <Wrap spacing={3}>
        <WrapItem borderRadius="lg">
          <Box
            boxShadow={"xl"}
            className="container"
            maxW="lg"
            overflow="hidden"
            borderWidth="1px"
            borderRadius="lg"
            
          >
            <div className="card-image">
              <Image src={post.img} h="300px" objectFit="cover" w="100%" />
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
                <Text>{post.id} - {post.title} </Text>
              </div>
            </Box>
            <Box p={4}
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
            >
              {post.body}
            </Box>
          </Box>
        </WrapItem>
      </Wrap>
    </Box>
</Center>

</Fragment>


  )
}

export default NewsSelected;
