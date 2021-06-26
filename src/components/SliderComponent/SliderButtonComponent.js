import React from 'react';
import {Box} from '@chakra-ui/react';
import { 
    FIRST_SLIDE,
    MIDDLE_SLIDE, 
    LAST_SLIDE, 
    ONG_COLORS,
    SLIDE_BUTTON_DEFAULT_BG,
} from '../../consts/const';


export default function SliderButtonComponent(props) {
    return <Box 
        onClick={() => props.changeSlide(props.slidePosition)}
        w="15px"
        h="15px"
        border="1px solid #2a2b2c"
        borderRadius="50%"
        cursor="pointer"
        ml="20px"
        bg={props.slidePosition === FIRST_SLIDE && props.currentSlide === FIRST_SLIDE ? ONG_COLORS.RED :
            props.slidePosition === MIDDLE_SLIDE && props.currentSlide === MIDDLE_SLIDE ? ONG_COLORS.YELLOW:
            props.slidePosition === LAST_SLIDE && props.currentSlide === LAST_SLIDE ? ONG_COLORS.BLUE : SLIDE_BUTTON_DEFAULT_BG}
    ></Box>
}