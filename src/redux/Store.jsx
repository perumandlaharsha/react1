import { configureStore } from "@reduxjs/toolkit";
import counterOp from '../features/CounterSlice'
import cartOp from '../features/CartSlice'
import productsOp from './Cards/FetchProductsSlice'


export default configureStore({
  reducer:{
    Count:counterOp,
    cart:cartOp,
    products:productsOp
  }
})