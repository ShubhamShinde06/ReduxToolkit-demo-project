import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// dispatch(fetchCart())
export const fetchCart = createAsyncThunk('cart/fetchCart', async function(_, thunkAPI) {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response.data)
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || 'Failed to fetch cart');
    }
});

// method - 1
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: {},
        isFetchCart: false,
        DataFromAxios: null,
        ErrorFromAxios: null
    },
    reducers: {
        updateCart: function(state, action) {
            const value = action.payload
            const key = value['id']

            if(state?.cart[key]?.count){
                state.cart[key].count += 1
            } else {
                state.cart[key] = {}
                state.cart[key].count = 1
                state.cart[key].value = value
            }
        }
    },
    extraReducers: function(bulider){
        bulider.addCase(fetchCart.pending, function(state, action){
            state.isFetchCart = true
        })
        bulider.addCase(fetchCart.fulfilled, function(state, action){
            state.DataFromAxios = action.payload
            state.isFetchCart = false
        })
        bulider.addCase(fetchCart.rejected, function(state, action){
            state.ErrorFromAxios = action.payload
            state.isFetchCart = false
        })
       
    }
})

export default cartSlice.reducer // store/index.js this provide

export const {updateCart} = cartSlice.actions  // this provide whare you use action dispatch
export const getCartSelector = (state) => state.cart;

