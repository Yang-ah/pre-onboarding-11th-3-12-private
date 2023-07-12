import React from 'react';
import { IIssue } from '../../models';
import { Advertisement, IssueTitle, Loading } from '../../components';
import useIssuesInfiniteScroll from '../../hooks/useIssuesInfiniteScroll';
import styled from '@emotion/styled';
import { IconLeaf } from '../../assets';

const Home = () => {
  const { issues, isLoading } = useIssuesInfiniteScroll();

  return (
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
            <div>
              <StateTag>{issue.state === 'open' && <IconLeaf />}</StateTag>
              <IssueTitle
                number={issue.number}
                title={issue.title}
                created_at={issue.created_at}
                comments={issue.comments}
                username={issue.user.login}
              />
            </div>
          </React.Fragment>
        );
      })}
      {isLoading && <Loading />}
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

  > div {
    border-radius: 4px;
    padding: 12px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    border: 0.5px solid #d0d7de;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const StateTag = styled.div`
  width: 24px;
  > svg {
    width: 24px;
    height: 24px;
    fill: #217e3b;
  }
`;

export default Home;
