import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'news',
    initialState:{
        data:[],
    },
    reducers:{
        addmore:(state,action)=>{
            state.data.push(action.payload);
        },
        clearData:(state,action)=>{
            state.data.length=0;
        }
    }

})

export const {addmore,clearData} = cartSlice.actions;

export default cartSlice.reducer;

