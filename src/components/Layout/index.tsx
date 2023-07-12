import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from '@emotion/styled';

const Layout = () => {
  return (
    <Wrap>
      <Header />
      <Outlet />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  padding: 40px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
