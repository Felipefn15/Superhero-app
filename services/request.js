import axios from 'axios';

const url = 'https://fn-superhero-api.herokuapp.com/hero';
// const url = 'http://0.0.0.0:5001/hero';

export default class Api {
    static get(name, favorite) {
        return axios.get(url, {
            params: {
                name: name,
                favorite: favorite
            }
        });
    }
    static post(formData) {
        return axios({
            method: 'post',
            url: url,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    }
    static put(formData) {
        return axios({
            method: 'put',
            url: url,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    }
    static remove(name) {
        return axios.delete(url, {
            params: {
                name: name
            }
        });
    }
}
