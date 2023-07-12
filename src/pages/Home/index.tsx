import React, { useContext, useEffect, useState } from 'react';
import { IssuesContext } from '../..';
import { getIssues } from '../../api';
import { IIssue } from '../../models';
import { IssueTitle } from '../../components/Common';

const Home = () => {
  const issues = useIssues();

  return (
    <main>
      <h1>Home</h1>
      {issues.map((issue: IIssue) => {
        return (
          <IssueTitle
            key={issue.created_at + issue.number}
            number={issue.number}
            title={issue.title}
            created_at={issue.created_at}
            commentCount={issue.commentCount}
            username={issue.user.login}
          />
        );
      })}
    </main>
  );
};

// number list 받아오기
const useIssues = () => {
  const { organization, repository } = useContext(IssuesContext);
  const [issues, setIssues] = useState<IIssue[]>([]);

  const getIssueList = async () => {
    const response = await getIssues({
      organization,
      repository,
    });

    setIssues(response.data);
  };

  useEffect(() => {
    getIssueList();
  }, []);

  return issues;
};

export default Home;
