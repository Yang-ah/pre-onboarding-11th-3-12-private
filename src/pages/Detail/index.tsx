import React from 'react';
import { IssueTitle, Loading } from '../../components';
import ReactMarkdown from 'react-markdown';
import useDetail from '../../hooks/useDetail';
import styled from '@emotion/styled';

const Detail = () => {
  const { detail, isLoading } = useDetail();

  return isLoading ? (
    <Loading />
  ) : (
    <Wrap>
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
      <Main>
        <ReactMarkdown>{detail.body}</ReactMarkdown>
      </Main>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 80%;
`;

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

const Main = styled.section`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 40px;
  border-radius: 0px 40px 40px 40px;
  border: 0.5px solid #d0d7de;
  font-weight: 300;

  h1,
  h2 {
    width: 100%;
    padding: 20px 0;
    margin-bottom: 20px;
    border-bottom: 0.5px solid #d0d7de;
  }

  p {
    margin: 20px 0;
  }

  code {
    white-space: break-spaces;
    width: 100%;
    background-color: #eee;
    border-radius: 3px;
    padding: 0 3px;
  }

  img {
    margin: 20px 0;
    width: 100%;
    max-width: 600px;
  }

  li {
    padding: 8px 0;
  }
`;
export default Detail;
