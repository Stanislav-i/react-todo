import Button from 'components/Button/AddButton';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FiltersDiv } from './Filters.styled';

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <FiltersDiv>
      <Button
        btnname={'All'}
        type={'submit'}
        handleBtnClick={() => dispatch(setFilter('All'))}
      />
      <Button
        btnname={'Completed'}
        type={'submit'}
        handleBtnClick={() => dispatch(setFilter('Completed'))}
      />
      <Button
        btnname={'Active'}
        type={'submit'}
        handleBtnClick={() => dispatch(setFilter('Active'))}
      />
    </FiltersDiv>
  );
};

export default Filters;
