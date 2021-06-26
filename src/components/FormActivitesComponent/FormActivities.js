// imports from react.
import React, { useState } from 'react';

// imports from externals libraries.
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { Box, Button, Center, Input } from "@chakra-ui/react";
import  CKEditor  from 'ckeditor4-react';

// imports locals files.
import { addActivity, modifyActivity } from '../../services/Axios/ActivitiesService/ActivitiesFormService';
import { ONG_COLORS, REQUIRED_FIELD } from '../../consts/const';
import CKEditorConfig from './CKEditorConfig';
import validateForm from './validationForm';


function FormActivities ({data}) {
  const [contentError, setContentError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [loading, setLoading] = useState (false);
  const [dataForm, setDataForm] = useState ({
    name: data ? data.name : "" ,
    content: data? data.content : ""
  });
  
  const handleInput = (e) => {
    setDataForm({...dataForm, name: e.target.value});
  }
  
  const handleEditorData= (e) => {
    setDataForm({...dataForm, content: e.editor.getData()});
  }
  
  const handleSubmit = () => { 
    validateForm (dataForm)
      .then (async () => {
        setLoading (true);
        setNameError (false);
        setContentError (false);
        
        if (data) {
          await modifyActivity (dataForm);
        } else {
          await addActivity(dataForm);
        }
        setLoading (false);
      })
      .catch (error => {
        setNameError (error.name);
        setContentError (error.content);
      });   
  }

  return (
    <Box>
      <Center>
        <Box w="80%" mt={8} mb={5}>
          <FormControl isInvalid={nameError}>
            <FormLabel htmlFor="name" fontWeight="bold">Nombre de la Actividad</FormLabel>
            <Input id="name" variant="flushed" defaultValue={dataForm.name} onChange={handleInput}/>
            <FormErrorMessage>{REQUIRED_FIELD}</FormErrorMessage>
          </FormControl> 
        </Box>
      </Center>

      <Center>
        <Box w="80%" mb={5}>
          <FormControl isInvalid={contentError}>
            <FormLabel fontWeight="bold">Contenido de la Actividad</FormLabel>
            <CKEditor 
              config={CKEditorConfig}
              type= "classic"
              data={dataForm.content}
              onChange={handleEditorData}
            />
            <FormErrorMessage>{REQUIRED_FIELD}</FormErrorMessage>
          </FormControl>
        </Box>
      </Center>

      <Center>
        <Box display="flex" w="80%" justifyContent="flex-end">
          <Button bgColor={ONG_COLORS.BLUE} color="white" onClick={handleSubmit} isLoading={loading}>Actualizar</Button>
        </Box>
      </Center>
    </Box>
  )
}

export default FormActivities;