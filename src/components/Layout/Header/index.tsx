import React, { useContext } from 'react';
import { TitleContext } from '../../..';

const Header = () => {
  const title = useContext(TitleContext);
  return (
    <header>
      {title.organization.toUpperCase()} / {title.repository.toUpperCase()}
    </header>
  );
};

export default Header;
