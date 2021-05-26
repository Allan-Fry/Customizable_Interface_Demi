import { createSlice } from '@reduxjs/toolkit';


const initialState =[
    {
        pageName:"firstPage",
        rowID:"0",
        area:[{
            colName:"col1",
            content:[]
        },
        {
            colName:"col2",
            content:[]
        },
        {
            colName:"col3",
            content:[]
        }
        ]
    },
    {
        pageName:"firstPage",
        rowID:"1",
        area:[{
            colName:"col1",
            content:[]
        },
        {
            colName:"col2",
            content:[]
        },
        {
            colName:"col3",
            content:[]
        }
        ]
    },
    {
        pageName:"firstPage",
        rowID:"2",
        area:[{
            colName:"col1",
            content:[]
        },
        {
            colName:"col2",
            content:[]
        },
        {
            colName:"col3",
            content:[]
        }
        ]
    }
];

const gridsSlice = createSlice(
    {
        name: 'grids',
        initialState,
        reducers:{
        }
    }
);



export default gridsSlice.reducer;