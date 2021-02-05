import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Title, ImageWrapper, Img, Favorite } from './style';
import api from '../../services/request';
export default function ModalComponent({ open, controlModal, hero }) {
    const [name, setName] = useState(hero ? hero[0] : undefined);
    const [description, setDescription] = useState(hero ? hero[1] : undefined);
    const [favorite, setFavorite] = useState(hero ? hero[2] > 0 : false);
    const [img64, setImage64] = useState(hero ? hero[3] : undefined);
    const [image, setImage] = useState(hero ? hero[3] : '/img/defaultImage.png');
    const [loading, setLoading] = useState(false);
    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };

    const requestHero = () => {
        let formtData = new FormData();
        formtData.append('name', name);
        formtData.append('description', description);
        formtData.append('image', img64);
        formtData.append('favorite', favorite ? 1 : 0);
        setLoading(true);
        if (!hero) {
            api.post(formtData).then(() => {
                setLoading(false);
                location.reload();
            });
        } else {
            api.put(formtData).then(() => {
                setLoading(false);
                location.reload();
            });
        }
    };

    const removeHero = () => {
        setLoading(true);
        api.remove(name).then(() => {
            alert(`Herói removido com sucesso:${name}`);

            setLoading(false);
            location.reload();
        });
    };

    const chooseImage = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
        getBase64(event.target.files[0], (result) => setImage64(result));
    };

    const openFileInput = () => {
        document.getElementById('inputImage').click();
    };

    const renderModal = () => (
        <Modal
            show={open}
            onHide={controlModal}
            backdrop="static"
            keyboard={false}
            enforceFocus={false}>
            <Modal.Header closeButton>
                <Title>
                    <Modal.Title>{hero ? name : 'Adicionar Herói'}</Modal.Title>
                    {hero ? (
                        <Favorite onClick={() => setFavorite(!favorite)}>
                            <FontAwesomeIcon
                                icon={faHeart}
                                className={favorite ? 'favorite' : 'unfavorite'}
                            />
                        </Favorite>
                    ) : (
                        ''
                    )}
                </Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <ImageWrapper>
                        <button type="button" onClick={() => openFileInput()}>
                            <Img src={image} alt="hero name" />
                        </button>
                        <Form.File
                            id="inputImage"
                            label="Example file input"
                            onChange={(event) => {
                                chooseImage(event);
                            }}
                        />
                    </ImageWrapper>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nome do super herói"
                            defaultValue={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <Form.Text className="text-muted">
                            Super Herói adicionado não pode já existir
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                            as="textarea"
                            maxLength={200}
                            rows={3}
                            defaultValue={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        <Form.Text className="text-muted">{`Máximo 200 caracteres - ${
                            description?.length ? description?.length : '0'
                        }/200`}</Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {hero ? (
                    <Button variant="danger" onClick={() => removeHero()}>
                        Excluir
                    </Button>
                ) : (
                    ''
                )}
                <Button variant="primary" onClick={() => requestHero()}>
                    {hero ? 'Alterar' : 'Adicionar'}
                </Button>
            </Modal.Footer>
        </Modal>
    );

    const renderLoading = () => (
        <Modal
            show={open}
            onHide={controlModal}
            backdrop="static"
            keyboard={false}
            enforceFocus={false}>
            <img src="/img/saveData.gif" alt="loading" />
        </Modal>
    );

    return loading ? renderLoading() : renderModal();
}
