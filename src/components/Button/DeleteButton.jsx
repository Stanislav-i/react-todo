import React from 'react';
import { DeleteBtn } from './Button.styled';

const Button = ({btnname, type, handleBtnClick}) => {
    return (
        <DeleteBtn type={type} onClick={handleBtnClick}>{btnname}</DeleteBtn>
    );
};

export default Button;