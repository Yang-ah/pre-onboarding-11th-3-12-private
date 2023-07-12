import React, { useContext, useEffect, useState } from 'react';
import { IssuesContext } from '../..';
import { getIssues } from '../../api';
import { IIssue } from '../../models';
import { Advertisement, IssueTitle } from '../../components';

const adImage =
  'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100';

const Home = () => {
  const issues = useIssues();

  return (
    <main>
      <h1>Home</h1>
      {issues.map((issue: IIssue, index) => {
        return (
          <React.Fragment key={issue.created_at + issue.number}>
            {index % 4 === 0 && index !== 0 && (
              <Advertisement src={adImage} alt="wanted" />
            )}
            <IssueTitle
              number={issue.number}
              title={issue.title}
              created_at={issue.created_at}
              commentCount={issue.commentCount}
              username={issue.user.login}
            />
          </React.Fragment>
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
