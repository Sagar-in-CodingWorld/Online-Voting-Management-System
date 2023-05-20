import React, { useEffect } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';

export default function DownloadCard() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        onOpen();
    }, []);
 
return (
    <>

        {/* <button onClick={onOpen}>Trigger modal</button> */}
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Service Unavailable</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Sorry! This service is under construction. Sorry for this convenience. Check it later.
                </ModalBody>
                <ModalFooter>
                    {/* <button onClick={onClose}>/Close</button> */}
                    <NavLink to='/citizen'><button>Close</button></NavLink>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
)
}
