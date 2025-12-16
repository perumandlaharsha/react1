import { configureStore } from "@reduxjs/toolkit";
import counterOp from '../features/CounterSlice'


export default configureStore({
  reducer:{
    Count:counterOp,
  }
})