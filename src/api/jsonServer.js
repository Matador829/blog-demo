import axios from 'axios';

export default axios.create({
    //Change this every 8 hours because of ngrok
    baseURL: 'https://a18c-2601-646-381-3be0-51bd-339c-5d69-f2bb.ngrok-free.app'
});