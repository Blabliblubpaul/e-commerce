import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/slices/cartSlice";

export default configureStore({
    reducer: {
        cart: cartSliceReducer
    }
})