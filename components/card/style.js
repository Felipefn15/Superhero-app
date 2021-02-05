import styled from 'styled-components';

export const Card = styled.button`
    width: 300px;
    height: 300px;
    text-align: center;
    margin: 20px;
    border: 1px solid gray;
    border-radius: 8px;
    background-color: white;
    padding: 0px;
    &:hover {
        background-color: #3b6280;
        color: white;
        cursor: pointer;
    }
    .favorite {
        color: red;
    }
    .cardFavorite {
        background-color: #f58e20;
    }
    @media (max-width: 450px) {
        margin: 10px;
    }
`;

export const Img = styled.img`
    width: 290px;
    height: 160px;
    object-fit: cover;
`;

export const Title = styled.h3`
    font-size: 20px;
    font-weight: bold;
`;
export const Description = styled.p`
    font-size: 10px;
`;
