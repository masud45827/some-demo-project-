import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../state/CounterSlice"
export default configureStore({
    reducer:{
    counter:CounterReducer
    }
})