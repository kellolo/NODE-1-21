import axios from 'axios';

let token = localStorage.tokenAuth || null;

function sendRequest() {
    const axiosSettings = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + token
        },
        crossdomain: true
    }
    return axios.create(axiosSettings);
}

export const instance = sendRequest();
