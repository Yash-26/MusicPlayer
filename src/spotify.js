import axios from 'axios';
import { debounce } from 'lodash';

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "f056005b69634ae6961ff67bea0b3cb0";
const redirectUrl = "http://localhost:3000";
const scopes = ["user-library-read","playlist-read-private"];



export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20")}&response_type=token&show_dialog=true`;


const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};




// const debouncedSetClientToken = debounce((token) => {
//     apiClient.interceptors.request.use(async function (config) {
//       config.headers.Authorization = "Bearer " + token;
//       return config;
//     });
//   }, 1000); 
  
//   export const setClientToken = (token) => {
//     debouncedSetClientToken(token);
//   };

export default apiClient;

