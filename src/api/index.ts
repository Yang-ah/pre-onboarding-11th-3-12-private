import { ITitle } from '../models';
import apiClient from './apiClient';

export const getIssues = ({ organization, repository }: ITitle) => {
  return apiClient.get(`${organization}/${repository}/issues`, {
    params: { sort: 'comments' },
  });
};
