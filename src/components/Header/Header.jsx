import Counter from 'components/Counter/Counter';
import Filters from 'components/Filters/Filters';
import React from 'react';
import { HeaderDiv } from './Header.styled';

const Header = () => {
  return (
    <HeaderDiv>
      <Counter />
      <Filters />
    </HeaderDiv>
  );
};

export default Header;
