import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Title = styled.div`
    display: flex;
    align-items: center;
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .form-file {
        display: none;
    }
    button {
        border: none;
        background-color: white;
    }
`;
export const Img = styled.img`
    object-fit: cover;
    cursor: pointer;
    width: 400px;
    height: 150px;
    @media (max-width: 450px) {
        width: 200px;
    }
`;

export const Favorite = styled.button`
    background-color: transparent;
    border: none;
    margin: 0px;
    margin-left: 10px;
    padding: 0px;

    .favorite {
        color: red;
        &:hover {
            cursor: pointer;
            color: black;
        }
    }
    &:hover {
        cursor: pointer;
        color: red;
    }
`;
