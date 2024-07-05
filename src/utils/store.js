import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Slice' 

const appstore = configureStore({
    reducer:{
        news:cartReducer,
    }
});

export default appstore;