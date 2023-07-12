import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IssueTitle } from '../../components';
import ReactMarkdown from 'react-markdown';
import { LoadingPage } from '..';
import useDetail from '../../hooks/useDetail';

const Detail = () => {
  const navigate = useNavigate();
  const { detail, isLoading } = useDetail();

  return isLoading ? (
    <LoadingPage />
  ) : (
    <main>
      <h1>Detail</h1>
      <button onClick={() => navigate(-1)}>뒤로가기~</button>

      <img src={detail.user.avatar_url} alt="userImage" />
      <IssueTitle
        key={detail.created_at + detail.number}
        number={detail.number}
        title={detail.title}
        created_at={detail.created_at}
        commentCount={detail.commentCount}
        username={detail.user.login}
      />
      <ReactMarkdown>{detail.body}</ReactMarkdown>
    </main>
  );
};

export default Detail;
