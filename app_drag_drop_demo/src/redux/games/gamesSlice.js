import { createSlice } from '@reduxjs/toolkit';

const initialState =[
    {
        gameName:'Pathfinder',
        gamePages:[
            "firstGame",
            "lateGame"
        ],
        gameDescription:'This is a game.'
        
    },
    {
        gameName:'D&D',
        gamePages:[
            "Goblins",
            "Evil"
        ],
        gameDescription:'This is a game.'
    }
];

const gamesSlice = createSlice(
    {
        name: 'games',
        initialState,
        reducers:{

        }
    }
)

export default gamesSlice.reducer;