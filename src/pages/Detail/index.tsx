import React from 'react';
import { IssueTitle } from '../../components';
import ReactMarkdown from 'react-markdown';
import { LoadingPage } from '..';
import useDetail from '../../hooks/useDetail';
import styled from '@emotion/styled';

const Detail = () => {
  const { detail, isLoading } = useDetail();

  return isLoading ? (
    <LoadingPage />
  ) : (
    <main>
      <Header>
        <ImageContainer>
          <img src={detail.user.avatar_url} alt="userImage" />
        </ImageContainer>

        <IssueTitle
          key={detail.created_at + detail.number}
          number={detail.number}
          title={detail.title}
          created_at={detail.created_at}
          comments={detail.comments}
          username={detail.user.login}
        />
      </Header>
      <ReactMarkdown>{detail.body}</ReactMarkdown>
    </main>
  );
};

const Header = styled.header`
  display: flex;
  margin-bottom: 32px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 12px;

  > img {
    width: 100%;
    border-radius: 4px;
  }
`;
export default Detail;
