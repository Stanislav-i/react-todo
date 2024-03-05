import styled from 'styled-components';

export const NotesList = styled.div`

`
export const NoteDiv = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
    cursor: pointer;
`

export const NoteText = styled.div`
    align-items: center;
    width: 500px;
    padding-left: 5px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #3798ff;
`

export const NoteTextCompleted = styled.div`
    align-items: center;
    width: 500px;
    padding-left: 5px;
    border: 1px solid black;
    border-radius: 5px;
    text-decoration: line-through;
    background-color: #37ff73;
`