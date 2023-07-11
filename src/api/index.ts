import apiClient from './apiClient';

export const getIssues = () => {
  return apiClient.get('issues', {
    params: { sort: 'comments' },
  });
};
