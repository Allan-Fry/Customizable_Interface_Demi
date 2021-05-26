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
            entryUpdate(state, action) {
                const { id, title, tags, description} = action.payload;
                const existingEntry = state.find(entry => entry.id ===id);
                if (existingEntry) {
                    existingEntry.description = description;
                    existingEntry.title = title;
                    existingEntry.tags = tags;
                }
            }
        }
    }
);

export const {entryUpdate} = entriesSlice.actions;

export default entriesSlice.reducer;