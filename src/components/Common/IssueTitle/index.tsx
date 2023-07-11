import React from 'react';
import { IIssueTitle } from '../../../models';

const IssueTitle = ({
  number,
  title,
  created_at,
  commentCount,
  username,
}: IIssueTitle) => {
  return (
    <article style={{ border: '1px solid black' }}>
      <div># {number}</div>
      <div>title: {title}</div>
      <div>작성일 : {created_at.slice(0, 10)}</div>
      <div>{commentCount}</div>
      <div>{username}</div>
    </article>
  );
};

export default IssueTitle;
