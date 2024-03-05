import Button from 'components/Button/Button';
import { Container } from 'components/Container';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, completeNote } from 'redux/addNoteSlice';
import { NoteDiv, NoteText, NoteTextCompleted } from './NotesList.styled';

const NotesList = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.data)
    console.log(notes);
    
    return (
        <Container>
        <ul>
        {notes.map(({ id, note, completed }) => (
          <NoteDiv key={id} onClick={()=>dispatch(completeNote(id))}>
            {completed ? (<NoteTextCompleted>{note}</NoteTextCompleted>) : (<NoteText>{note}</NoteText>)}
            <Button btnname={'Delete'} handleBtnClick={()=>dispatch(deleteNote(id))} />
          </NoteDiv>
        ))}
      </ul>
      </Container>
    );
};

export default NotesList;