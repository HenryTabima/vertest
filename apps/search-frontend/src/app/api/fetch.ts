import axios from 'axios';
import { environment } from '../../environments/environment';

const DEFAULT_FETCH_TIMEOUT = 10 * 1000;

const fetch = axios.create({
  baseURL: environment.apiBaseUrl,
  timeout: DEFAULT_FETCH_TIMEOUT,
});

fetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.reload();
    }
    return error;
  }
);

export default fetch;
