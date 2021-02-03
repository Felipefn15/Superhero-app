import React from 'react';
import { Card, Img, Title, Description } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
export default function newCardComponent() {
    return (
        <Card>
            <FontAwesomeIcon icon={faPlus} />
        </Card>
    );
}
