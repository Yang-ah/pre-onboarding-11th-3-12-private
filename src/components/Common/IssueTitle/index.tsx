import React from 'react';
import { IIssueTitle } from '../../../models';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const IssueTitle = ({
  number,
  title,
  created_at,
  comments,
  username,
}: IIssueTitle) => {
  const navigate = useNavigate();
  const goDetail = () => navigate(`/detail/${number}`);

  return (
    <Article onClick={goDetail}>
      <Left>
        <Title>
          <span># {number} </span>
          {title}
        </Title>

        <Bottom>
          <span>작성자 : {username} </span>
          <span>작성일 : {created_at.slice(0, 10)}</span>
        </Bottom>
      </Left>
      <div>코멘트 : {comments}</div>
    </Article>
  );
};

const Article = styled.article`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid grey;
  align-items: center;
`;

const Left = styled.div``;

const Title = styled.p`
  font-size: 18px;

  > span {
    font-weight: 600;
  }
`;
const Bottom = styled.p`
  font-size: 14px;
  color: grey;
`;

export default IssueTitle;
