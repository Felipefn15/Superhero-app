import axios from 'axios';

const url = 'https://fn-superhero-api.herokuapp.com/';

export default class Api {
    static get(name, favorite) {
        return axios.get(`${url}/hero`, {
            params: {
                name: name,
                favorite: favorite
            }
        });
    }
}
