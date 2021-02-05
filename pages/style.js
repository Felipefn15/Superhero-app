import styled from 'styled-components';
export const HerosWrapper = styled.main`
    height: 100vh;
    width: 100vw;
    .true {
        display: block !important;
    }
    .cardFavorite {
        background-color: #f58e20;
        color: white;
        &:hover {
            background-color: #3b6280;
            color: white;
            cursor: pointer;
        }
    }
`;
export const Header = styled.main`
    display: flex;
    align-items: center;
    padding: 30px;
    background-image: url('/img/logo.jpg');
`;

export const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        margin-left: 10px;
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
            color: white;
        }
    }
    .unfavorite {
        color: white;
        &:hover {
            cursor: pointer;
            color: red;
        }
    }
`;

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
