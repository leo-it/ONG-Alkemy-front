import React, { useState } from "react";

import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { Box, Button, Center, Input } from "@chakra-ui/react";
import CKEditor from "ckeditor4-react";

import {
  addTestimony,
  modifyTestimony,
} from "../../services/Axios/TestimonialsForm";
import { ONG_COLORS, REQUIRED_FIELD } from "../../consts/const";
import CKEditorConfig from "../../helpers/formTestimony/CKEditorConfig";
import validateForm from "../../helpers/formTestimony/validationForm";

function FormTestimonials({ data }) {
  const [contentError, setContentError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState(null);
  const [dataForm, setDataForm] = useState({
    name: data ? data.name : "",
    content: data ? data.content : "",
  });

  //insertar imagen
  const handleFile = (e) => {
    setFiles(e);
  };
  const insertFile = async () => {
    const f = new FormData();
    if (files) {
      files.forEach((element) => {
        f.append("image", element);
        setDataForm({ ...dataForm, image: f });
      });
    }
  };

  const handleInput = (e) => {
    setDataForm({ ...dataForm, name: e.target.value });
  };

  const handleEditorData = (e) => {
    setDataForm({ ...dataForm, content: e.editor.getData() });
  };
  console.log(dataForm);

  const handleSubmit = () => {
    console.log(dataForm);
    insertFile();
    validateForm(dataForm)
      .then(async () => {
        setLoading(true);
        setNameError(false);
        setContentError(false);
        setImageError(false);

        if (data) {
          await modifyTestimony(dataForm);
        } else {
          await addTestimony(dataForm);
        }
        setLoading(false);
      })
      .catch((error) => {
        setNameError(error.name);
        setContentError(error.content);
        setImageError(error.image);
      });
  };

  return (
    <Box boxShadow="md" p="6" rounded="md" bg="white">
      <Center>
        <Box w="80%" mt={8} mb={5}>
          <FormControl isInvalid={nameError}>
            <FormLabel htmlFor="name" fontWeight="bold">
              Título
            </FormLabel>
            <Input
              id="name"
              variant="flushed"
              defaultValue={dataForm.name}
              onChange={handleInput}
            />
            <FormErrorMessage>{REQUIRED_FIELD}</FormErrorMessage>
          </FormControl>
          <FormControl >
            <FormLabel fontWeight="bold">Imagen</FormLabel>

            <Box w="80%" justifyContent="flex-end">
              <Input
                id="image"
                type="file"
                name="file"
                color="red"
                onChange={(e) => handleFile(e.target.files)}
              />
              <FormErrorMessage>{REQUIRED_FIELD}</FormErrorMessage>
            </Box>
          </FormControl>
        </Box>
      </Center>

      <Center>
        <Box w="80%" mb={5}>
          <FormControl isInvalid={contentError}>
            <FormLabel fontWeight="bold">Contenido</FormLabel>
            <CKEditor
              config={CKEditorConfig}
              type="classic"
              data={dataForm.content}
              onChange={handleEditorData}
            />
            <FormErrorMessage>{REQUIRED_FIELD}</FormErrorMessage>
          </FormControl>
        </Box>
      </Center>

      <Center></Center>
      <Center>
        <Box display="flex" w="80%" justifyContent="flex-end">
          <Button
            bgColor={ONG_COLORS.BLUE}
            color="white"
            onClick={handleSubmit}
            isLoading={loading}
          >
            Actualizar
          </Button>
        </Box>
      </Center>
    </Box>
  );
}

export default FormTestimonials;
