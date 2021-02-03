import styled from 'styled-components';

export const Card = styled.div`
    width: 300px;
    height: 300px;
    text-align: center;
    margin: 20px;
    border: 1px solid gray;
    border-radius: 8px;
    svg {
        cursor: pointer;
        color: gray;
        &:hover {
            color: red;
        }
    }
`;

export const Img = styled.img`
    width: 290px;
    height: 160px;
    object-fit: cover;
`;

export const Title = styled.h3``;
export const Description = styled.p``;
