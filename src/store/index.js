import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/product";
import cartSlice from './reducers/cart'

const store = configureStore({ 
    //devTools: false,
    trace: true, // after production trun off
    reducer: { 
        products:  productSlice,
        cart: cartSlice  
    }
});

export { store };
