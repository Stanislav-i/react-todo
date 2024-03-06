import React from 'react';
import { AddBtn } from './Button.styled';

const Button = ({ btnname, type, handleBtnClick }) => {
  return (
    <AddBtn type={type} onClick={handleBtnClick}>
      {btnname}
    </AddBtn>
  );
};

export default Button;
