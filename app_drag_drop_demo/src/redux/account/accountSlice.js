import { createSlice } from '@reduxjs/toolkit';

const initialState =[
    {
        userString:'nex12220',
        isActive:false
    },
    {
        userString:'hex30202',
        isActive:false
    }
];


const accountSlice = createSlice(
    {
        name:'accounts',
        initialState,
        reducers:{
            logIn(state, action){
                const {userString} = action.payload;
                const existingAccount = state.find(account => account.userString === userString);
                const loggedInAccount = state.find(account => account.isActive === true);
                if (existingAccount) {
                    existingAccount.isActive = true;
                    loggedInAccount.isActive = false;
                }
            }
        }
    }
)

export default accountSlice.reducer;