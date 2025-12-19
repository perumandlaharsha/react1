import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchProducts=createAsyncThunk('product/fetching',async()=>{
    const {data}=await axios.get('https://dummyjson.com/products');
    console.log(data.products)
    return data.products;
})

let productsSlice=createSlice({
    name:'products',
    initialState:{
        items:[],
        loading:false,
        error:null,
    },

    extraReducers:(builder)=>{
        builder
        .addCase(FetchProducts.pending,(state)=>{
            state.loading=true
        })
        .addCase(FetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.items=action.payload;
        })
        .addCase(FetchProducts.rejected,(state,action)=>{
          state.loading=false
            state.error=action.error.message;
        })
    }
})

export default productsSlice.reducer