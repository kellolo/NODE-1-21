import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_SERVER_API_URL;
const API_URL = API_BASE_URL ?? 'VUE_APP_SERVER_API_URL';

let token = localStorage.tokenAuth || null;

function sendRequest() {
  const axiosSettings = {
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + token
    },
    crossdomain: true
  }
  return axios.create(axiosSettings);
};

export const instance = sendRequest();
