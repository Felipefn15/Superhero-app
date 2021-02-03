import styled from 'styled-components';
export const HerosWrapper = styled.main`
    height: 100vh;
    width: 100vw;
`;
export const Header = styled.main`
    display: flex;
    align-items: center;
    padding: 30px;
    background-image:url("/img/logo.jpg");
`;

export const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        margin-left: 10px;
        color: white;
        cursor: pointer;
    }
    input {
        padding: 5px;
        width: 65%;
        border-radius: 8px;
        border: none;
    }
`;

export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

