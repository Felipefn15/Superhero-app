import React from 'react';
import { Card, Img, Title, Description } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
export default function CardComponent({ hero }) {
    return (
        <Card>
            <Img src="/img/logo.png" alt="hero name" />
            <Title>{hero[0]}</Title>
            <Description>{hero[1]}</Description>
            <FontAwesomeIcon icon={faHeart} />
        </Card>
    );
}
