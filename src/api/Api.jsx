import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://api.disneyapi.dev'
});

export default Api;