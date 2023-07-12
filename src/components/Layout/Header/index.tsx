import React, { useContext } from 'react';
import { TitleContext } from '../../..';
import styled from '@emotion/styled';

const Header = () => {
  const title = useContext(TitleContext);
  return (
    <HeaderBox>
      {title.organization.toUpperCase()} / {title.repository.toUpperCase()}
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  width: 100%;
  min-width: 400px;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 0.5px;
  padding-bottom: 40px;
  text-align: center;
`;

export default Header;
