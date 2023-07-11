import React, { useContext, useEffect, useState } from 'react';
import { IssuesContext } from '../..';
import { getIssues } from '../../api';
import { IIssue } from '../../models';

const Home = () => {
  const { issues } = useIssues();
  // console.log(issues[0].user.login);
  return <main>Home</main>;
};

const useIssues = () => {
  const title = useContext(IssuesContext);
  const [issues, setIssues] = useState<IIssue[]>([]);

  const getIssueList = async () => {
    const response = await getIssues({
      organization: title.organization,
      repository: title.repository,
    });

    setIssues(response.data);
  };

  useEffect(() => {
    getIssueList();
  }, []);

  return { issues, setIssues };
};

export default Home;
