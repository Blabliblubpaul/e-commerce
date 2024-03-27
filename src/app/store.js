import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/slices/cartSlice";
import themeSliceReducer from "../features/slices/themeSlice";

export default configureStore({
    reducer: {
        cart: cartSliceReducer,
        theme: themeSliceReducer
    }
})