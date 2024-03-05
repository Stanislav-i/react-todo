import { createSlice } from '@reduxjs/toolkit';

// import defaultContacts from '../data/defaultContacts';

const initialState = {
  data: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.data.push(action.payload);
    },
    deleteNote: (state, action) => {
      const index = state.data.findIndex(
        note => note.id === action.payload
      );
      state.data.splice(index, 1);
      // state.filter(contact => contact.id !== action.payload)
    },
    completeNote: (state, action) => {
        const index = state.data.findIndex(
            note => note.id === action.payload
          ); 
            state.data[index].completed = !state.data[index].completed;   
    },
  },
});

export const { addNote, deleteNote, completeNote } = notesSlice.actions;

export const notesReducer = notesSlice.reducer;