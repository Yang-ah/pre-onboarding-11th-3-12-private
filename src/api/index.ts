import { IAnIssue, ITitle } from '../models';
import apiClient from './apiClient';

export const getIssues = ({ organization, repository }: ITitle) => {
  return apiClient.get(`${organization}/${repository}/issues`, {
    params: { sort: 'comments' },
  });
};

export const getAnIssue = ({ organization, repository, id }: IAnIssue) => {
  return apiClient.get(`${organization}/${repository}/issues/${id}`);
};
