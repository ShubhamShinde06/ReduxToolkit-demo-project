import {createAction, createReducer, createSlice} from '@reduxjs/toolkit'
import reducer from './cart'


// method - 2
// const initialState = {
//     products: [],
//     IsLoading: false,
//     error: ''
// }

// export const UpdateProductAction = createAction('UPDATE_PRODUCT') // action create

// const productReducer = createReducer(initialState, function(builder){
//     builder.addCase(UpdateProductAction, function(state, action){
//         state.products = action.payload
//     })
// })

// export default productReducer

const productSlice = createSlice({
    name: 'product',
    initialState: {
        product:{}, 
        IsLoading: false, 
        error:""
    },
    reducers:{
        getData: function(state, action){
            state.product = action.payload
        },
        isLoading: function(state, action){
            state.IsLoading = action.payload
        },
        Error: function(state, action){
            state.error = action.payload
        }
    }
})

export default productSlice.reducer 

export const {getData, isLoading, Error} = productSlice.actions 