// import from react.
import React, { useEffect, useState } from "react";

// imports externals libraries.
import { Button, Flex, Input, FormControl, FormLabel, Textarea } from "@chakra-ui/react";

import { SLIDE_IMAGE, SLIDE_TEXT, TEXTAREA_MIN_REQUIRED, ALERT_ERROR } from "../../consts/const";

import {CardAlertService} from '../../services/AlertService/AlertService'

import clientAxios from '../../services/Axios/axios'

const HomeEditForm = (props) => {
  //guardar el welcometext y las imagenes del slide
  const [welcomeText, setWelcomeText] = useState(props.welcomeText ? props.welcomeText : "");
  const [slides, setSlides] = useState(props.slides ? props.slides : [
    {
      imageUrl: "url",
      text: "este es el texto 1"
    }
  ]);

  //funcion que llama los datos para guardar dentro del state
  useEffect(()=>{
    clientAxios.get('organizations/public/1')
    .then(res => res.json())
    .then(data=>{
      setWelcomeText(data.welcometext)
      data.images.forEach(element => {
        setSlides(element)
      })
    }
        
      )
  })

  //cambio dentro del welcome text
  const handleWelcomeChange = (e) => {
    const welcomeValue = e.target.value;
    setWelcomeText(welcomeValue);
  };

  //cambio dentro de las imagenes y sus textos
  const handleSlidesChange = (e, slideId, input) => {
    let auxSlides = [...slides];

    if (input === SLIDE_IMAGE) {
      auxSlides[slideId].imageUrl = e.target.value;
    } else if (input === SLIDE_TEXT) {
      auxSlides[slideId].text = e.target.value;
    }
    setSlides(auxSlides);
  };

  //submit texto
  const handleSubmitText = async() => {
    if (welcomeText.length >= 20) {
      await clientAxios.put('/organizations/welcome-text', welcomeText)
    } else {
      CardAlertService({
        icon: ALERT_ERROR,
        title: TEXTAREA_MIN_REQUIRED
      })
    }
  };
 
  //submit imagen
  const handleSubmitImage = async()=>{
    await clientAxios.put('/images', slides)
  }

  const fileINPUT = React.createRef()
  return (
    <Flex
      position="relative"
      direction="column"
      align="center"
      bg="#fefefe"
      borderWidth="8px"
      w="40%"
      minW="250px"
      maxW="400px"
      minH="400px"
      p={4}
      color="#2a2b2c"
      borderRadius="5px"
      ml="auto"
      mr="auto"
    >
      <FormControl>
        <FormLabel textAlign="center">Texto de bienvenida</FormLabel>
        <br />
        <Textarea
          defaultValue={welcomeText}
          onChange={(e) => {
            handleWelcomeChange(e);
          }}
          size="md"
        />

        <br />
        
        <Flex justify="center" mt="25px">
        <Button onClick={handleSubmitText} type="submit">
            Editar Texto
          </Button>
          </Flex>
        </FormControl>
        <br/>
        <FormControl>
        {slides.map((slide, i = 0) => (
         <>
            <FormLabel textAlign="center">Slides</FormLabel>
            <br />
            {/*Faltaria una <Imagen> que imprima las imagenes traidas
            desde el getImages */}
            <Flex mb="10px" justify="space-around" key={(slide.id - 1) * 2}>
            <Input
              type="file"
              width="auto"
              display="none"
              ref={fileINPUT}
              onChange={(e) => {
                handleSlidesChange(e, i, SLIDE_IMAGE);
              }}
              name="image"
            />
            <Button
                  onClick={() => fileINPUT.current.click()}
                  style={{ borderRadius: "50%", margin: "5% 2.5%" }}
                >
                  +
                </Button>

            <Input
              width="auto"
              defaultValue={slide.text}
              onChange={(e) => {
                handleSlidesChange(e, i, SLIDE_TEXT);
              }}
              name="text"
            />
          </Flex>
          </>
        ))}
        
        <Flex justify="center" mt="25px">
          <Button onClick={handleSubmitImage} type="submit">
            Editar Imagen
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
}

export default HomeEditForm;
