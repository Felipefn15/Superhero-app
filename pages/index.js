import React, { useEffect, useState } from 'react';
import { HerosWrapper, Header, Search, Cards, Favorite, Loading } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/card';
import NewCard from '../components/newCard';
import api from '../services/request';
export default function Home() {
    const [heros, setHeros] = useState();
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [favorite, setFavorite] = useState(false);
    useEffect(() => {
        api.get(search, favorite ? 1 : 3).then((data) => {
            setHeros(data.data.data);
            setLoading(false);
        });
    }, []);
    const searchHero = (search, favorite) => {
        setHeros();
        setLoading(true);
        setFavorite(favorite);
        setSearch(search);
        console.log({ favorite, search });
        api.get(search, favorite ? 1 : 3).then((data) => {
            setLoading(false);
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
                    <Favorite
                        onClick={() => {
                            searchHero(search, !favorite);
                        }}>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className={favorite ? 'favorite' : 'unfavorite'}
                        />
                    </Favorite>
                </Search>
            </Header>
            {loading ? (
                <Loading>
                    <img src="/img/loading.gif" alt="loading" />
                </Loading>
            ) : (
                <Cards>
                    {heros?.map((hero) => {
                        return <Card hero={hero} key={hero[0]} />;
                    })}
                    <NewCard />
                </Cards>
            )}
        </HerosWrapper>
    );
}
