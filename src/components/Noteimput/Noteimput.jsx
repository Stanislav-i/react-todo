import { Container } from 'components/Container';
import React from 'react';
import { AddNoteInput, NoteForm } from './Noteimput.styled';
import Button from 'components/Button/Button';

import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { addNote } from 'redux/addNoteSlice';

const Noteimput = () => {

  const dispatch = useDispatch();


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const note = form.elements.addNote.value;
        const noteId = nanoid();

        if (
            note.length >= 50
          ) {
            alert(`Note is too long`);
          } else {
            dispatch(addNote({ id: noteId, note: note, completed: false }));
          }

        form.reset();

      };
    return (
        <Container>
            <NoteForm onSubmit={handleSubmit}>
                <AddNoteInput type='text' name='addNote'/>
                <Button btnname={'Add Note'} type={'submit'} />
            </NoteForm>
        </Container>
    );
};

export default Noteimput;