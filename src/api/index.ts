import { IGetAnIssue, IGetIssues } from '../models';
import apiClient from './apiClient';

export const getIssues = ({
  organization,
  repository,
  page = 1,
}: IGetIssues) => {
  return apiClient.get(`${organization}/${repository}/issues`, {
    params: { sort: 'comments', page },
  });
};

export const getAnIssue = ({ organization, repository, id }: IGetAnIssue) => {
  return apiClient.get(`${organization}/${repository}/issues/${id}`);
};
