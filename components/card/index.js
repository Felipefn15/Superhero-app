import React, { useState } from 'react';
import { Card, Img, Title, Description } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Modal from '../modal';
export default function CardComponent({ hero }) {
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    const handleShow = () => setOpenModal(true);
    return (
        <Card
            className={`${hero[2] > 0 ? 'cardFavorite' : 'cardUnfavorite'}`}
            onClick={!openModal ? handleShow : null}>
            <Img src={hero[3]} alt="hero name" />
            <Title>{hero[0]}</Title>
            <Description>{hero[1]}</Description>
            <FontAwesomeIcon
                icon={faHeart}
                className={`${hero[2] > 0 ? 'favorite' : 'unfavorite'}`}
            />
            <Modal open={openModal} hero={hero} controlModal={handleClose} />
        </Card>
    );
}
