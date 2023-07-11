import axios from 'axios';

const ORGANIZATION = 'facebook';
const REPOSITORY = 'react';

const BASE_URL = `https://api.github.com/repos/${ORGANIZATION}/${REPOSITORY}/`;

// TODO : 과제 제출 & 배포 시 token 숨기기
const TOKEN = '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';

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
