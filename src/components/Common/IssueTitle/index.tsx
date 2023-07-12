import React from 'react';
import { IIssueTitle } from '../../../models';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { IconMessage } from '../../../assets';

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
      <Right>
        <IconMessage />
        <div>{comments}</div>
      </Right>
    </Article>
  );
};

const Article = styled.article`
  width: 100%;
  padding: 16px;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  width: calc(100% - 50px);
  height: 100%;
`;

const Right = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  font-size: 12px;
  vertical-align: center;

  > svg {
    width: 30px;
    height: 30px;
    opacity: 0.2;
  }

  > svg,
  div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  > div {
    opacity: 0.4;
    padding-bottom: 4px;
  }
`;

const Title = styled.p`
  font-size: 20px;
  padding-bottom: 8px;

  > span {
    padding-right: 8px;
  }
`;
const Bottom = styled.p`
  font-size: 12px;
  font-weight: 200;

  > span {
    padding-right: 8px;
  }
`;

export default IssueTitle;
