import React from 'react';

import { Button, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, 
         ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";

import { DeleteIcon } from '@chakra-ui/icons';

const BackofficeModalDelete = ({title, text, confirm}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const confirmDelete = () =>{
    onClose ();
    confirm ();
  } 

  return ( 
    <>
      <IconButton ml="15px" isRound="true" colorScheme="red" size="sm" icon={<DeleteIcon />}
                  onClick={onOpen}/>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{text}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={confirmDelete}>ELiminar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
 
export default BackofficeModalDelete;