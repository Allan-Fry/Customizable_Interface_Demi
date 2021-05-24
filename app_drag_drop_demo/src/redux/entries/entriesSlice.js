import { createSlice } from '@reduxjs/toolkit';


const initialState =[
    {
        id: '1', 
        title: 'Powerfull Sword',
        tags: ['item'],
        description: 'A magical sword which makes the weilder stronger.'
    },
    {
        id: '2', 
        title: 'Fireball',
        tags: ['spell'],
        description: 'The most iconic spell.'
    }
];

const entriesSlice = createSlice(
    {
        name: 'entries',
        initialState,
        reducers:{

        }
    }
);

export default entriesSlice.reducer;