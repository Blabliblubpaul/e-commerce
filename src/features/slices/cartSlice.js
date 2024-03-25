import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        insert: (state, action) => {
            state.value.push(action.payload)
        },
        remove: (state, action) => {
            let x = state.indexOf(action.payload)
            state.value.delete(x)
        },
        removeById: (state, action) => {
            let x = state.value.findIndex((x) => {x.id == action.payload.id})
            state.value.delete(x)
        }
    }
})

export const {insert, remove, removeById} = cartSlice.actions

export default cartSlice.reducer