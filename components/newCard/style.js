import styled from 'styled-components';

export const Card = styled.button`
    display: flex;
    width: 300px;
    height: 300px;
    background-color: white;
    align-items: center;
    justify-content: center;
    margin: 20px;
    border: 1px solid gray;
    border-radius: 8px;
    font-size: 50px;
    color: #3b6280;
    cursor: pointer;
    &:hover {
        background-color: #3b6280;
        color: white;
        border: 1px solid black;
    }
`;
