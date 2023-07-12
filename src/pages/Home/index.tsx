import React from 'react';
import { IIssue } from '../../models';
import { Advertisement, IssueTitle } from '../../components';
import { LoadingPage } from '..';
import useIssuesInfiniteScroll from '../../hooks/useIssuesInfiniteScroll';
import styled from '@emotion/styled';

const Home = () => {
  const { issues, isLoading } = useIssuesInfiniteScroll();

  return isLoading ? (
    <LoadingPage />
  ) : (
    <Main>
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
            <StateTag>{issue.state}</StateTag>
            <IssueTitle
              number={issue.number}
              title={issue.title}
              created_at={issue.created_at}
              comments={issue.comments}
              username={issue.user.login}
            />
          </React.Fragment>
        );
      })}
    </Main>
  );
};

const adObject = {
  src: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
  alt: 'wanted',
  path: 'https://www.wanted.co.kr/',
};

const Main = styled.main`
  width: 80%;
  min-width: 400px;
  cursor: pointer;
`;

const StateTag = styled.div`
  width: 40px;
  text-align: center;
  border-radius: 12px;
  padding: 4px;
  margin: 4px 0;
  font-size: 14px;
  background-color: rgba(1, 1, 1, 0.1);
`;

export default Home;
