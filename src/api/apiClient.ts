import axios from 'axios';

const BASE_URL = `https://api.github.com/repos/`;
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5_000,
});

apiClient.interceptors.request.use(async config => {
  config.headers['Authorization'] = `Bearer ${TOKEN}`;
  config.headers['X-GitHub-Api-Version'] = '2022-11-28';
  return config;
});

export default apiClient;
