import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAnIssue } from '../../api';
import { IssuesContext } from '../..';
import { IssueTitle } from '../../components';
import { IDetail } from '../../models';

const Detail = () => {
  const navigate = useNavigate();
  const { number, title, created_at, body, commentCount, user } = useDetail();

  return (
    <main>
      <h1>Detail</h1>
      <button onClick={() => navigate(-1)}>뒤로가기~</button>

      <img src={user.avatar_url} alt="userImage" />
      <IssueTitle
        key={created_at + number}
        number={number}
        title={title}
        created_at={created_at}
        commentCount={commentCount}
        username={user.login}
      />
      <div>{body}</div>
    </main>
  );
};

export default Detail;

const useDetail = () => {
  const { id } = useParams();
  const { organization, repository } = useContext(IssuesContext);
  const [detail, setDetail] = useState<IDetail>({
    number: 0,
    title: '',
    created_at: '',
    body: '',
    commentCount: 0,
    user: {
      login: '',
      avatar_url: '',
    },
  });

  const getDetail = async () => {
    const response = await getAnIssue({
      organization,
      repository,
      id: Number(id),
    });

    const { title, created_at, body, commentCount, user } = response.data;

    setDetail({
      number: Number(id),
      title,
      created_at,
      body,
      commentCount,
      user: {
        login: user.login,
        avatar_url: user.avatar_url,
      },
    });
  };

  useEffect(() => {
    getDetail();
  }, []);

  return detail;
};
