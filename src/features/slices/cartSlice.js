import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        insert: (state, action) => {
            state.items.push(action.payload)
        },
        remove: (state, action) => {
            let x = state.items.findIndex((x) => x.id == action.payload)
            state.items.splice(x, 1)
        },
        clear: (state, action) => {
            state.items = []
        }
    }
})

export const {insert, remove, clear} = cartSlice.actions

export default cartSlice.reducer