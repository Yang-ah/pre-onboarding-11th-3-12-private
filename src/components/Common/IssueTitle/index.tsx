import React from 'react';
import { IIssueTitle } from '../../../models';
import { useNavigate } from 'react-router-dom';

const IssueTitle = ({
  number,
  title,
  created_at,
  commentCount,
  username,
}: IIssueTitle) => {
  const navigate = useNavigate();
  const goDetail = () => navigate(`/detail/${number}`);

  return (
    <article style={{ border: '1px solid black' }} onClick={goDetail}>
      {/* TODO : style 적용 시 inline style 제거  */}
      <div># {number}</div>
      <div>title: {title}</div>
      <div>작성일 : {created_at.slice(0, 10)}</div>
      <div>{commentCount}</div>
      <div>{username}</div>
    </article>
  );
};

export default IssueTitle;
