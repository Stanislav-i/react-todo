import Button from 'components/Button/DeleteButton';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, completeNote } from 'redux/addNoteSlice';
import {
  NoteDiv,
  NoteText,
  NoteTextCompleted,
  NotesUl,
} from './NotesList.styled';

const NotesList = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes.data);
  const filter = useSelector(state => state.filter);

  const getfilteredList = (allNotes, statusFilter) => {
    switch (statusFilter) {
      case 'Active':
        return allNotes.filter(note => !note.completed);
      case 'Completed':
        return allNotes.filter(note => note.completed);
      default:
        return allNotes;
    }
  };

  const filteredList = getfilteredList(notes, filter.filter);

  return (
    <NotesUl>
      {filteredList.map(({ id, note, completed }) => (
        <NoteDiv key={id}>
          {completed ? (
            <NoteTextCompleted onClick={() => dispatch(completeNote(id))}>
              {note}
            </NoteTextCompleted>
          ) : (
            <NoteText onClick={() => dispatch(completeNote(id))}>
              {note}
            </NoteText>
          )}
          <Button
            btnname={'Delete'}
            handleBtnClick={() => dispatch(deleteNote(id))}
          />
        </NoteDiv>
      ))}
    </NotesUl>
  );
};

export default NotesList;
