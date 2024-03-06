import React from 'react';
import { useSelector } from 'react-redux';
import { CounterDiv } from './Counter.styled';

const Counter = () => {
  const notes = useSelector(state => state.notes.data);
  const count = notes.reduce(
    (acc, note) => {
      if (note.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <CounterDiv>
      <h3>Notes</h3>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </CounterDiv>
  );
};

export default Counter;
