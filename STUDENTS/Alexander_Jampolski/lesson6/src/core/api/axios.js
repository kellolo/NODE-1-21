import axios from 'axios';

const API_BASE_URL = process.env.VUE_APP_SERVER_API_URL;
const API_URL = API_BASE_URL ?? 'VUE_APP_SERVER_API_URL';

let token = localStorage.tokenGB;
token = token ? token : null;

function sendRequest() {
  const axiosSettings = {
    baseURL: API_URL,
    header: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    crossdomain: true
  }
  return axios.create(axiosSettings);
};

export const instance = sendRequest();