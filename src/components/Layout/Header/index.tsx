import React, { useContext } from 'react';
import { IssuesContext } from '../../..';

const Header = () => {
  const title = useContext(IssuesContext);
  return (
    <header>
      {title.organization.toUpperCase()} / {title.repository.toUpperCase()}
    </header>
  );
};

export default Header;
