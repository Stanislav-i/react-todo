import styled from 'styled-components';

export const NotesUl = styled.ul`

`
export const NoteDiv = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
`

export const NoteText = styled.div`
    align-items: center;
    width: 500px;
    padding-left: 5px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #ffffff;
    cursor: pointer;
`

export const NoteTextCompleted = styled.div`
    align-items: center;
    width: 500px;
    padding-left: 5px;
    border: 1px solid black;
    border-radius: 5px;
    text-decoration: line-through;
    background-color: #37ff73;
    cursor: pointer;
`