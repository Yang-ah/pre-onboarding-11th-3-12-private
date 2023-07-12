import React from 'react';
import { IIssue } from '../../models';
import { Advertisement, IssueTitle } from '../../components';
import { LoadingPage } from '..';
import useIssuesInfiniteScroll from '../../hooks/useIssuesInfiniteScroll';

const Home = () => {
  const { issues, isLoading } = useIssuesInfiniteScroll();

  return isLoading ? (
    <LoadingPage />
  ) : (
    <main>
      {issues.map((issue: IIssue, index) => {
        return (
          <React.Fragment key={issue.created_at + issue.number}>
            {index % 4 === 0 && index !== 0 && (
              <Advertisement
                src={adObject.src}
                alt={adObject.alt}
                path={adObject.path}
              />
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

const adObject = {
  src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
  alt: 'wanted',
  path: 'https://www.wanted.co.kr/',
};

export default Home;
