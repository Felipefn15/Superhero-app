import React, { useEffect, useState } from 'react';
import { HerosWrapper, Header, Search, Cards } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/card';
import NewCard from '../components/newCard';
import api from '../services/request';
export default function Home() {
    const [heros, setHeros] = useState();
    useEffect(() => {
        api.get().then((data) => {
            setHeros(data.data.data);
        });
    }, []);
    const searchHero = (search) => {
        setHeros();
        api.get(search).then((data) => {
            setHeros(data.data.data);
        });
    };
    return (
        <HerosWrapper>
            <Header>
                <Search>
                    <input
                        type="text"
                        name="name"
                        placeholder="Pesquise aqui"
                        onChange={(event) => searchHero(event.target.value)}
                        autoComplete="off"
                    />
                    <FontAwesomeIcon icon={faSearch} />
                </Search>
            </Header>
            <Cards>
                {heros?.map((hero) => {
                    return <Card hero={hero} key={hero[0]} />;
                })}
                <NewCard />
            </Cards>
        </HerosWrapper>
    );
}
