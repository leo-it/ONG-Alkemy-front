// Import React
import React, { useState } from 'react';

// Import Const variables
import { 
    FIRST_SLIDE,
    MIDDLE_SLIDE, 
    LAST_SLIDE, 
    SLIDE_BUTTONS, 
    SLIDER_FIRST_POSITION,
    SLIDER_MIDDLE_POSITION,
    SLIDER_LAST_POSITION,
    SLIDER_ID,
    SLIDE_NO_TEXT,
    SLIDE_NO_IMAGE,
    ONG_NAME
} from '../../consts/const';

// Import Chakra for Styles
import { Flex, Image, Box } from '@chakra-ui/react'

// Import Component
import SliderButtonComponent from './SliderButtonComponent';

// Example Slide -- Will be deleted
const ExampleSlide = (props) => {
    const {imageUrl} = props.slide;
    return <Flex justify="center" minW="100vw" maxW="100vw" h="500px">
        <Image src={imageUrl} alt={ONG_NAME} maxW="100%" h="100%" />
    </Flex>
}

// Export Component
export default function SliderComponent(props) {

    // Stores the slides info received  
    const slides = [
        {
            imageUrl: props.slides ? props.slides[FIRST_SLIDE].imageUrl : SLIDE_NO_IMAGE,
            text: props.slides ? props.slides[FIRST_SLIDE].text : SLIDE_NO_TEXT
        },
        {
            imageUrl: props.slides ? props.slides[MIDDLE_SLIDE].imageUrl : SLIDE_NO_IMAGE,
            text: props.slides ? props.slides[MIDDLE_SLIDE].text : SLIDE_NO_TEXT
        },
        {
            imageUrl: props.slides ? props.slides[LAST_SLIDE].imageUrl : SLIDE_NO_IMAGE,
            text: props.slides ? props.slides[LAST_SLIDE].text : SLIDE_NO_TEXT
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(FIRST_SLIDE);

    // Change Slide updating the Margin Left from the Slider
    const changeSlide = (slidePosition) => {
        setCurrentSlide(slidePosition);
        if(currentSlide === slidePosition){}
        else{
            if(slidePosition === FIRST_SLIDE) {document.getElementById(SLIDER_ID).style.marginLeft = `${SLIDER_FIRST_POSITION}vw`}
            if(slidePosition === MIDDLE_SLIDE) {document.getElementById(SLIDER_ID).style.marginLeft = `${SLIDER_MIDDLE_POSITION}vw`}
            if(slidePosition === LAST_SLIDE) {document.getElementById(SLIDER_ID).style.marginLeft = `${SLIDER_LAST_POSITION}vw`}
        }
    }

    return (
        <Box borderWidth="1px" overflow="hidden" bg="#fffaf0" pt="10px">
            <Flex id={SLIDER_ID} transition="1.5s all">
                {
                    slides.map((slide, i) => {
                        return <ExampleSlide slide={slide} key={i} />
                    })
                }
            </Flex>
            <Flex justify="center" m="10px">
                {
                    SLIDE_BUTTONS.map((slideButton, i) => {
                        return <SliderButtonComponent slidePosition={slideButton} changeSlide={changeSlide} currentSlide={currentSlide} key={i} />
                    })
                }
            </Flex>
        </Box>
    )
}