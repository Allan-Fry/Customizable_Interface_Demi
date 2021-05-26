import { createSlice } from '@reduxjs/toolkit';

const initialState =[
    {
        gameName:'Pathfinder',
        gamePages:[
            "firstGame",
            "lateGame"
        ]
        
    },
    {
        pageName:'D&D',
        gamePages:[
            "Goblins",
            "Evil"
        ]
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