import React, { useState } from 'react';
import { Card } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from '../modal';
export default function newCardComponent() {
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    const handleShow = () => setOpenModal(true);
    return (
        <Card onClick={!openModal ? handleShow : null}>
            <FontAwesomeIcon icon={faPlus} />
            <Modal open={openModal} controlModal={handleClose} />
        </Card>
    );
}
