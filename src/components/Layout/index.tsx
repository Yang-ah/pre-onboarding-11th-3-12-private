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
  min-height: 100vh;
  padding: 40px 120px;
  background-color: #f6f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Layout;
